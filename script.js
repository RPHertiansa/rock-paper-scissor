//randomize img chosen by comp
function compImg() {
    const comp = Math.random() //to create random

    if (comp < 0.34) { //probability
        return'rock';
    } else if (comp > 0.34 && comp < 0.67) {
        return 'paper';
    } else {
        return'scissor';
    }
}
//rules of the game
function result(compImg, user) {
    if (user == compImg) {
        return "Draw";
    } else if (user == 'rock') {
        return (compImg == 'scissor') ? "Win": "Lose"
    } else if (user == 'paper') {
        return (compImg == 'rock') ? "Win": "Lose"
    } else if (user == 'scissor') {
        return (compImg == 'paper') ? "Win" : "Lose"
    }

}

const userImages = document.querySelectorAll('li img');
userImages.forEach(function(userIMG) {
    userIMG.addEventListener('click', function() {
        const getCompIMG = compImg(); //get randomize image by compImg
        const getUserIMG = userIMG.className; //get user image by class name
    
        const imgComp = document.querySelector('.comp-img');
        imgComp.setAttribute('src',`img/${getCompIMG}.png`);
        const getResult = result(getCompIMG,getUserIMG)
        console.log(`comp: ${getCompIMG}
        user:${getUserIMG}
        result ${getResult}`)
        const resultBox = document.querySelector('.result')
        resultBox.innerHTML = getResult

    });
});

// const userRock = document.querySelector('.rock');
// userRock.addEventListener('click', function(){
//     const getCompIMG = compImg(); //get randomize image by compImg
//     const getUserIMG = userRock.className; //get user image by class name

//     const imgComp = document.querySelector('.comp-img');
//     imgComp.setAttribute('src',`img/${getCompIMG}.png`);
//     const getResult = result(getCompIMG,getUserIMG)
//     console.log(`comp: ${getCompIMG}
//     user:${getUserIMG}
//     result ${getResult}`)
//     const resultBox = document.querySelector('.result')
//     resultBox.innerHTML = getResult
// })

// const userPaper = document.querySelector('.paper');
// userPaper.addEventListener('click', function(){
//     const getCompIMG = compImg(); //get randomize image by compImg
//     const getUserIMG = userPaper.className; //get user image by class name

//     const imgComp = document.querySelector('.comp-img');
//     imgComp.setAttribute('src',`img/${getCompIMG}.png`);
//     const getResult = result(getCompIMG,getUserIMG)
//     console.log(`comp: ${getCompIMG}
//     user:${getUserIMG}
//     result ${getResult}`)
//     const resultBox = document.querySelector('.result')
//     resultBox.innerHTML = getResult
// })

// const userScissor = document.querySelector('.scissor');
// userScissor.addEventListener('click', function(){
//     const getCompIMG = compImg(); //get randomize image by compImg
//     const getUserIMG = userScissor.className; //get user image by class name

//     const imgComp = document.querySelector('.comp-img');
//     imgComp.setAttribute('src',`img/${getCompIMG}.png`);
//     const getResult = result(getCompIMG,getUserIMG)
//     console.log(`comp: ${getCompIMG}
//     user:${getUserIMG}
//     result ${getResult}`)
//     const resultBox = document.querySelector('.result')
//     resultBox.innerHTML = getResult
// })

