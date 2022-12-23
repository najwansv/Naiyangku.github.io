function play() {
    var audio = new Audio("assets/sif.mp3");audio.play();audio.loop=true;audio.addEventListener('ended', function() {this.currentTime = 0;this.play();}, false);}

src = "https://code.jquery.com/jquery-3.2.1.min.js"


function Unmute(){
    $(function(){
        $("#btn3").on('click', function(){
            if( $("#videonya").prop('muted') ) {
                $("#videonya").prop('muted', false);
                $(this).text('Mute');
            // or toggle class, style it with a volume icon sprite, change background-position
          } else {
            $("#videonya").prop('muted', true);
            $(this).text('Unmute');
        }
        });
    });
}


$(function(){
    $(".menu a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },500);
    });
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

function bukaWa(){window.location = "https://api.whatsapp.com/send?phone=6281293378651" + "NAJWAN!!!! BAGUS BANGEEETTT";}

var slideIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    slideIndex++; 
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function toggleText(){
    var x = document.getElementById("homes");
    var y = document.getElementById("btn2");

    if (x.style.color === "wheat") {
        x.style.color = "transparent";
        $(y).text("Unhide Text");
    } else {
        x.style.color = "wheat";
        $(y).text("Hide Text");
    }
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
