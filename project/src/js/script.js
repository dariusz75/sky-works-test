function init() {

  var stage = new createjs.Stage("demoCanvas");
  var background = new createjs.Bitmap("images/frame12-background.png");
  var skyLogo = new createjs.Bitmap("images/frame12-sky-logo.png");
  var products = new createjs.Bitmap("images/frame1-products.png");
  var frame1gradientText = new createjs.Bitmap("images/frame1-gradient-tex.png");
  var frame1blueText = new createjs.Bitmap("images/frame1-blue-text.png");
  var frame2gradientText = new createjs.Bitmap("images/frame2-gradient-text.png");
  var frame2greyText = new createjs.Bitmap("images/frame2-grey-text.png");
  var frame2stamp = new createjs.Bitmap("images/frame2-stamp.png");
  var frame3button = new createjs.Bitmap("images/frame3-button.png");
  var frame3gradientText = new createjs.Bitmap("images/frame3-gradient-text.png");
  var frame3blueText = new createjs.Bitmap("images/frame3-blue-text.png");
  var frame3ltdOffer = new createjs.Bitmap("images/frame3-ltd-offer.png");
  var frame3greyText = new createjs.Bitmap("images/frame3-grey-text.png");
  var frame3sheen = new createjs.Bitmap("images/frame3-sheen.png");

  skyLogo.y = 200;
  products.y = 110;
  frame1blueText.y = 45;
  frame1gradientText.alpha = 0;
  frame1blueText.alpha = 0;
  frame2gradientText.alpha = 0;
  frame2greyText.alpha = 0;
  frame2greyText.y = 210;
  frame2stamp.y = -150;
  frame3button.y = 185;
  frame3button.alpha = 0;
  frame3gradientText.alpha = 0;
  frame3blueText.y = 85;
  frame3blueText.alpha = 0;
  frame3ltdOffer.y = 120;
  frame3ltdOffer.alpha = 0;
  frame3greyText.y = 155;
  frame3greyText.alpha = 0;
  frame3sheen.y = 185;
  frame3sheen.alpha = 0;

  stage.addChild(background);
  stage.addChild(skyLogo);
  stage.addChild(products);
  stage.addChild(frame1gradientText);
  stage.addChild(frame1blueText);
  stage.addChild(frame2gradientText);
  stage.addChild(frame2greyText);
  stage.addChild(frame2stamp);
  stage.addChild(frame3button);
  stage.addChild(frame3gradientText);
  stage.addChild(frame3blueText);
  stage.addChild(frame3ltdOffer);
  stage.addChild(frame3greyText);
  stage.addChild(frame3sheen);

  createjs.Ticker.addEventListener("tick", handleTick);

  function handleTick(event) {
    
    stage.update();
    
    // frame 1 animation
    createjs.Tween.get(frame1gradientText).to({alpha: 1},1000).wait(3000).to({alpha: 0},1000);
    createjs.Tween.get(frame1blueText).wait(1000).to({alpha: 1},1000).wait(2000).to({alpha: 0},1000);
    createjs.Tween.get(products).wait(4000).to({alpha: 0},1000);
    // frame 2 animation
    createjs.Tween.get(frame2gradientText).wait(5000).to({alpha: 1},1000).wait(2000).to({alpha: 0},1000);
    createjs.Tween.get(frame2greyText).wait(6000).to({alpha: 1},1000).wait(1000).to({alpha: 0},1000);
    createjs.Tween.get(frame2stamp).wait(6000).to({x:0}, 1000, createjs.Ease.quadOut).wait(1000).to({alpha: 0},1000);
		createjs.Tween.get(frame2stamp).wait(6000).to({y:60}, 1000, createjs.Ease.bounceOut).wait(1000).to({alpha: 0},1000);
		// frame 3 animation
		createjs.Tween.get(frame3button).wait(9000).to({alpha: 1});
		createjs.Tween.get(frame3gradientText).wait(10000).to({alpha: 1}, 1000);
		createjs.Tween.get(frame3blueText).wait(11000).to({alpha: 1}, 1000);
		createjs.Tween.get(frame3ltdOffer).wait(12000).to({alpha: 1}, 1000);
		createjs.Tween.get(frame3greyText).wait(13000).to({alpha: 1}, 1000);
		createjs.Tween.get(frame3sheen).wait(14000).to({alpha: 1}, 1000);
  }
}

