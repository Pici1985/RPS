

function makeChoiceRock () {
   choice = 0;  
   choice = document.getElementById("btnRock");
   document.getElementById("rockLeft").style.display = "";
   document.getElementById("btnPaper").disabled = true;
   document.getElementById("btnScissors").disabled = true;
   choice = 0;
   /* console.log(choice); */
   randomChoice();
   compareWin();    
}

function makeChoicePaper () {
    choice = 0;
    choice = document.getElementById("btnPaper");
    document.getElementById("paperLeft").style.display = "";
    document.getElementById("btnRock").disabled = true;
    document.getElementById("btnScissors").disabled = true;
    choice = 1;
    /* console.log(choice); */
    randomChoice();
     compareWin();
 }

 function makeChoiceScissors () {
    choice = 0;   
    choice = document.getElementById("btnScissors");
    document.getElementById("scissorsLeft").style.display = "";
    document.getElementById("btnPaper").disabled = true;
    document.getElementById("btnRock").disabled = true;
    choice = 2;
    /* console.log(choice); */
    randomChoice();
    compareWin();
 }

function randomChoice() {
    autoChoice = Math.floor(Math.random() * 3);

    if (autoChoice == 0) {
        document.getElementById("rockRight").style.display = "";    
    } else if (autoChoice == 1) {
        document.getElementById("paperRight").style.display = "";
    } else {
        document.getElementById("scissorsRight").style.display = "";
    } 
}


function logIt() {
    console.log(choice); 
    console.log(autoChoice);
}


function compareWin() {
if (choice == autoChoice) {
    document.getElementById("draw").style.display = "";    
} else if (choice == 0) {
    if (autoChoice == 2) {
        document.getElementById("win").style.display = "";    
    } else {
        document.getElementById("loose").style.display = "";
    }
}
  else if (choice == 1) {
    if (autoChoice == 2) {
        document.getElementById("loose").style.display = "";    
    }
    else {
        document.getElementById("win").style.display = "";   
    }    
  }    
  else if (choice == 2) {
    if (autoChoice == 0) {
        document.getElementById("loose").style.display = "";    
    } else {
        document.getElementById("win").style.display = "";    
    } 
  }
  else {
      console.log("Invalid input!!")
  }
}

function rePlayer() {
    var replay = document.getElementById("rePlay");
    window.location.reload(true);    
}

