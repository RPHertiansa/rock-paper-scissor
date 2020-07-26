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

function getRandom() { //animation to randomize image from computer
    const imgComp = document.querySelector('.comp-img');
    const img = ['rock', 'paper', 'scissor'];
    let i = 0;
    const start = new Date().getTime();
    setInterval (function() {
        if (new Date().getTime() - start > 1000 ) { //max time for randomize, 1000ms
            clearInterval;
            return;
        }
        imgComp.setAttribute('src',`img/${img[i++]}.png`);
        if( i == img.length) i = 0; //looping between all images
    }, 100) //duration of each images, 100ms
}

const userImages = document.querySelectorAll('.user img');
userImages.forEach(function(userIMG) {
    userIMG.addEventListener('click', function() {
        const getCompIMG = compImg(); //get randomize image by compImg
        const getUserIMG = userIMG.className; //get user image by class name
        const getResult = result(getCompIMG,getUserIMG)
        
        getRandom();

        setTimeout(function() { //this function is called after randomize
            const imgComp = document.querySelector('.comp-img');
            imgComp.setAttribute('src',`img/${getCompIMG}.png`);
            

            const resultBox = document.querySelector('.result')
            resultBox.innerHTML = getResult;

        }, 1000); //waiting time 1000ms after getRandom start
        
        // console.log(`comp: ${getCompIMG}
        // user:${getUserIMG}
        // result ${getResult}`)
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

