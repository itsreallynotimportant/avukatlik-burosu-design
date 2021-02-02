$(document).ready(function(){

    $('.fas.fa-chevron-left').on('click', () => $('.carousel.carousel-slider').carousel('prev'));
    $('.fas.fa-chevron-right').on('click', () => $('.carousel.carousel-slider').carousel('next'));
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        dist: 0,
    });

    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    
});

$(window).scroll(() => {
    showItems();
});


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
        window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const vaka = document.getElementById("vakasayisi");
const basari = document.getElementById("basariorani");
const musteri = document.getElementById("musterisayisi");
const deneyim = document.getElementById("deneyimyili");


statFlag = true;
const showItems = () => {

    let statsGraph = document.querySelector('.stats');
    let statsPosition = statsGraph.getBoundingClientRect().top;

    let about = document.querySelector('#about-animate');
    let aboutPosition = about.getBoundingClientRect().top;

    let practice = document.querySelector('#calisma-alanlarimiz');
    let practicePosition = practice.getBoundingClientRect().top;

    let blog = document.querySelector('#blog');
    let blogPosition = blog.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 1.5;

    if(statsPosition < screenPosition) {
        if(statFlag) {
            statsGraph.classList.add('show-stats');
            

            animateValue(vaka, 0, 2400, 2300);
            animateValue(basari, 0, 98, 2300);
            animateValue(musteri, 0, 752, 2300);
            animateValue(deneyim, 0, 15, 2300);
            
            statFlag = false;
        }
    }

    aboutFlag = true;
    if(aboutPosition < screenPosition) {
        if(aboutFlag) {
            $(about).addClass('show-text');
            $(about).next().addClass('show-text');
            
            aboutFlag = false;
        }
    }

    practiceFlag = true;
    if(practicePosition < screenPosition ) {
        if(practiceFlag) {
            
            $.each($(practice).find('.card-panel').slice(1), (i, el) => {
                setTimeout(function() {
                    $(el).addClass('show-text');
                }, i * 250)
            });

            $.each($('#calisma-alanlarimiz').find('li'), (i, el) => {
                setTimeout(function() {
                    $(el).addClass('show-text');
                }, i * 150)
            });
            
            practiceFlag = false;
        }
    }

    blogFlag = true;
    if(blogPosition < screenPosition / 2 ) {
        
        if(blogFlag) {
            
            $.each($(blog).find('.card'), (i, el) => {
                setTimeout(function() {
                    $(el).addClass('show-text');
                }, i * 120)
            });
            
            blogFlag = false;
        }

    }
    
}