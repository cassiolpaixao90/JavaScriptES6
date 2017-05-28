class Negociacao {

    //constructor
    constructor(data, valor, quantidade) {
        this._data = new Date(data.getTime());
        this._valor = valor;
        this._quantidade = quantidade;
    }

    //metodos
    get obterVolume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }
    get valor() {
        return this._valor;
    }

    get quantidade() {
        return this._quantidade;
    }
}