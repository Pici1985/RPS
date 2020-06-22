// function to run if choice is rock

function makeChoiceRock () {
   choice = 0;  
   choice = document.getElementById("btnRock");
   document.getElementById("rockLeft").style.display = "";
   document.getElementById("btnRock").disabled = true;
   document.getElementById("btnPaper").disabled = true;
   document.getElementById("btnScissors").disabled = true;
   choice = 0;
   /* console.log(choice); */
   randomChoice();
   compareWin();    
}

// function to run if choice is paper

function makeChoicePaper () {
    choice = 0;
    choice = document.getElementById("btnPaper");
    document.getElementById("paperLeft").style.display = "";
    document.getElementById("btnPaper").disabled = true;
    document.getElementById("btnRock").disabled = true;
    document.getElementById("btnScissors").disabled = true;
    choice = 1;
    /* console.log(choice); */
    randomChoice();
     compareWin();
 }

// function to run if choice is scissors

 function makeChoiceScissors () {
    choice = 0;   
    choice = document.getElementById("btnScissors");
    document.getElementById("scissorsLeft").style.display = "";
    document.getElementById("btnPaper").disabled = true;
    document.getElementById("btnRock").disabled = true;
    document.getElementById("btnScissors").disabled = true;
    choice = 2;
    /* console.log(choice); */
    randomChoice();
    compareWin();
 }

// function to create the computers choice with a random number

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

// checker function while coding the app,  obsolete 

function logIt() {
    console.log(choice); 
    console.log(autoChoice);
}


// final score comparison function to see who won

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

// function to reload the page and start the game again

function rePlayer() {
    var replay = document.getElementById("rePlay");
    window.location.reload(true);    
}

