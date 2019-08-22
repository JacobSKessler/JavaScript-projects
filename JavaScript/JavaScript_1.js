function foodFunction () {
    var foodOutput;
    var foods = document.getElementById("food_input").value;
    var foodString = " is a great food!";
    switch(foods) {
        case "Pizza":
            foodOutput = "Pizza" + foodString;
        break;
        case "Bread":
            foodOutput = "Bread" + foodString;
        break;
        case "Apple":
            foodOutput = "Apple" + foodString;
        break;
        default:
        foodOutput = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = foodOutput;
}

function myFunction() {
    var A = document.getElementsByClassName("target");
    A[0].innerHTML = "Target hit!";
}

function validateForm() {
    var x = document.forms["numForm"]["pnum"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

function myDraw(){
    var c = document.getElementById("painting");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(250, 125);
    ctx.lineTo(500,0);
    ctx.stroke();

    var grd = ctx.createLinearGradient(0,0,170,0);
    grd.addColorStop(1,"red");
    grd.addColorStop(0,"blue");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}

function openForm() {
document.getElementById("myForm").style.display = "block";
}

function closeForm() {
document.getElementById("myForm").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);