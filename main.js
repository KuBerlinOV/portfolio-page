const menuBtn = document.querySelector('.menu-btn')
const btnLines = document.querySelectorAll('.btn-line')

//menu button color change

const changeColor = () => {
    for (let line of btnLines) {
        if (line.style.backgroundColor !== 'rgb(153, 153, 49)') {
            line.style.backgroundColor = 'rgb(153, 153, 49)';
        } else {
            line.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }
};

menuBtn.addEventListener('mouseover', () => {
    changeColor()
});
menuBtn.addEventListener('mouseout', () => {
    changeColor()
});