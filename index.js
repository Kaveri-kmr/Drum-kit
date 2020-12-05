var neededButtons= document.querySelectorAll(".drum").length

for (var i =0;i<neededButtons;i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
            
            var buttonInnerHTML=this.innerHTML
            makeSound(buttonInnerHTML)
            buttonAnimation(buttonInnerHTML)
        });
    }
        document.addEventListener("keydown",function (event){
                  
                  makeSound(event.key)
                  buttonAnimation(event.key)
        })

        function makeSound(event){
        //    var buttonInnerHTML=this.innerHTML
           switch (event) {
                  case "a":
                      var audio= new Audio('sounds/tom-1.mp3');
                      audio.play();  
                      break;
                  case "s":
                      var audio= new Audio('sounds/tom-2.mp3');
                      audio.play();  
                      break;
                  case "d":
                      var audio= new Audio('sounds/tom-3.mp3');
                      audio.play();  
                      break;
                  case "f":
                      var audio= new Audio('sounds/tom-4.mp3');
                      audio.play();  
                      break;
                  case "g":
                      var audio= new Audio('sounds/crash.mp3');
                      audio.play();  
                      break;
                  case "h":
                      var audio= new Audio('sounds/kick-bass.mp3');
                      audio.play();  
                      break;
                  case "j":
                      var audio= new Audio('sounds/snare.mp3');
                      audio.play();  
                      break;
              
                  default:
                      alert("wrong key pressed")
                      var audio= new Audio('sounds/crash.mp3');
                      audio.play();
                      break;
        }
             
        
        }     
        
        
        function buttonAnimation(curremtEvent){
                    var activeKey=document.querySelector("."+curremtEvent) 
                    activeKey.classList.add("pressed")

                    setTimeout(function remove() {
                        activeKey.classList.remove("pressed")
                        
                    }, 100);
        }
        
