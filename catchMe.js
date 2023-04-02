var box = document.getElementById('div');

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

//update the viewport height and width dynamically
window.addEventListener("resize", function(event){
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});


box.addEventListener('mouseover', function(event){
    
    var boxAttribute = box.getBoundingClientRect();

    var position = getNewPosition(boxAttribute.width,boxAttribute.height);

    box.style.top = position.y + 'px';
    box.style.left = position.x + 'px';
});

function getNewPosition(boxWidth, boxHeight){

    //The boxWidth and boxHeight are subtracted so that they would not move out from the right and left bottom directions
    var newX = Math.floor((Math.random() * viewHeight) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);

    //These will satisfy that box does ot move go out in the top and left direction
    if(newX < 0){
        newX = 0;
    }
    if(newY < 0){
        newY = 0;
    }

    return {x: newX,y: newY};
}