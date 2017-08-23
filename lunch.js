var images =["pizzas.jpg","taco.jpg","popos.jpg","sushi(1).jpg","burger.jpg","gyro(1).jpg","bbq(1).jpg","wings.jpg"];

var places =["Mellow Mushroom","El Quiznos","Chipotle","Kuroshio","Grub Burger","Olive Bistro","Heirloom BBQ","Buffalo Wild Wings"];

$("#choice").click(function chooser() {
    
    var number = Math.floor(Math.random()*8);
    
    var image_holder = images[number];
        console.log(image_holder);
   
    $("#restaurant").attr("src", image_holder);
    $("#text").text(places[number]);
    
  
    

})










/*function random(){
    return Math.floor(Math.random()*2)
}

console.log(random())

$("#choice").click(random())
//var number = makeid();
//console.log(number);

var number = random()

var image_holder = images[number]
console.log(image_holder)

var lunch_choice = lunch[number];
console.log(lunch_choice);

$("#choice").click(function(){
    $("#touch").replaceWith(lunch_choice);
    console.log(lunch_choice);
}); 


$("#choice").click(function(){
    $("#restaurant").attr("src", image_holder);
    console.log(lunch_choice)
}); 

*/