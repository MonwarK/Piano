for(i=0; i < document.querySelectorAll(".key").length; i++)
{
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        var key = this.innerHTML;     
               
        switch (key) {
            case "A":
                var audio = new Audio("./Audio/a5.ogg");
                audio.play();
            break;

            case "B":
                var audio = new Audio("./Audio/b5.ogg");
                audio.play();
            break;

            case "C":
                var audio = new Audio("./Audio/c5.ogg");
                audio.play();
            break;

            case "D":
                var audio = new Audio("./Audio/d5.ogg");
                audio.play();
            break;

            case "E":
                var audio = new Audio("./Audio/e5.ogg");
                audio.play();
            break;

            case "F":
                var audio = new Audio("./Audio/f5.ogg");
                audio.play();
            break;

            case "G":
                var audio = new Audio("./Audio/g5.ogg");
                audio.play();
            break;
        
            default:
            break;
        }    

        clickedAnimation(key);    
    }); 
}

function clickedAnimation(key){   
    document.querySelector("." + key.toLowerCase() ).classList.add("clicked"); 
    setTimeout(function(){
        document.querySelector("." + key.toLowerCase() ).classList.remove("clicked");
    }, 100);
}

document.addEventListener("keypress", function(event){
    makeSound(event.key)
});

function makeSound(key){
    clickedAnimation(key);
    switch (key) {
        case "A":
            var audio = new Audio("./Audio/a5.ogg");
            audio.play();
        break;

        case "a":
            var audio = new Audio("./Audio/a5.ogg");
            audio.play();
        break;

        case "B":
            var audio = new Audio("./Audio/b5.ogg");
            audio.play();
        break;

        case "b":
            var audio = new Audio("./Audio/b5.ogg");
            audio.play();
        break;

        case "C":
            var audio = new Audio("./Audio/c5.ogg");
            audio.play();
        break;

        case "c":
            var audio = new Audio("./Audio/c5.ogg");
            audio.play();
        break;

        case "D":
            var audio = new Audio("./Audio/d5.ogg");
            audio.play();
        break;

        case "d":
            var audio = new Audio("./Audio/d5.ogg");
            audio.play();
        break;

        case "E":
            var audio = new Audio("./Audio/e5.ogg");
            audio.play();
        break;

        case "e":
            var audio = new Audio("./Audio/e5.ogg");
            audio.play();
        break;

        case "F":
            var audio = new Audio("./Audio/f5.ogg");
            audio.play();
        break;

        case "f":
            var audio = new Audio("./Audio/f5.ogg");
            audio.play();
        break;

        case "G":
            var audio = new Audio("./Audio/g5.ogg");
            audio.play();
        break;

        case "g":
            var audio = new Audio("./Audio/g5.ogg");
            audio.play();
        break;
    
        default:
        break;        
    }

}
