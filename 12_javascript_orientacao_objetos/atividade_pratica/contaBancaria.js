class Conta {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;   
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor >= this._saldo) {
            return 'Operação Negada.'
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends Conta {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this._tipo = 'corrente';
        this._cartaoCredito = cartaoCredito 
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}


class ContaPoupanca extends Conta {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Poupanca';
    }
}

class ContaUniversitario extends Conta {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitario';
    }

    sacar(valor) {
        if (valor >= 500) return 'Operação Negada.'
    
        this._saldo = this._saldo - valor;
        
        return this._saldo;
    }

}