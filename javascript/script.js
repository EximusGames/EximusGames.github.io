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
    }, 250);
}

//DISPLAY TIME AVAIBLE
    $().ready(function(){
        $('.limited-edition').hover(function(){$("#describe-limited").fadeTo(150, 1);$("#describe-limited").show();},
                                    function(){$("#describe-limited").hide();$("#describe-limited").fadeTo(150, 0)});       
    });

    //AGE RESTRICTION
    $().ready(function(){
        $('.blue-label').hover(function(){$(this).text("10 anos");},
                                function(){$(this).text("10")});
        $('.yellow-label').hover(function(){$(this).text("12 anos");},
                                 function(){$(this).text("12")});
        $('.orange-label').hover(function(){$(this).text("14 anos");},
                                 function(){$(this).text("14")});
        $('.red-label').hover(function(){$(this).text("16 anos");},
                              function(){$(this).text("16")});
        $('.black-label').hover(function(){$(this).text("18 anos");},
                                function(){$(this).text("18")});
    });

//GAME LIST REQUEST
var games = [{
        "name": "Efêmero",
        "brief": "Efêmero conta a história de um jovem que perdeu a felicidade e não encontra um propósito para seguir em frente. Sua vida se tornou monótona e nada que ele faça o faz se sentir bem e com isso ele descobre que tudo é temporário, e que apenas por um dia ele poderia mudar seu destino.",
        "images": [
            "images/jogos/efemero.jpg",
            "images/jogos/efemero-start.jpg",
            "images/jogos/efemero-deck.jpg"],
        "tags": ["Drama","pixel art","psicológico"],
        "age": "16",
        "devices": "fa fa-windows",
        "play": "enable",
        "url": "https://gamejolt.com/games/efemero/281230"
        },
        {
        "name": "Herói Do Vazio",
        "brief": "Demétrio é um agente renomado da Gênesis, uma instituição governamental de proteção à Via Láctea. Ele é enviado em uma importante missão para impedir que uma fissura de uma dimensão paralela corrompa e destrua o Sistema Solar de uma vez por todas.",
        "images": [
            "images/jogos/heroi_do_vazio.jpg"],
        "tags": ["pixel art","action","retro"],
        "age": "16",
        "devices": "fa fa-windows",
        "play": "disable",
        },
        {"name": "Arcade Eximus",
        "brief": "<span id='winner'>Jogo ganhador da 2ª DBR Game Jam.</span><br> O jogo apresenta uma coletânea de minigames retros aonde você tem que defender a cidade de uma orda de orcs furiosos, lutar pela sua vida enquanto corre de zumbis em uma cidade abandonada e ajudar os pobres matando os guardas e roubando o tesouro do rei.<br>",
        "images": [
            "images/jogos/arcade_eximus_2.jpg",
            "images/jogos/witcherwall.jpg",
            "images/jogos/z_runner.jpg",
            "images/jogos/lady_robin_hood.jpg"],
        "tags": ["arcade","pixel art","game jam"],
        "age": "14",
        "devices": "fa fa-windows",
        "play": "enable",
        "url": 'https://gamejolt.com/games/eximus-arcade/294292'
        }        
];

//SET THE TAGS
function tagsGenerate(numIDGame) {
    "use strict";
    var output = "";
    for (var i = 0; i < games[numIDGame].tags.length; i++){
        output += '<h6>'+ games[numIDGame].tags[i] +' </h6>';
    }
    return output;
}

//SET THE IMAGES
function imageGenerate(numIDGame){
    "use strict";    
    $('#image-show').empty();
    
    document.getElementById("image-show").innerHTML = '<div class="mySlides fade" style="display: block;" ><img id="slideshow-image-1" src="' + games[numIDGame].images[0] +'"></div>';
    for(var i = 2; i <= games[numIDGame].images.length; i++){
        document.getElementById("image-show").innerHTML += '<div class="mySlides fade"><img id="slideshow-image-' + i + '" src="'+ games[numIDGame].images[i-1] +'"></div>';    
    }
}

//SET THE NUMBER OF DOTS
function dotsGenerate(numIDGame){
    "use strict";    
    $('#dots-show').empty();
    
    document.getElementById("dots-show").innerHTML = '<span class="dot active" onclick="currentSlide(1)"></span>';
    
    for(var i = 2; i <= games[numIDGame].images.length; i++){
        document.getElementById("dots-show").innerHTML += '<span class="dot" onclick="currentSlide(' + i + ')"></span>';
    }
}

//SET THE STATUS OF THE BUTTONS
function buttonGenerate(numIDGame) {
    "use strict";
    var play = $('#play');
    var crowndfund = $('#crowndfund');
    
    if(games[numIDGame].play == "disable"){
        play.addClass("disable-play-btn");
        play.removeAttr("href");
        play.removeClass("enable-crowdfunding play-btn");
        crowndfund.addClass("disable-btn");
        document.getElementById("play").innerHTML = "Em Breve";
        
    }else if(games[numIDGame].play == "enable" && games[numIDGame].crowdfunding == "on"){
        play.addClass("enable-crowdfunding play-btn");
        play.removeClass("disable-play-btn");
        document.getElementById("play").innerHTML = "jogar agora";
        document.getElementById("play").href = games[numIDGame].url;
        crowndfund.removeClass("disable-btn");
        crowndfund.addClass("enable-crowdfunding crowdfund-btn");        
    }else{
        
        crowndfund.addClass("disable-btn");
        play.removeClass("disable-play-btn");
        document.getElementById("play").innerHTML = "Jogar agora";
        document.getElementById("play").href = games[numIDGame].url;
    }
}

//SET AGE AND HOVER EFFECT TO AGE BUTTON
function ageGeneration(numIDGame){
    "use strict";
    var age = games[numIDGame].age;

    //SET THE TEXT TO THE BUTTON
    if(age != "livre"){
        document.getElementById("age-restriction").innerHTML =  age + " anos";
    }else
        document.getElementById("age-restriction").innerHTML =  age;

    switch(age){
        default:
            document.getElementById("age-restriction").style.background = "rgba(1, 165, 79, 1)";
            $("#describe-window").text("livre para todos os públicos");
            break;
        case '10':
            document.getElementById("age-restriction").style.background = "rgba(0, 149, 217, 1)";
            $("#describe-window").text("Não recomendado para menores de 10 anos");
            break;
        case '12':
            document.getElementById("age-restriction").style.background = "rgba(255, 204, 3, 1)";
            $("#describe-window").text("Não recomendado para menores de 12 anos");
            break;
        case '14':
            document.getElementById("age-restriction").style.background = "rgba(246, 130, 31, 1)";
            $("#describe-window").text("Não recomendado para menores de 14 anos");
            break;
        case '16':
            document.getElementById("age-restriction").style.background = "rgba(235, 8, 28, 1)";
            $("#describe-window").text("Não recomendado para menores de 16 anos");
            break;
        case '18':
            document.getElementById("age-restriction").style.background = "rgb(9, 9, 9)";
            $("#describe-window").text("Não recomendado para menores de 18 anos");
            break;
        
    }
}

    $().ready(function(){
        $("#age-restriction").hover(function(){$("#describe-window").fadeTo(150, 1);$("#describe-window").show();},
                                    function(){$("#describe-window").hide();$("#describe-window").fadeTo(150, 0)});       
    });

//SET THE AVAIBLE DEVICES
function devicesGenerate(numIDGame){
    'use strict';
    document.getElementById("devices-enables").innerHTML = '<i class="' + games[numIDGame].devices + '"> </i>';
}

//SETTING THE INFORMATION ON THE WINDOW
function windowInfo(gameID) {
    "use strict";
    imageGenerate(gameID);
    dotsGenerate(gameID);
    buttonGenerate(gameID);
    devicesGenerate(gameID);
    ageGeneration(gameID);
    document.getElementById("game-title").innerHTML = games[gameID].name;
    document.getElementById("game-brief").innerHTML = games[gameID].brief;
    document.getElementById("game-tags").innerHTML = tagsGenerate(gameID);
    openWindow();
}

//CREATE THE WINDOW
$(document).on("click", ".game-id li a", function () {
    windowInfo($(this).parent().attr("value"));
});

//SLIDE CONFIG
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
  