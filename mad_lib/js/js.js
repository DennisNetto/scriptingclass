function hide() {
  var x = document.getElementById("bootform");
  var y = document.getElementById("bootlibb");
  var z = document.getElementById("butt");
  x.style.display = "none";
  z.style.display = "none";
  y.style.display = "block";
} 
function make() {
    var wheather = document.getElementById("wheather").value;
    var animal = document.getElementById("animal").value;
    var fruit = document.getElementById("fruit").value;
    var liquid = document.getElementById("liquid").value;
    var powder = document.getElementById("powder").value;
    var description = document.getElementById("description").value;
    var weapon = document.getElementById("weapon").value;
    var food = document.getElementById("food").value;
    var light = document.getElementById("light").value;
    var clothing = document.getElementById("clothing").value;
    if(animal && fruit && liquid && powder && description && weapon && food && light && clothing){
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("optionsel", wheather);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option1", animal);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option2", fruit);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option3", liquid);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option4", powder);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option5", description);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option6", weapon);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option7", food);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option8", light);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option9", clothing);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option1", animal);
        var text = document.getElementById("bootlibb").innerHTML; 
        document.getElementById("bootlibb").innerHTML = text.replace("option1", animal);
        if (wheather == "Sunny"){
          document.getElementById("photo").src = "images/rainy.jpg";
          document.getElementById("photo").alt = "background";
        }
        else if (wheather == "Foggy"){
          document.getElementById("photo").src = "images/foggy.jpg";
          document.getElementById("photo").alt = "background";
        }
        else if (wheather == "Rainy"){
          document.getElementById("photo").src = "images/rainy.jpg";
          document.getElementById("photo").alt = "background";
        }
        else if (wheather == "Windy"){
          document.getElementById("photo").src = "images/windy.jpg";
          document.getElementById("photo").alt = "background";
        }
        hide();
    }

}