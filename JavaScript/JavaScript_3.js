function displayType(food) {
    var foodType = food.getAttribute("data-food-type");
    alert(foodType + " is in the " + food.innerHTML + " food group!");
}