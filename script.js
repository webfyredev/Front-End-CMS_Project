const slides = document.querySelectorAll('.slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.dots');
let index = 0;


showSlides(index);
function showSlides(n){
    slides.forEach((slide, i) =>{
        if( i === n){
            slide.classList.add('active');
        }else{
            slide.classList.remove('active');
        };
    });
    dots.forEach((dot, i) =>{
        if(i === n){
            dot.classList.add('active');
        }else{
            dot.classList.remove('active');
        }
    })
};


prevButton.addEventListener('click', ()=>{
    index = (index - 1 + slides.length) % slides.length;
    showSlides(index);
});
nextButton.addEventListener('click', ()=>{
    index = (index + 1) % slides.length;
    showSlides(index);
});

setInterval(() =>{
    index = (index + 1) % slides.length;
    showSlides(index);
}, 7000);

dots.forEach((dot, i) =>{
    dot.addEventListener('click', ()=>{
        index = i;
        showSlides(index);
    })
})



const moveUp = document.querySelectorAll('.move-up');
function showUpdata(){
    const targetbtn = window.innerHeight * 0.90;
    moveUp.forEach(e =>{
        const boxTop = e.getBoundingClientRect().top;
        if(boxTop < targetbtn){
            e.classList.add('active');
        }else{
            e.classList.remove('active');
        };
    });
};
window.addEventListener('scroll', showUpdata);
window.addEventListener('load', showUpdata);


const videoData = document.querySelectorAll('.aside-vids');

function videoZooming(){
    const targetButs = window.innerHeight * 0.75;
    videoData.forEach(btn =>{
        const boxTop = btn.getBoundingClientRect().top;
        if(boxTop < targetButs){
            btn.classList.add('active');
        }else{
            btn.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', videoZooming);
window.addEventListener('load', videoZooming);

// const links = document.querySelectorAll('nav .nav-links ul li a');
// links.forEach(link =>{
//     link.addEventListener('click', function(e){
//         e.preventDefault();
//         const targets = document.querySelector(this.getAttribute('href'));
//         targets.scrollIntoView({behavior : 'smooth'});
//     });
// });
