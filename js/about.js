const tabButtons = document.querySelectorAll('.buts-container button');
const tabContents = document.querySelectorAll('.mission-container');
tabButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    })
});

const aboutEffects = document.querySelectorAll('.about-move-up');

function aboutMotion(){
    const targetbtn = window.innerHeight * 0.90;
    aboutEffects.forEach(btn =>{
        const boxTop = btn.getBoundingClientRect().top;
        if(boxTop < targetbtn){
            btn.classList.add('active');
        }else{
            btn.classList.remove('active');
        };
    });
};
window.addEventListener('scroll', aboutMotion);
window.addEventListener('load', aboutMotion);