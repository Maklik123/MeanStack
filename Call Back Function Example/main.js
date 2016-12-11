/*
function placeAnOrder(orderNumber){
    
    console.log("Order Number: ", orderNumber);
    
    getWaterAndDeliver(function(){
        console.log("Water delivered to: ",orderNumber);
    });
    
    
}


function getWaterAndDeliver(callback){
    setTimeout(callback, 5000);
}


//Simulate Orders

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);



var food = ["fish","tuna","chicken","mutton"];

var otherFood = [
    {
        "FoodItem": "Chicken",
        "FoodQuality": "Good",
        "Weight": "5Kg",
        "orderChicken": function(){
            console.log("Chicken ordered"); 
        }
    },
    {
        "FoodItem": "Fish",
        "quality": "excellent",
        "weight": "3Kg"
    }
    
];

console.log(otherFood[0].FoodItem);

*/
/*
function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave life to " + targetPlayer.name);
    }
}

var ahsan = new User();
var israr = new User();

ahsan.name = "Ahsan the destroyer";
israr.name = "Dominator Israr";

israr.giveLife(ahsan);

User.prototype.hadouken = function hadouken(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " nain hadouken mara " + targetPlayer.name + " ko");
}


israr.hadouken(ahsan);

User.prototpye.sayHello = "Hello, how are you?";
*/
function Vehicle(){
    this.name="";
    this.seats=50;
    
}

var Mustang=new Vehicle();
var Nissan=new Vehicle();
var Surf=new Vehicle();
var MercedesBus=new Vehicle();
var LandCruser=new Vehicle();
Mustang.name="Ford Mustang GT 2016";
Mustang.seats=5;
Nissan.name="NissanSuv";
Nissan.seats=7
Surf.name="Surf";
Surf.seats=9;
MercedesBus.name="Bus";
MercedesBus.seats=50;
LandCruser.name="Toyota";
LandCruser.seats=8;


Vehicle.prototype.selectVehicle=function selectVehicle(person){
    
    if(Mustang.seats==person){
        console.log(Mustang.name);
    }
    
    if(Nissan.seats==person){
        console.log(Nissan.name);
    }
    
    if(Surf.seats==person){
        console.log(Surf.name);
    }
    
    if(MercedesBus.seats==person){
        console.log(MercedesBus.name);
    }
    
    if(LandCruser.seats==person){
        console.log(LandCruser.name);
    }
    
}



























































