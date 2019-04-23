$('*:lang(en)').hide();

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

//LANDING GAMES
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
            }, 150 * (i + 1));
        });
    }
});

//LANDING QUOTE
$(window).scroll(function () {
    "use strict";
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.quote').offset().top - ($(window).height() / 1)) {
        $('.quote').each(function (i) {
            setTimeout(function () { $('.quote').css({
                "opacity" : "1",
                "-webkit-transform": "translate(0px,0px)",
                "-ms-transform": "translate(0px,0px)",
                "transform": "translate(0px,0px)"
            }); }, 200 * (i + 1));
        });
    }
});

//LANDING TEAM 
$(window).scroll(function () {
    "use strict";
    var wScroll = $(this).scrollTop();
    if (wScroll > $('.ch-item').offset().top - ($(window).height() )) {
        $('.ch-item').each(function (i) {
            setTimeout(function () {
                $('.ch-item').eq(i).css({
                    "opacity" : "1",
                    "-webkit-transform": "translate(0px,0px)",
                    "-ms-transform": "translate(0px,0px)",
                    "transform": "translate(0px,0px)"
                });
            }, 100 * (i + 1));
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

//LANGUAGE POPUP
$('#language-popup').animate({right: "100px"},500, function(){});
function closePopup() {
    "use strict";
    $('#language-popup').css({
        "right": "-200px",
        "transition": "all .5s ease-in-out"
    });
}

var languagePT = true;
$('#change-language').click(function(){
    $('*:lang(pt_BR)').toggle();
    $('*:lang(en)').toggle();
    if(languagePT)
        languagePT = false;
    else    
        languagePT = true;
});

//GAMES LEARN MORE
function openWindow() {
    "use strict";
    document.getElementById("card-more").style.visibility = "visible";
    document.getElementById("card-more").style.opacity = "1";
    if(languagePT){
        $('*:lang(pt_BR)').show();
        $('*:lang(en)').hide();
    }else{
        $('*:lang(en)').show();
        $('*:lang(pt_BR)').hide();
    }
}

function closeWindow() {
    "use strict";
    document.getElementById("card-more").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("card-more").style.visibility = "hidden";
        $('#extra-tab').hide();
        $('#learn-more').show();
    }, 250);
}

//DISPLAY TIME AVAIBLE
    $().ready(function(){
        $('.limited-edition').hover(function(){$("#describe-limited").fadeTo(150, 1);$("#describe-limited").show();},
                                    function(){$("#describe-limited").hide();$("#describe-limited").fadeTo(150, 0);});       
    });

    //AGE RESTRICTION
    $().ready(function(){
            $('span.blue-label').hover(function(){$(this).text("10 anos");},
                                    function(){$(this).text("10");});
            $('span.yellow-label').hover(function(){$(this).text("12 anos");},
                                    function(){$(this).text("12");});
            $('span.orange-label').hover(function(){$(this).text("14 anos");},
                                    function(){$(this).text("14");});
            $('span.red-label').hover(function(){$(this).text("16 anos");},
                                function(){$(this).text("16");});
            $('span.black-label').hover(function(){$(this).text("18 anos");},
                                    function(){$(this).text("18");});
    });

//GAME LIST REQUEST
var games_pt_BR = [{
        "name": "Efêmero",
        "brief": "Efêmero conta a história de um jovem que perdeu a felicidade e não encontra um propósito para seguir em frente. Sua vida se tornou monótona e nada que ele faça o faz se sentir bem e com isso ele descobre que tudo é temporário, e que apenas por um dia ele poderia mudar seu destino.",
        "images": [
            "images/jogos/efemero.jpg",
            "images/jogos/efemero-start.jpg",
            "images/jogos/efemero-deck.jpg"],
        "tags": ["windows","Drama","pixel art","psicológico"],
        "age": "16",
        "play": "enable",
        "url": "https://gamejolt.com/games/efemero/281230"
        },
        {
        "name": "Acordo Com O Demônio",
        "brief": "",
        "images": [],
        "tags": ["windows","Drama","pixel art","psicológico"],
        "age": "16",
        "play": "disable"
        },
        {
        "name": "Catching The World: Enchantress",
        "brief": "",
        "images": [
            "images/jogos/Idle_mage.jpg",],
        "tags": ["Andorid phone","Ação em 3D"],
        "age": "10",
        "play": "disable",
        },
        {},
        {
        "name": "Herói Do Vazio",
        "brief": "Demétrio é um agente renomado da Gênesis, uma instituição governamental de proteção à Via Láctea. Ele é enviado em uma importante missão para impedir que uma fissura de uma dimensão paralela corrompa e destrua o Sistema Solar de uma vez por todas.",
        "images": [
            "images/jogos/heroi_do_vazio.jpg"],
        "tags": ["windows","pixel art","ação","retro"],
        "age": "16",
        "play": "disable",
        }   
];

var games_en = [{
    "name": "Efêmero",
    "brief": "Ephemeral tells the story about a guy who lost happiness and can't find a purpose to move on. His life became monotonous and nothing that he does makes him feel better. With that, he discovers that everything is temporary and that just for one day he could change his destiny.",
    "images": [
        "images/jogos/efemero.jpg",
        "images/jogos/efemero-start.jpg",
        "images/jogos/efemero-deck.jpg"],
    "tags": ["windows","drama","pixel art","psychological"],
    "age": "16",
    "play": "enable",
    "url": "https://gamejolt.com/games/efemero/281230"
    },
    {
    "name": "Acordo Com O Demônio",
    "brief": "",
    "images": [],
    "tags": ["windows","Drama","pixel art","psicológico"],
    "age": "16",
    "play": "enable",
    "url": "https://gamejolt.com/games/efemero/281230"
    },
    {
    "name": "Catching The World: Enchantress",
    "brief": "",
    "images": [
        "images/jogos/Idle_mage.jpg"],
    "tags": ["windows","Drama","pixel art","psicológico"],
    "age": "16",
    "play": "enable",
    "url": "https://gamejolt.com/games/efemero/281230"
    },
    {},
    {
    "name": "Herói Do Vazio",
    "brief": "Demétrio is a renowned Genesis agent, a governmental protection institution of the Milky Way. He is sent on an important mission to prevent a parallel dimension's fissure from corrupting and destroying the Solar System for good.",
    "images": [
        "images/jogos/heroi_do_vazio.jpg"],
    "tags": ["windows","pixel art","action","retro"],
    "age": "16",
    "play": "disable",
    }     
];

//SET THE TAGS
function tagsGenerate(numIDGame) {
    "use strict";
    var output = "";
    for (var i = 0; i < games_pt_BR[numIDGame].tags.length; i++){
        output += '<h6 lang="pt_BR">'+ games_pt_BR[numIDGame].tags[i]+'</h6>';
        output += '<h6 lang="en">'+ games_en[numIDGame].tags[i]+'</h6>';
    }
    return output;
}

//SET THE IMAGES
function imageGenerate(numIDGame){
    swiper.removeAllSlides();
    for(var i = 0; i < games_pt_BR[numIDGame].images.length; i++){
        swiper.appendSlide('<div class="swiper-slide"><img src="' + games_pt_BR[numIDGame].images[i] +'"></div>');
    }
}

//SET SWIPER
var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    roundLengths: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});

//SET THE STATUS OF THE BUTTONS
function buttonGenerate(numIDGame) {
    "use strict";
    var play_en = $("#play_en");
    var play_pt_BR = $("#play_pt");
    
    if(games_pt_BR[numIDGame].play == "disable"){
        play_pt_BR.addClass("disable-play-btn");
        play_pt_BR.removeAttr("href");
        document.getElementById("play_pt").innerHTML = "Em Breve";
    }else{
        play_pt_BR.removeClass("disable-play-btn");
        document.getElementById("play_pt").innerHTML = "Jogar agora";
        document.getElementById("play_pt").href = games_pt_BR[numIDGame].url;
    }
    if(games_en[numIDGame].play == "disable"){
        play_en.addClass("disable-play-btn");
        play_en.removeAttr("href");
        document.getElementById("play_en").innerHTML = "Coming Soon";
    }else{
        play_en.removeClass("disable-play-btn");
        document.getElementById("play_en").innerHTML = "Play now";
        document.getElementById("play_en").href = games_en[numIDGame].url;
        
    }
}

//SET AGE AND HOVER EFFECT TO AGE BUTTON
function ageGeneration(numIDGame){
    "use strict";
    var age_pt_BR = games_pt_BR[numIDGame].age;
    var age_en = games_en[numIDGame].age;

    //SET THE TEXT TO THE BUTTON
    if(age_pt_BR != "livre"){
        document.getElementById("age-restriction_pt").innerHTML = "Não recomendado para menores de " + age_pt_BR + " anos";
    }else
        document.getElementById("age-restriction_pt").innerHTML =  "Livre para todos os publicos";

    
    if(age_en != "livre"){
        document.getElementById("age-restriction_en").innerHTML = "Not recommended for people under " + age_en + " years old";
    }else
        document.getElementById("age-restriction_en").innerHTML =  "Everyone can play";
}

$().ready(function(){
    $("#age-restriction").hover(function(){$("#describe-window").fadeTo(150, 1);$("#describe-window").show();},
                                 function(){$("#describe-window").hide();$("#describe-window").fadeTo(150, 0);});       
});


//SET FADE ON BUTTON LEARN MORE 
$('#learn-more').click(function() {
    if($('#extra-tab').css('display') == 'none'){
        $('#extra-tab').slideDown("slow");
    }else{
        $('#extra-tab').slideUp("slow");
    }
}).fadeIn();


//SETTING THE INFORMATION ON THE WINDOW
function windowInfo(gameID) {
    "use strict";
    imageGenerate(gameID);
    buttonGenerate(gameID);
    ageGeneration(gameID);
    document.getElementById("game-title").innerHTML = games_pt_BR[gameID].name;
    document.getElementById("game-brief_pt").innerHTML = games_pt_BR[gameID].brief;
    document.getElementById("game-brief_en").innerHTML = games_en[gameID].brief;
    document.getElementById("game-tags").innerHTML = tagsGenerate(gameID);
    openWindow();
}

//CREATE THE WINDOW
$(document).on("click", ".game-id li a", function () {
    windowInfo($(this).parent().attr("value"));
});