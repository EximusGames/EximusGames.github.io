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

//LANDING TEAM 
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
        $('#extra-tab').hide();
        $('#learn-more').show();
    }, 250);
}

//DISPLAY TIME AVAIBLE
    $().ready(function(){
        $('.limited-edition').hover(function(){$("#describe-limited").fadeTo(150, 1);$("#describe-limited").show();},
                                    function(){$("#describe-limited").hide();$("#describe-limited").fadeTo(150, 0)});       
    });

    //AGE RESTRICTION
    $().ready(function(){
        $('.blue-label').hover(function(){$(this).text("10 years old");},
                                function(){$(this).text("10")});
        $('.yellow-label').hover(function(){$(this).text("12 years old");},
                                 function(){$(this).text("12")});
        $('.orange-label').hover(function(){$(this).text("14 years old");},
                                 function(){$(this).text("14")});
        $('.red-label').hover(function(){$(this).text("16 years old");},
                              function(){$(this).text("16")});
        $('.black-label').hover(function(){$(this).text("18 years old");},
                                function(){$(this).text("18")});
    });

//GAME LIST REQUEST
var games = [{
        "name": "Efêmero",
        "brief": "Ephemeral tells the story about a guy who lost happiness and can't find a purpose to move on. His life became monotonous and nothing that he does makes him feel better. With that, he discovers that everything is temporary and that just for one day he could change his destiny.",
        "images": [
            "images/jogos/efemero.jpg",
            "images/jogos/efemero-start.jpg",
            "images/jogos/efemero-deck.jpg"],
        "tags": ["windows","drama","pixel art","psychological"],
        "age": "16",
        "devices": "fa fa-windows",
        "play": "enable",
        "url": "https://gamejolt.com/games/efemero/281230"
        },
        {
        "name": "Herói Do Vazio",
        "brief": "Demétrio is a renowned Genesis agent, a governmental protection institution of the Milky Way. He is sent on an important mission to prevent a parallel dimension's fissure from corrupting and destroying the Solar System for good.",
        "images": [
            "images/jogos/heroi_do_vazio.jpg"],
        "tags": ["windows","pixel art","action","retro"],
        "age": "16",
        "devices": "fa fa-windows",
        "play": "disable",
        },
        {"name": "Arcade Eximus",
        "brief": "O jogo apresenta uma coletânea de minigames retros aonde você tem que defender a cidade de uma orda de orcs furiosos, lutar pela sua vida enquanto corre de zumbis em uma cidade abandonada e ajudar os pobres matando os guardas e roubando o tesouro do rei.<br>",
        "images": [
            "images/jogos/arcade_eximus_2.jpg",
            "images/jogos/witcherwall.jpg",
            "images/jogos/z_runner.jpg",
            "images/jogos/lady_robin_hood.jpg"],
        "tags": ["windows","arcade","pixel art","game jam"],
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
    swiper.removeAllSlides();
    for(var i = 0; i < games[numIDGame].images.length; i++){
        swiper.appendSlide('<div class="swiper-slide"><img src="' + games[numIDGame].images[i] +'"></div>')    
    }
}

//SET SWIPER
var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
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
    var play = $('#play');
    
    if(games[numIDGame].play == "disable"){
        play.addClass("disable-play-btn");
        play.removeAttr("href");
        document.getElementById("play").innerHTML = "Coming Soon";
        
    }else if(games[numIDGame].play == "enable" && games[numIDGame].crowdfunding == "on"){
        play.addClass("enable-crowdfunding play-btn");
        play.removeClass("disable-play-btn");
        document.getElementById("play").innerHTML = "Play now";
        document.getElementById("play").href = games[numIDGame].url;     
    }else{
        play.removeClass("disable-play-btn");
        document.getElementById("play").innerHTML = "Play now";
        document.getElementById("play").href = games[numIDGame].url;
    }
}

//SET AGE AND HOVER EFFECT TO AGE BUTTON
function ageGeneration(numIDGame){
    "use strict";
    var age = games[numIDGame].age;

    //SET THE TEXT TO THE BUTTON
    if(age != "livre"){
        document.getElementById("age-restriction").innerHTML = "Not recommended for people under " + age + " years old";
    }else
        document.getElementById("age-restriction").innerHTML =  "Everyone can play";
}

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
    document.getElementById("game-title").innerHTML = games[gameID].name;
    document.getElementById("game-brief").innerHTML = games[gameID].brief;
    document.getElementById("game-tags").innerHTML = tagsGenerate(gameID);
    openWindow();
}

//CREATE THE WINDOW
$(document).on("click", ".game-id li a", function () {
    windowInfo($(this).parent().attr("value"));
});