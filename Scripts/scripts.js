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
    }); 
}

document.addEventListener("keypress", function(event){
    makeSound(event.key)
});

function makeSound(key){

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

}
