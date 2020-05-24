class Form{
    constructor(){

    }
display(){
var title=createElement('h1');
title.html("Car Racing game");
title.position(200,10);

var input=createInput('name');
input.position(130,160);

var button=createButton("Play");
button.position(250,200);

var greeting=createElement('h2');

button.mousePressed(function(){
 input.hide();
 button.hide();
 var name=input.value();
 playerCount+=1;
 player.updateName(name);
player.updateCount(playerCount);
greeting.html("hello"+name);
greeting.position(200,200);
});
}

}