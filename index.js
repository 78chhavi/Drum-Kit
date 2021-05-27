var numOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numOfDrumButtons;i++)  //Here querySelectorAll will not work bcz Eventlistener applies on single element.
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    var button=this.textContent;   //this refers to the pressed button
    makeSound(button);
    animation(button);
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animation(event.key);
});

function makeSound(button)
{
  switch(button)
  {
    case "w":  var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
    case "a":  var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
    case "s":  var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case "d":  var audio=new Audio("sounds/tom-4.mp3");
              audio.play();
              break;
    case "j":  var audio=new Audio("sounds/snare.mp3");
              audio.play();
              break;
    case "k":  var audio=new Audio("sounds/crash.mp3");
              audio.play();
              break;
    case "l":  var audio=new Audio("sounds/kick-bass.mp3");
              audio.play();
              break;
    default: console.log(this);
  }
}

function animation(button)
{
  var x=document.querySelector("."+button);
  x.classList.add("pressed");
  setTimeout(function(){x.classList.remove("pressed");},100);
}
