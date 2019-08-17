function validate() {
    var x = document.getElementById("numbs").value;
    var text;
    if (isNaN(x) || x<1 || x>100) {
        text = "Input bad";
    } else {
        text = "Input good";
    }
    alert(text);
}