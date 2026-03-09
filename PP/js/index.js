import { Enemy } from './Enemy.js';

let AuraAttackAudio = new Audio("audio/moggado.mp3");
let deathAudio = new Audio("audio/sadAudio.mp3");
let painKickAudio = new Audio("audio/kickaudio.mp3");
let PunchAudio = new Audio("audio/PunchAudio.mp3");
let ComboAudio = new Audio("Audio/ComboAudio.mp3")

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


function attackBase (inimigo, attack, facesrc, audio) {

    inimigo.setLife = inimigo.getLife - attack
    divLifeBar.style.width = inimigo.getLife + "px";

    if(inimigo.getLife <= 0) {

        imageEnemyFace.src = "img/death.gif";

        if(!inimigo.getisDead) {
            deathAudio.play();
            inimigo.setisDead = true;

            setTimeout(() => {
                resuscitate(inimigo);
            }, 5000);
        }

    }
    else {
        
        imageEnemyFace.src = facesrc; 
        setTimeout(() => audio.play(), 400);

        setTimeout(resetEnemyFace, 3000);

    }

}

function AuraattackEnemy(inimigo) {

    let attack = 10;

    attackBase(inimigo, attack, "img/aura.gif", AuraAttackAudio)

}

function KickAttackEnemy (inimigo) {

    let Kickattack = 40;

    attackBase(inimigo, Kickattack, "img/kick.gif", painKickAudio)
}

function PunchAttackEnemy (inimigo) {

    let PunchAttack = 30;

    attackBase(inimigo, PunchAttack, "img/Punch.gif", PunchAudio)
}

function ComboAttackEnemy (inimigo) {

    let ComboAttack = 50;

    attackBase(inimigo, ComboAttack, "img/Combo.gif", ComboAudio)
}

let inimigo = new Enemy(200);
buttonAttackEnemy.onclick = () => AuraattackEnemy(inimigo);
buttonKickAttack.onclick = () => KickAttackEnemy(inimigo);
buttonPunchAttack.onclick = () => PunchAttackEnemy(inimigo);
buttonComboAttack.onclick = () => ComboAttackEnemy(inimigo);

//buttonAttackEnemy.onclick = attackEnemy(inimigo);