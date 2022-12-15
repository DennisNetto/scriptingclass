
var snowman = {hat:" ", nose:" ", buttons:" ", scarf:" ", hands:" "};



function editman(change, type) {
    if (type=="hat") {
        snowman.hat = change;
        render(type);
    }
    if (type=="nose") {
        snowman.nose = change;
        render(type);
    }
    if (type=="buttons") {
        snowman.buttons = change;
        render(type);
    }
    if (type=="scarf") {
        snowman.scarf = change;
        render(type);
    }
    if (type=="hands") {
        snowman.hands = change;
        render(type);
    }
  }

function render(type) {
    if (type=="hat") {
        document.getElementById('hat').innerHTML="<img class='img-fluid' src='images/hats/"+snowman.hat+"' alt='hat'>";
    }
    if (type=="nose") {
        document.getElementById('nose').innerHTML="<img class='img-fluid' src='images/noses/"+snowman.nose+"' alt='nose'>";
    }
    if (type=="buttons") {
        document.getElementById('button').innerHTML="<img class='img-fluid' src='images/buttons/"+snowman.buttons+"' alt='buttons'>";
    }
    if (type=="scarf") {
        document.getElementById('scarf').innerHTML="<img class='img-fluid' src='images/scarf/"+snowman.scarf+"' alt='scarf'>";
    }
    if (type=="hands") {
        document.getElementById('hands').innerHTML="<img class='img-fluid' src='images/hands/"+snowman.hands+"' alt='hands'>";

    }
}

function textchange() {
    document.getElementById('namefield1').innerText = document.getElementById('name').value
}
