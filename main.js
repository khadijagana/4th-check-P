function boldText(){
    var target = document.getElementById("Lyrics");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}

function underlineText(){
    var target = document.getElementById("Lyrics");
   if( target.style.textDecoration == "underline" ) {
       target.style.textDecoration = "none";
   } else {
       target.style.textDecoration = "underline";
   }
}
function italicText() {
    var target = document.getElementById("Lyrics");
    if( target.style.fontStyle == "italic") {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic"
    }
}

function font() {
    document.getElementById("Lyrics").style.fontFamily = document.getElementById('font').value
}
function taille() {
    document.getElementById("Lyrics").style.fontSize = document.getElementById('size').value
}