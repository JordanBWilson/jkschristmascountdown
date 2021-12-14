
let daysTillXMas = '';
let snowFlakes = [];
(function() {

  Game.canvas = document.getElementById('Stage');
  daysTillChristmas();
  drawMainMenu();
  
  setInterval(function() {
    addSnow();
  }, 300);
  Game.methodSetup = { method: function(id) { moveSnow(); }};
  Game.addMethod(Game.methodSetup);
})();



function drawMainMenu() { // draw the main menu
  Game.clearStage();
  Game.setSettingsHigh();
  Game.methodSetup = { 
    method: function(id) {
      drawRect({ 
        posX: 0, 
        posY: 0, 
        width: Game.canvas.width, 
        height: Game.canvas.height, 
        lineWidth: 1, 
        color: 'black', 
        isFilled: true, 
        id: 'background', 
        isSolid: false, 
        isBackground: true, 
        props: {}, 
        methodId: id 
      });
    } 
  };
  Game.addMethod(Game.methodSetup);
  Game.methodSetup = { 
    method: function(id) {
      drawText({ 
        font: '2em serif', 
        msg: 'The Taylor Family', 
        posX: (Game.canvas.width * 0.5), 
        posY: (Game.canvas.height * 0.25), 
        color: 'white', 
        align: 'center', 
        props: {}, 
        methodId: id 
      });
    } 
  };
  Game.addMethod(Game.methodSetup);
  Game.methodSetup = { 
    method: function(id) {
      drawText({ 
        font: '2em serif', 
        msg: 'Countdown To Christmas', 
        posX: (Game.canvas.width * 0.5), 
        posY: (Game.canvas.height * 0.37), 
        color: 'white', 
        align: 'center', 
        props: {}, 
        methodId: id 
      });
    } 
  };
  Game.addMethod(Game.methodSetup);
  Game.methodSetup = { 
    method: function(id) {
      drawText({ 
        font: '1em serif', 
        msg: daysTillXMas, 
        posX: (Game.canvas.width * 0.5), 
        posY: (Game.canvas.height * 0.57), 
        color: 'white', 
        align: 'center', 
        props: {}, 
        methodId: id 
      });
    } 
  };
  Game.addMethod(Game.methodSetup);
  
}

function addSnow() {
  
  const randomX = Math.floor(Math.random() * Game.canvas.width) + 1;
  
  Game.methodSetup = { 
    method: function(id) {
      drawArc({ 
        posX: randomX, 
        posY: (Game.canvas.height * 0.0), 
        width: (Game.entitySize * .4), 
        aglStrt: 0, 
        aglEnd: 2 * Math.PI, 
        lineWidth: 2, 
        color: 'white', 
        isFilled: true, 
        id: 'snowflake', 
        isSolid: false, 
        props: {}, 
        methodId: id 
      });
    } 
  };
  Game.addMethod(Game.methodSetup);
  
}

function moveSnow() {
  snowFlakes = Game.methodObjects.filter(x => x.id === 'snowflake');
  
  for (let i = 0; i < snowFlakes.length; i++) {
    snowFlakes[i].posY += Game.moveEntity(0.1, Game.enumDirections.topDown);
    if (snowFlakes[i].posY >= (Game.canvas.height)) {
      Game.deleteEntity(snowFlakes[i].methodId);
    }
  }
}

function daysTillChristmas() {
  const today = new Date();
  const xmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() === 11 && today.getDate() > 25) {
    xmas.setFullYear(xmas.getFullYear() + 1); 
  }  
  let one_day=1000*60*60*24;
  daysTillXMas = Math.ceil((xmas.getTime() - today.getTime()) / (one_day)) + 
  ' days left until Christmas!';
}
