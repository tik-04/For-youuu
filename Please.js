function changeImage() {
    let img = document.getElementById('img1');
    let text = document.getElementById('text');
    let button = document.getElementById('button')
    if (img.src.match('https://i.pinimg.com/originals/62/c4/2a/62c42a22c9d15a688fdca07e810a59fd.jpg')){
        img.src = 'https://media.tenor.com/3yinSke0rykAAAAM/love-you.gif'
    }
    text.innerText = "I know it yayyy"
    
    button.style.display = "none";
    
    
}

let no = document.getElementById('no')

no.addEventListener('click', moveHover)


function moveHover(){
    const i = Math.floor(Math.random()* 500)+ 1;
    const j = Math.floor(Math.random()* 50)+ 1;

    no.style.left=i + "px"
    no.style.top=j + "px"
}
