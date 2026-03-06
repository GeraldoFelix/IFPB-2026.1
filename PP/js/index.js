import { Enemy } from './Enemy.js';

let screamAudio = new Audio("audio/moggado.mp3");
let deathAudio = new Audio("audio/sadAudio.mp3");
let painKick = new Audio("audio/kickaudio.mp3");

function resetEnemyFace(){
    imageEnemyFace.src = "img/Padrão.gif";
}

function resuscitate(inimigo) {
    deathAudio.pause();
    deathAudio.currentTime = 0;

    inimigo.setLife = 200;
    divLifeBar.style.width = inimigo.getLife + "px";
    imageEnemyFace.src = "img/Padrão.gif";
    inimigo.setisDead = false;
}

function attackEnemy(inimigo) {

    inimigo.setLife = inimigo.getLife - 20
    divLifeBar.style.width = inimigo.getLife + "px";

    if(inimigo.getLife <= 0) {

        imageEnemyFace.src = "img/dead.png";

        if(!inimigo.getisDead) {
            deathAudio.play();
            inimigo.setisDead = true;

            setTimeout(() => {
                resuscitate(inimigo);
            }, 5000);
        }

    }
    else {

        imageEnemyFace.src = "img/aura.gif"; 
        setTimeout(() => screamAudio.play(), 400);

        setTimeout(resetEnemyFace, 2500);

    }

}

function KickAttackEnemy (inimigo) {

    inimigo.setLife = inimigo.getLife - 40
    divLifeBar.style.width = inimigo.getLife + "px";

    if(inimigo.getLife <= 0) {

        imageEnemyFace.src = "img/dead.png";

        if(!inimigo.getisDead) {
            deathAudio.play();
            inimigo.setisDead = true;

            setTimeout(() => {
                resuscitate(inimigo);
            }, 5000);
        }

    }
    else {

        imageEnemyFace.src = "img/kick.gif"; 
        setTimeout(() => painKick.play(), 400);

        setTimeout(resetEnemyFace, 2500);

    }
}


let inimigo = new Enemy(200);
buttonAttackEnemy.onclick = () => attackEnemy(inimigo);
buttonKickAttack.onclick = () => KickAttackEnemy(inimigo);

//buttonAttackEnemy.onclick = attackEnemy(inimigo);