var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","b740f332-9798-4ea4-b3f0-bf81e5526cba","5d391838-a626-4102-8b5d-ad835ce5a3d2","3fde522f-5804-4dc7-b44c-8cb9ff0c1b59","5b247d31-eb8a-4ebe-8b9e-1c8c5a64e3e4","7e299b39-8166-44f0-ac19-1cb4a487bd32","89117d35-34c9-49b2-a217-0726979bed53","6a00e7ff-9547-44da-9b80-e4db28aedf77"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"yiCHtBH4L4jJ_WlDkab1vc7PIt5QeX4A","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"rKTjARb1hrJ_sUmPQsHrNLJrFlCxe0HW","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"pVEFce8vgI1LLkX2OY_ofgRtDn0qPhUc","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"b740f332-9798-4ea4-b3f0-bf81e5526cba":{"name":"c","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:18 UTC","pngLastModified":"2021-01-05 18:38:25 UTC","version":"uexnVGl6IX_C6YzQENPPXtel_lCwoG7F","sourceUrl":"assets/api/v1/animation-library/gamelab/uexnVGl6IX_C6YzQENPPXtel_lCwoG7F/category_backgrounds/desert_road.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/uexnVGl6IX_C6YzQENPPXtel_lCwoG7F/category_backgrounds/desert_road.png"},"5d391838-a626-4102-8b5d-ad835ce5a3d2":{"name":"germe1","categories":["germs"],"frameCount":1,"frameSize":{"x":397,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:14:23 UTC","pngLastModified":"2021-01-05 19:14:38 UTC","version":"FGd.xwvKrpdqQks6CQstgdotKRmQc3_y","sourceUrl":"assets/api/v1/animation-library/gamelab/FGd.xwvKrpdqQks6CQstgdotKRmQc3_y/category_germs/gameplaywacky_02.png","sourceSize":{"x":397,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/FGd.xwvKrpdqQks6CQstgdotKRmQc3_y/category_germs/gameplaywacky_02.png"},"3fde522f-5804-4dc7-b44c-8cb9ff0c1b59":{"name":"germe2","categories":["germs"],"frameCount":1,"frameSize":{"x":390,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:14:34 UTC","pngLastModified":"2021-01-05 19:14:37 UTC","version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","sourceSize":{"x":390,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"},"5b247d31-eb8a-4ebe-8b9e-1c8c5a64e3e4":{"name":"germe3","categories":["germs"],"frameCount":1,"frameSize":{"x":397,"y":372},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:14:27 UTC","pngLastModified":"2021-01-05 19:14:24 UTC","version":"ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p","sourceUrl":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png","sourceSize":{"x":397,"y":372},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZdtNFtOiydwR9zKYWovoGTaaRFuvBF6p/category_germs/gameplaywacky_05.png"},"7e299b39-8166-44f0-ac19-1cb4a487bd32":{"name":"hero3","categories":["robots"],"frameCount":1,"frameSize":{"x":380,"y":394},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:33:19 UTC","pngLastModified":"2021-01-05 19:33:18 UTC","version":"n8Do8DE9kHjwgkcc3CjTaoOJ7WQqjgE5","sourceUrl":"assets/api/v1/animation-library/gamelab/n8Do8DE9kHjwgkcc3CjTaoOJ7WQqjgE5/category_robots/robot_08.png","sourceSize":{"x":380,"y":394},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/n8Do8DE9kHjwgkcc3CjTaoOJ7WQqjgE5/category_robots/robot_08.png"},"89117d35-34c9-49b2-a217-0726979bed53":{"name":"hero20","categories":["animals"],"frameCount":1,"frameSize":{"x":306,"y":316},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:21:37 UTC","pngLastModified":"2021-01-05 18:21:38 UTC","version":"i.TOUie12cy0KbasjKdp6IWoFSTZDYCk","sourceUrl":"assets/api/v1/animation-library/gamelab/i.TOUie12cy0KbasjKdp6IWoFSTZDYCk/category_animals/animalhead_fox.png","sourceSize":{"x":306,"y":316},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/i.TOUie12cy0KbasjKdp6IWoFSTZDYCk/category_animals/animalhead_fox.png"},"6a00e7ff-9547-44da-9b80-e4db28aedf77":{"name":"hero2","frameCount":1,"frameSize":{"x":387,"y":400},"looping":true,"frameDelay":2,"categories":["video_games"],"jsonLastModified":"2021-03-29 19:32:53 UTC","pngLastModified":"2021-03-29 19:32:53 UTC","version":"1Bfj2ZM1EuRQZteZ_QgN5e8YXdTg3LEu","sourceUrl":"assets/api/v1/animation-library/gamelab/1Bfj2ZM1EuRQZteZ_QgN5e8YXdTg3LEu/category_video_games/cactus_01.png","sourceSize":{"x":387,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/1Bfj2ZM1EuRQZteZ_QgN5e8YXdTg3LEu/category_video_games/cactus_01.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var c = createSprite(200,200);
 c.setAnimation("c")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var germe1 = createSprite(200,250,10,10)
germe1.shapeColor="purple"

var germe2 = createSprite(200,150,10,10)
germe2.shapeColor="blue"

var germe3 = createSprite(200,50,10,10)
germe3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="green"

var goal =0;
var death = 0

hero.setAnimation("hero2");
hero.scale=.2;
germe1.setAnimation("germe1");
germe1.scale=.1;
germe2.setAnimation("germe2");
germe2.scale=.1;
germe3.setAnimation("germe3");
germe3.scale=.1;

germe1.setVelocity(-10,0);
germe2.setVelocity(10,0);
germe3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(c);

createEdgeSprites()




germe1.bounceOff(edges)
germe2.bounceOff(edges)
germe3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-4
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+4
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-4
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+4
}

if(hero.isTouching(germe1)|| hero.isTouching(germe2)|| hero.isTouching(germe3)){
  playSound("assets/category_instrumental/digital_downscale_1.mp3");
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_bell/choose_background.mp3");
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("black")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
