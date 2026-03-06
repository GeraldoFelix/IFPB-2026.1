class animal {
    #cor
    #tamanho

    constructor(nome, qunatPatas, raca) {
        this.nome = nome
        this.qunatPatas = qunatPatas
        this.raca = raca
    }


    get getNome() {
        return this.nome
    }

    set setNome (nome){
        return this.nome = nome
    }

    get getQuant_patas() {
        return this.qunatPatas
    }

    set setQuant_patas(quant){
        return this.qunatPatas = quant
    }

    set #setraca (raca) {
        this.raca = raca
    }
}


let animal1 = new animal("xin", 4, "pinscher")
console.log(animal1.getNome)