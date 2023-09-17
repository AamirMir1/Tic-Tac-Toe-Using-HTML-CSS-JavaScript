// Game Variables

let image = "./images/cat.jpg"
let boxes = Array.from(document.getElementsByClassName('boxes'))

// Game Functions

const changeImage = () => {
    return image === "./images/cat.jpg" ? "./images/jerry.jpg" : "./images/cat.jpg"
}

const isWin = () => {
    let images = Array.from(document.getElementsByClassName('images'))
    let whoIsWin = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135]
    ]
    whoIsWin.forEach((e) => {
        let img = document.getElementsByClassName('images')
        let jerryOrCat = document.getElementById('jerryOrCat');
        if (images[e[0]].src === images[e[1]].src && images[e[1]].src === images[e[2]].src && images[e[0]].src !== "") {
            setTimeout(() => {
                jerryOrCat.innerHTML = images[e[0]].src === "http://127.0.0.1:5500/images/cat.jpg" ? "Cat Wins" : "Jerry Wins";
            }, 0);
            jerryOrCat.style.fontSize = "50px"
            document.querySelector('.isTurn').innerHTML = images[e[0]].src === "http://127.0.0.1:5500/images/cat.jpg" ? "Cat Wins" : "Jerry Wins";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "30vw"
        }
        else if (img[0].hasAttribute('src') && img[1].hasAttribute('src') && img[2].hasAttribute('src') && img[3].hasAttribute('src') && img[4].hasAttribute('src') && img[5].hasAttribute('src') && img[6].hasAttribute('src') && img[7].hasAttribute('src') && img[8].hasAttribute('src')) {
            jerryOrCat.style.fontSize = "40px"
            jerryOrCat.innerHTML = "Draw Match"
        }
    })
}

// Hiding Images

let hideImages = document.getElementsByClassName('images')
for (let i = 0; i <= 8; i++) {
    hideImages[i].classList.add('hideImage')
}

// Appending Images In Grid

boxes.forEach((element) => {
    element.addEventListener('click', () => {
        let images = element.querySelector('.images')
        if (!images.hasAttribute('src')) {
            images.setAttribute('src', image);
        }
        images.classList.remove('hideImage')
        image = changeImage();
        document.querySelector('.isTurn').innerHTML = image === "./images/cat.jpg" ? "Turn For Cat" : "Turn For Jerry"
        isWin();
    })
});

// Adding Event On Reset Button

let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('images')).forEach((element) => {
        element.removeAttribute('src')
        element.classList.add('hideImage')
    })
    document.getElementById('jerryOrCat').style.fontSize = '0'
    document.querySelector('.isTurn').innerHTML = "Turn For Cat"
    document.querySelector('.line').style.width = "0vw"
    image = "./images/cat.jpg"
})
