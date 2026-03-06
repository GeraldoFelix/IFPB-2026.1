export class Enemy {
    #name

    constructor (life) {
        this.life = 200;
        this.isDead = false;
    }

    get getLife() {
        return this.life;
    }

    set setLife(life) {
        this.life = life;
    }

    get getisDead() {
        return this.isDead
    }

    set setisDead(booleano){
        this.isDead = booleano;
    }

    print() {
        console.log(this.life)
    }

}

let enemyOne = new Enemy()
enemyOne.print()
enemyOne.setLife = 40
enemyOne.print()