class student {
    #cpf
    #mother_name
    #father_name
    #address

    constructor(name, matricula, email, birth_year) {
        this.name = name 
        this.matricula = matricula
        this.email = email
        this.birth_year = birth_year
    }


    get getCpf() {
        return this.#cpf
    }

    get getmothername () {
        return this.#mother_name
    }

    get getfathername () {
        return this.#father_name
    }

    get getage (){
        let idade = this.calcularIdade(this.birth_year)
        return idade
    }

    calcularIdade (birth_year) {
        const currentYear = new Date().getFullYear();
        let idade = currentYear - birth_year;
        return idade;
    }

}

let aluno = new student("Tumba", 220220202, "tumba@gmail.com", 2007)
console.log(aluno.getage)