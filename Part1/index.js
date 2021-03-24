let gameProgress = [];


function play(i){
    let clickedBox = document.getElementById(i)
    let playerSpan = document.getElementById('player')
    console.log(playerSpan)
    if (playerSpan.innerText === 'X'){
        clickedBox.innerText = 'X';
        playerSpan.innerText = 'O';
    } else {
        clickedBox.innerText = 'O';
        playerSpan.innerText = 'X';
    }
    gameProgress[i] = clickedBox.innerText

    let box0 = gameProgress[0];
    let box1 = gameProgress[1];
    let box2 = gameProgress[2];
    let box3 = gameProgress[3];
    let box4 = gameProgress[4];
    let box5 = gameProgress[5];
    let box6 = gameProgress[6];
    let box7 = gameProgress[7];
    let box8 = gameProgress[8];

    if(box0 && box0 == box1 && box1 == box2){
        alert(`${box0} is the WINNER!!`);
    }else if(box2 && box2 == box5 && box5 == box8){
        alert(`${box2} is the WINNER!!`);
    }else if(box6 && box6 == box7 && box7 == box8){
        alert(`${box6} is the WINNER!!`);
    }else if(box0 && box0 == box3 && box3 == box6){
        alert(`${box0} is the WINNER!!`);
    }else if(box3 && box3 == box4 && box4 == box5){
        alert(`${box3} is the WINNER!!`);
    }else if(box1 && box1 == box4 && box4 == box7){
        alert(`${box1} is the WINNER!!`);
    }else if(box0 && box0 == box4 && box4 == box8){
        alert(`${box0} is the WINNER!!`);
    }else if(box2 && box2 == box4 && box4 == box6){
        alert(`${box2} is the WINNER!!`);
    }

    let fullBoard = true;
    for (let i = 0; i <= 8; i++){
        if (gameProgress[i] === undefined){
            fullBoard = false;
        }
    }

    if (fullBoard === true){
        alert("CATS!")
    }
}
