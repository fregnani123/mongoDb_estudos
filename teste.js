

class validaCPF{
    constructor(cpfEnviado) {

        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g,''),
            writable: 'false',
            enumerable:'false',
      })
    }
    isValid() {
        if (!this.cpfLimpo) return false;
        if (this.cpfLimpo !== 'string') return false;
   }
   
}

const verificaCPF = new validaCPF('063.912.989-71')

console.log(verificaCPF.cpfLimpo
)