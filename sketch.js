//Naming variables
var diwaliDiya, diwaliAnimation;
var soundFire;
let scribble1, scribble1Animation;
let scribble2, scribble2Animation;
let diya, diyaAnimation;
let animation, animationAnimation;
let bgsmh;

function preload()
{
    //Loading animations
    diwaliAnimation = loadAnimation("Diwali0.png", "Diwali1.png", "Diwali2.png", "Diwali3.png", "Diwali4.png", "Diwali5.png");
    scribble1Animation = loadAnimation("scribbleop.png", "scrib0.PNG", "scrib1.PNG", "scrib2.PNG", "scrib3.PNG", "scrib4.PNG", "scrib4.PNG", "scrib3.PNG", "scrib2.PNG", "scrib1.PNG", "scrib0.PNG", "scribbleop.png");
    scribble2Animation = loadAnimation("scribbleop.png", "scribl0.PNG", "scribl1.PNG", "scribl2.PNG", "scribl3.PNG", "scribl4.PNG", "scribl4.PNG", "scribl3.PNG", "scribl2.PNG", "scribl1.PNG", "scribl0.PNG", "scribbleop.png");
    diyaAnimation = loadAnimation("Diya0.png", "Diya1.png", "Diya2.png", "Diya3.png");
    animationAnimation = loadAnimation("animation0.png", "animation1.png", "animation2.png", "animation3.png", "animation4.png", "animation5.png", "animation6.png", "animation7.png", "animation8.png", "animation9.png", "animation10.png");

    //Loading sound
    soundFire = loadSound("y2mate.com - FIREWORKS GREEN SCREEN AND SOUND EFFECTS.mp3");
}

function setup()
{
    createCanvas(540, 520);

     //Looping the sound
     soundFire.loop();

    //Creating sprite for diwali diya
    /*diwaliDiya = createSprite(250, 250);
    diwaliDiya.addAnimation("firing", diwaliAnimation);
    diwaliDiya.scale = 0.7;*/

    bgsmh = createSprite(265, 250, 450, 400);
    bgsmh.shapeColor = 'gold';
    
    scribble1 = createSprite(175, 480);
    scribble1.addAnimation("noice", scribble1Animation);
    scribble1.scale = 0.2;
    
    scribble2 = createSprite(335, 480);
    scribble2.addAnimation("noice", scribble2Animation);
    scribble2.scale = 0.2;
    
    animation = createSprite(260, 250);
    animation.addAnimation("bruh", animationAnimation);
    animation.scale = 0.5;
    

    diya = createSprite(250, 250);
    diya.addAnimation("maybe", diyaAnimation);
    diya.scale = 0.3;
    
}


function draw()
{
    background("#A60021");
  
    drawSprites();

    //Adding text for hD
    stroke("turquoise");
    textSize(25);
    fill("cyan");
    text("HAPPY DIWALI!!", 160, 490);

    //Adding text for AM
    stroke("black");
    textSize(15);
    fill("white");
    text("FROM-ABHINAV MISHRA", 320, 35);
}
