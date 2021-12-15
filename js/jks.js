
let daysTillXMasMessage = '';
let daysTillXMas = 0;
let snowFlakes = [];
let correctAnswers = 0;
let wrongAnswers = 0;
let questions = [
  {
    id:1, 
    msg: 'Who is your Daddy?'
  },
  {
    id:2, 
    msg: 'What is your Favorite Color?'
  },
  {
    id:3, 
    msg: 'Guess a number between 1 and 4'
  },
  {
    id:4, 
    msg: 'How cold is it outside?'
  },
];
let answers = [
  {
    id:1, 
    msg: 'Your Mom', 
    ansr: false
  },
  {
    id:1, 
    msg: 'Your Husband', 
    ansr: false
  },
  {
    id:1, 
    msg: 'Your Wife', 
    ansr: false
  },
  {
    id:1, 
    msg: 'Your Daddy', 
    ansr: true
  },
  {
    id:2, 
    msg: 'Red', 
    ansr: false
  },
  {
    id:2, 
    msg: 'Blue', 
    ansr: true
  },
  {
    id:2, 
    msg: 'Green', 
    ansr: false
  },
  {
    id:2, 
    msg: 'Yellow', 
    ansr: false
  },
  {
    id:3, 
    msg: '1', 
    ansr: true
  },
  {
    id:3, 
    msg: 'two', 
    ansr: false
  },
  {
    id:3, 
    msg: '4', 
    ansr: false
  },
  {
    id:3, 
    msg: 'III', 
    ansr: false
  },
  {
    id:4, 
    msg: 'Real Cold', 
    ansr: false
  },
  {
    id:4, 
    msg: 'Damn Cold', 
    ansr: true
  },
  {
    id:4, 
    msg: '50 Degrees F', 
    ansr: false
  },
  {
    id:4, 
    msg: 'Your Mom', 
    ansr: false
  },
  {
    id:5, 
    msg: 'two', 
    ansr: false
  },
  {
    id:5, 
    msg: '1', 
    ansr: true
  },
  {
    id:5, 
    msg: '4', 
    ansr: false
  },
  {
    id:5, 
    msg: 'III', 
    ansr: false
  },
  {
    id:6, 
    msg: 'two', 
    ansr: false
  },
  {
    id:6, 
    msg: '4', 
    ansr: false
  },
  {
    id:6, 
    msg: '1', 
    ansr: true
  },
  {
    id:6, 
    msg: 'III', 
    ansr: false
  },
  {
    id:7, 
    msg: 'two', 
    ansr: false
  },
  {
    id:7, 
    msg: '4', 
    ansr: false
  },
  {
    id:7, 
    msg: 'III', 
    ansr: false
  },
  {
    id:7, 
    msg: '1', 
    ansr: true
  },
  {
    id:8, 
    msg: '1', 
    ansr: true
  },
  {
    id:8, 
    msg: 'two', 
    ansr: false
  },
  {
    id:8, 
    msg: '4', 
    ansr: false
  },
  {
    id:8, 
    msg: 'III', 
    ansr: false
  },
  {
    id:9, 
    msg: '1', 
    ansr: true
  },
  {
    id:9, 
    msg: 'two', 
    ansr: false
  },
  {
    id:9, 
    msg: '4', 
    ansr: false
  },
  {
    id:9, 
    msg: 'III', 
    ansr: false
  },
  {
    id:10, 
    msg: 'two', 
    ansr: false
  },
  {
    id:10, 
    msg: '1', 
    ansr: true
  },
  {
    id:10, 
    msg: '4', 
    ansr: false
  },
  {
    id:10, 
    msg: 'III', 
    ansr: false
  },
  {
    id:11, 
    msg: 'two', 
    ansr: false
  },
  {
    id:11, 
    msg: '4', 
    ansr: false
  },
  {
    id:11, 
    msg: '1', 
    ansr: true
  },
  {
    id:11, 
    msg: 'III', 
    ansr: false
  },
    {
    id:12, 
    msg: 'two', 
    ansr: false
  },
  {
    id:12, 
    msg: '4', 
    ansr: false
  },
  {
    id:12, 
    msg: '1', 
    ansr: true
  },
  {
    id:12, 
    msg: 'III', 
    ansr: false
  },
];
(function() {

  Game.canvas = document.getElementById('Stage');
  daysTillChristmas();
  drawMainMenu();
  
  setInterval(function() {
    addSnow();
  }, 300);
})();



function drawMainMenu() { // draw the main menu
  Game.clearStage();
  Game.setSettingsHigh();
  Game.methodSetup = { method: function(id) { moveSnow(); }};
  Game.addMethod(Game.methodSetup);
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
        font: '1.5em serif', 
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
        font: '1.5em serif', 
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
        msg: daysTillXMasMessage, 
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
  
  if (daysTillXMas > 0) {
    Game.methodSetup = {
      method: function(id) {
         drawButton({
          posX: (Game.canvas.width * 0.3),
          posY: (Game.canvas.height * 0.65),
          width: (Game.canvas.width * 0.4),
          height: (Game.entitySize * 7),
          lineWidth: 1,
          btnColor: 'grey',
          txtColor: 'white',
          font: '1.3em serif',
          msg: 'Access Code',
          isFilled: true,
          id: id,
          isSolid: false,
          action: { method: function(id) { createSafeQuestions(); }},
          props: {},
          methodId: id
        });
      }
    };
    Game.addMethod(Game.methodSetup);
  }
  
  
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
  let one_day = 1000 * 60 * 60 * 24;
  daysTillXMas = Math.ceil((xmas.getTime() - today.getTime()) / (one_day));
  daysTillXMasMessage = daysTillXMas + ' days left until Christmas!';
}

function createSafeQuestions() {
  let randomQuestionId = Math.floor(Math.random() * questions.length);
  safeQuestion(randomQuestionId);
}

function safeQuestion(id) {
  let question = questions[id]?.msg
  let currentAnswers = answers.filter(item => item.id === questions[id].id);
  Game.clearStage();
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
  
  Game.methodSetup = { method: function(id) { moveSnow(); }};
  Game.addMethod(Game.methodSetup);
  Game.methodSetup = { 
    method: function(id) {
      drawText({ 
        font: '1.1em serif', 
        msg: question, 
        posX: (Game.canvas.width * 0.5), 
        posY: (Game.canvas.height * 0.17), 
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
         drawButton({
          posX: (Game.canvas.width * 0.03),
          posY: (Game.canvas.height * 0.35),
          width: (Game.canvas.width * 0.45),
          height: (Game.entitySize * 7),
          lineWidth: 1,
          btnColor: 'grey',
          txtColor: 'white',
          font: '1em serif',
          msg: currentAnswers[0].msg,
          isFilled: true,
          id: id,
          isSolid: false,
          action: { method: function(id) { isAnswerCorrect(currentAnswers[0].ansr); }},
          props: {},
          methodId: id
        });
      }
    };
    Game.addMethod(Game.methodSetup);
    Game.methodSetup = {
      method: function(id) {
         drawButton({
          posX: (Game.canvas.width * 0.52),
          posY: (Game.canvas.height * 0.35),
          width: (Game.canvas.width * 0.45),
          height: (Game.entitySize * 7),
          lineWidth: 1,
          btnColor: 'grey',
          txtColor: 'white',
          font: '1em serif',
          msg: currentAnswers[1].msg,
          isFilled: true,
          id: id,
          isSolid: false,
          action: { method: function(id) { isAnswerCorrect(currentAnswers[1].ansr); }},
          props: {},
          methodId: id
        });
      }
    };
    Game.addMethod(Game.methodSetup);
    Game.methodSetup = {
      method: function(id) {
         drawButton({
          posX: (Game.canvas.width * 0.03),
          posY: (Game.canvas.height * 0.65),
          width: (Game.canvas.width * 0.45),
          height: (Game.entitySize * 7),
          lineWidth: 1,
          btnColor: 'grey',
          txtColor: 'white',
          font: '1em serif',
          msg: currentAnswers[2].msg,
          isFilled: true,
          id: id,
          isSolid: false,
          action: { method: function(id) { isAnswerCorrect(currentAnswers[2].ansr); }},
          props: {},
          methodId: id
        });
      }
    };
    Game.addMethod(Game.methodSetup);
    Game.methodSetup = {
      method: function(id) {
         drawButton({
          posX: (Game.canvas.width * 0.52),
          posY: (Game.canvas.height * 0.65),
          width: (Game.canvas.width * 0.45),
          height: (Game.entitySize * 7),
          lineWidth: 1,
          btnColor: 'grey',
          txtColor: 'white',
          font: '1em serif',
          msg: currentAnswers[3].msg,
          isFilled: true,
          id: id,
          isSolid: false,
          action: { method: function(id) { isAnswerCorrect(currentAnswers[3].ansr); }},
          props: {},
          methodId: id
        });
      }
    };
    Game.addMethod(Game.methodSetup);
}

function isAnswerCorrect(isCorrect) {
  if (isCorrect) {
    correctAnswers++;
    correctScreen();
  } else {
    wrongScreen();
    wrongAnswers++;
  }
  if (wrongAnswers >= 3) {
    correctAnswers = 0;
    wrongAnswers = 0;
    drawMainMenu();
  }
  if (correctAnswers >= 10) {
    correctAnswers = 0;
    wrongAnswers = 0;
    youWin();
  }
}

function correctScreen() {
  Game.clearStage();
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
  Game.methodSetup = { method: function(id) { moveSnow(); }};
  Game.addMethod(Game.methodSetup);
  Game.methodSetup = { 
    method: function(id) {
      drawText({ 
        font: '1.5em serif', 
        msg: 'That is Correct!', 
        posX: (Game.canvas.width * 0.5), 
        posY: (Game.canvas.height * 0.17), 
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
      drawButton({
        posX: (Game.canvas.width * 0.3),
        posY: (Game.canvas.height * 0.65),
        width: (Game.canvas.width * 0.4),
        height: (Game.entitySize * 7),
        lineWidth: 1,
        btnColor: 'grey',
        txtColor: 'white',
        font: '1em serif',
        msg: 'Next Question...',
        isFilled: true,
        id: id,
        isSolid: false,
        action: { method: function(id) { createSafeQuestions(); }},
        props: {},
        methodId: id
      });
    }
  };
  Game.addMethod(Game.methodSetup);
}

function wrongScreen() {
  Game.clearStage();
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
  Game.methodSetup = { method: function(id) { moveSnow(); }};
  Game.addMethod(Game.methodSetup);
  Game.methodSetup = { 
    method: function(id) {
      drawText({ 
        font: '1.5em serif', 
        msg: 'That is Wrong!', 
        posX: (Game.canvas.width * 0.5), 
        posY: (Game.canvas.height * 0.17), 
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
      drawButton({
        posX: (Game.canvas.width * 0.3),
        posY: (Game.canvas.height * 0.65),
        width: (Game.canvas.width * 0.4),
        height: (Game.entitySize * 7),
        lineWidth: 1,
        btnColor: 'grey',
        txtColor: 'white',
        font: '1em serif',
        msg: 'Next Question...',
        isFilled: true,
        id: id,
        isSolid: false,
        action: { method: function(id) { createSafeQuestions(); }},
        props: {},
        methodId: id
      });
    }
  };
  Game.addMethod(Game.methodSetup);
}
function youWin() {
  Game.clearStage();
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
  Game.methodSetup = { method: function(id) { moveSnow(); }};
  Game.addMethod(Game.methodSetup);
  Game.methodSetup = { 
    method: function(id) {
      drawText({ 
        font: '1.3em serif', 
        msg: 'Alright, you did it! Here it is:', 
        posX: (Game.canvas.width * 0.5), 
        posY: (Game.canvas.height * 0.17), 
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
        font: '1.2em serif', 
        msg: 'Try again on Christmas ;]', 
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
      drawButton({
        posX: (Game.canvas.width * 0.3),
        posY: (Game.canvas.height * 0.65),
        width: (Game.canvas.width * 0.4),
        height: (Game.entitySize * 7),
        lineWidth: 1,
        btnColor: 'grey',
        txtColor: 'white',
        font: '1em serif',
        msg: 'Got Yeah!',
        isFilled: true,
        id: id,
        isSolid: false,
        action: { method: function(id) { drawMainMenu(); }},
        props: {},
        methodId: id
      });
    }
  };
  Game.addMethod(Game.methodSetup);
}
