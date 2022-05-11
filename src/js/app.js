window.addEventListener('load', function(){

var sliderTercero = new Glider(document.querySelector('.carousel-lista-tercero'),{
    slidesToShow: 1,
        dots: '.carousel-indicadores-tercero',
        draggable: false,
        arrows: {
          prev: '.carousel-anterior-tercero',
          next: '.carousel-siguiente-tercero'
        }

});

var sliderSecundario = new Glider(document.querySelector('.carousel-lista-secundario'),{
    slidesToShow: 1,
        dots: '.carousel-indicadores-secundario',
        draggable: false,
        arrows: {
          prev: '.carousel-anterior-secundario',
          next: '.carousel-siguiente-secundario'
        }

});

var sliderPrincipal = new Glider(document.querySelector('.carousel-lista-principal'), {
        slidesToShow: 1,
        dots: '.carousel-indicadores-principal',
        draggable: false,
        arrows: {
          prev: '.carousel-anterior-principal',
          next: '.carousel-siguiente-principal'
        }
      });

/* AUTO REPRODUCCIÓN DE SLIDER INICIO */
slideAutoPaly(sliderTercero, '.carousel-lista-tercero');
slideAutoPaly(sliderSecundario, '.carousel-lista-secundario');
slideAutoPaly(sliderPrincipal, '.carousel-lista-principal');

function slideAutoPaly(glider, selector, delay = 5000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;

    function slide() {
        autoplay = setInterval(() => {
            if (nextIndex >= slidesCount) {
                if (!repeat) {
                    clearInterval(autoplay);
                } else {
                    nextIndex = 0;
                }
            }
            glider.scrollItem(nextIndex++);
        }, delay);
    }

    slide();

    var element = document.querySelector(selector);
    element.addEventListener('mouseover', (event) => {
        if (pause) {
            clearInterval(autoplay);
            pause = false;
        }
    }, 300);

    element.addEventListener('mouseout', (event) => {
        if (!pause) {
            slide();
            pause = true;
        }
    }, 300);
}
/* AUTO REPRODUCCIÓN DE SLIDER FIN */



});