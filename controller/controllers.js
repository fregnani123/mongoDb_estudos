const Person = require('../models/Person')

module.exports = {
    novoCadastro: async (req, res) => {
        const { name, salary } = req.body;
        let approved;

        if (salary < 1000) {
            approved = 'negado'
        } else {
           approved = 'aprovado';
        };

        if (!name || !salary) {
            return res.status(400).json({ error: 'Nome e salário são campos obrigatórios' });
        }
    
        const person = new Person({
            name,
            salary,
            approved
        });
    
        try {
            await Person.create(person);
            res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deletaCadastro: async (req, res) => {
        const personId = req.params.id; // Supondo que o ID da pessoa a ser deletada está nos parâmetros da URL

        try {
            const person = await Person.findByIdAndDelete(personId);
            if (!person) {
                return res.status(404).json({ error: 'Pessoa não encontrada' });
            }
            res.json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    todosOsCadastros: async (req,res)=>{
        try{
            const people = await Person.find();

            res.status(200).json(people)
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    },

    encontrarUm: async (req, res) => {
        const id = req.params.id

        try {
            const person = await Person.findOne({ _id: id})
            res.status(200).json(person)
         } 
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

  