const Person = require('../models/Person')

module.exports = {
    novoCadastro: async (req, res) => {
        const { name, salary, approved } = req.body;
      
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

};