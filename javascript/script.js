//SMOOTH SCROOLING
$(document).ready(function () {
    "use strict";
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

//LANDING ITENS
$(window).scroll(function () {
    "use strict";
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.card').offset().top - ($(window).height() / 1.5)) {
        $('.card').each(function (i) {
            setTimeout(function () {
                $('.card').eq(i).css({
                    "opacity" : "1",
                    "-webkit-transform": "translate(0px,0px)",
                    "-ms-transform": "translate(0px,0px)",
                    "transform": "translate(0px,0px)"
                });
            }, 300 * (i + 1));
        });
    }
});

//LANDING QUOTE
$(window).scroll(function () {
    "use strict";
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.quote').offset().top - ($(window).height() / 1.5)) {
        $('.quote').each(function (i) {
            setTimeout(function () { $('.quote').css({
                "opacity" : "1",
                "-webkit-transform": "translate(0px,0px)",
                "-ms-transform": "translate(0px,0px)",
                "transform": "translate(0px,0px)"
            }); }, 300 * (i + 1));
        });
    }
});

$(window).scroll(function () {
    "use strict";
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.ch-item').offset().top - ($(window).height() / 1.5)) {
        $('.ch-item').each(function (i) {
            setTimeout(function () {
                $('.ch-item').eq(i).css({
                    "opacity" : "1",
                    "-webkit-transform": "translate(0px,0px)",
                    "-ms-transform": "translate(0px,0px)",
                    "transform": "translate(0px,0px)"
                });
            }, 300 * (i + 1));
        });
    }
});


//MENU DISPLAY
function openNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "65px";
}

function closeNav() {
    "use strict";
    document.getElementById("mySidenav").style.width = "0";
}



//GAMES LEARN MORE
function openWindow() {
    "use strict";
    document.getElementById("card-more").style.visibility = "visible";
    document.getElementById("card-more").style.opacity = "1";
}

function closeWindow() {
    "use strict";
    document.getElementById("card-more").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("card-more").style.visibility = "hidden";
    }, 300);
}

var games = [{
        "name": "Efêmero",
        "brief": "Efêmero conta a história de um jovem que perdeu a felicidade e não encontra um propósito para seguir em frente. Sua vida se tornou monótona e nada que ele faça o faz se sentir bem e com isso ele descobre que tudo é temporário, e que apenas por um dia ele poderia mudar seu destino.",
        "tags": ["Drama","pixel art","psicológico","pc"],
        "images": ["images/jogos/efemero.jpg", "images/jogos/efemero-start.jpg", "images/jogos/efemero-deck.jpg"]
        },
        {
        "name": "Herói Do Vazio",
        "brief": "Herói do Vazio.",
        "tags": ["pixel art", "pc"],
        "images": ["images/jogos/heroi_do_vazio.png", "images/jogos/heroi_do_vazio.png", "images/jogos/heroi_do_vazio.png"]
        }
];


function tagsGenerate(numIDGame) {
    "use strict";
    var output = "";
    for (var i = 0; i < games[numIDGame].tags.length; i++){
        output += '<h6>'+ games[numIDGame].tags[i] +' </h6>';
    }
    return output;
}

function imageGenerate(numIDGame){
    "use strict";
    document.getElementById("slideshow-image-1").src= games[numIDGame].images[0];
    
    document.getElementById("slideshow-image-2").src= games[numIDGame].images[1];
    
    document.getElementById("slideshow-image-3").src= games[numIDGame].images[2];
}

function windowInfo(gameID) {
    "use strict";
    imageGenerate(gameID);
    document.getElementById("game-title").innerHTML = games[gameID].name;
    document.getElementById("game-brief").innerHTML = games[gameID].brief;
    document.getElementById("game-tags").innerHTML = tagsGenerate(gameID);
    openWindow();
}


//SETTING THE INFO
function efemeroWindow(gameID) {
    "use strict";
    windowInfo(0);
}

function heroiWindow() {
    "use strict";
    windowInfo(1);
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    "use strict";
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    "use strict";
    showSlides(slideIndex = n);
}

function showSlides(n) {
    "use strict";
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1; }
    if (n < 1) {slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
  