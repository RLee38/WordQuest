console.log("running");
//openIndex();
initialBackground();
loadBackground();


function loadBackground() {
  if (sessionStorage.getItem('background') != null) {
console.log(sessionStorage.getItem('background'));
    
    document.addEventListener('DOMContentLoaded', function() {
      console.log("LOADING UP SESSION STORAGE BACKGROUND");
      if (document.body.id != "game") {
      document.body.style.backgroundImage = "url('../Backgrounds/" + sessionStorage.getItem('background') + ".png')";
    }
    });
  }
}

function initialBackground() {
  if (!sessionStorage.getItem('initializezBackground')) {
    sessionStorage.setItem('initializeBackground', 'true');

    document.addEventListener('DOMContentLoaded', function() {
      document.body.style.backgroundImage = "url('../Backgrounds/sun.png')";
    });

  }

}

function logout() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "../pages/index.html";
}
function openIndex() {
  if (!sessionStorage.getItem('redirected')) {
    sessionStorage.setItem('redirected', 'true');
    window.location.href = '../pages/index.html';
  }
}


function openPage(newPage) {
  if (newPage) {
    
  }
  window.open("../pages/" + newPage + ".html", "_self");
}

function buyBackground(background, price) {
  console.log("Buy Background");
  let qc = sessionStorage.getItem("Current_User_QuestCoin");
  if (qc >= price) {
  sessionStorage.setItem('Current_User_QuestCoin', qc - price);
    let temp = JSON.parse(sessionStorage.getItem('Current_User_Unlocked_Background'));
    console.log(temp[0]+"   "+temp[1]);
    temp.push(background);
    sessionStorage.setItem('Current_User_Unlocked_Background',JSON.stringify(temp));
    let bgBox = document.getElementById(background);
    bgBox.style.display = "none";
    let qcTopBar = document.getElementById("questCoin_topBar")
    qcTopBar.innerHTML = sessionStorage.getItem("Current_User_QuestCoin").toString();
    qcTopBar.innerHTML += " QC";
    equipBackground(background);
  } else if (qc < price) {
console.log("ERROR NOT ENOUGH QC");
  } else {
    console.log("BUYBACKGROUND ERROR");
  }
}

function buyProfile(profile,price) {
  console.log("Buy Profile running");
  let qc = sessionStorage.getItem("Current_User_QuestCoin");
  console.log(qc);
    if (qc >= price) {
    sessionStorage.setItem('Current_User_QuestCoin', qc - price);
      let temp = JSON.parse(sessionStorage.getItem('Current_User_Unlocked_Profile'));
      //console.log(temp[0]+"   "+temp[1]);
      temp.push(profile);
      sessionStorage.setItem('Current_User_Unlocked_Profile',JSON.stringify(temp));
      let pfBox = document.getElementById(profile);
      pfBox.style.display = "none";

      /////////////
      let qcTopBar = document.getElementById("questCoin_topBar")
      qcTopBar.innerHTML = sessionStorage.getItem("Current_User_QuestCoin").toString();
      qcTopBar.innerHTML += " QC";
      ////////////////
      equipProfile(profile);
    } else if (qc < price) {
  console.log("ERROR NOT ENOUGH QC");
    } else {
      console.log("BUYPROFILE ERROR");
    }
}

function equipBackground(background) {
  console.log("runnnnnn");
  document.body.style.backgroundImage = "url('../Backgrounds/" + background + ".png')";
  sessionStorage.setItem('background', background);
}


function equipProfile(profile) {
  console.log("EQUIP PROFILE IS RUNNING" + profile);

  sessionStorage.setItem('profile', profile);
  profileTopBar = document.getElementById('profileTopBar');
  profileTopBar.src = "../Profiles/" + profile + ".png";
}


function loadUserHTML() {

  document.getElementById("User_Username").innerHTML += sessionStorage.getItem("Current_User");
  console.log(sessionStorage.getItem("Current_Password"));
  document.getElementById("User_Password").innerHTML += sessionStorage.getItem("Current_Pass");
  document.getElementById("User_Age").innerHTML += sessionStorage.getItem("Current_User_Age");
  document.getElementById("User_QuestCoins").innerHTML += sessionStorage.getItem("Current_User_QuestCoin");
  document.getElementById("userProfile").src = "../Profiles/" + sessionStorage.getItem('profile') + ".png";
}

function loadShopHTML() {
  //Current_User_Unlocked_Background 
  //Current_User_Unlocked_Profile
  let UP = JSON.parse(sessionStorage.getItem('Current_User_Unlocked_Profile'));
  console.log("UP" + UP);
  let UB = JSON.parse(sessionStorage.getItem('Current_User_Unlocked_Background'));
  console.log("UB" + UB);
  for (let i = 0; i < UP.length; i++) {
    document.getElementById(UP[i]).style.display = "none";
  }
  for (let i = 0;i < UB.length;i++) {
    document.getElementById(UB[i]).style.display = "none";
  }

}

function loadInventoryHTML() {
  console.log("LOADING INVENTORY HTML");
  let inventoryBackgrounds = JSON.parse(sessionStorage.getItem("Current_User_Unlocked_Background"));
  console.log(inventoryBackgrounds[0]);
  for (let i = 0; i < inventoryBackgrounds.length; i++) {
    let backgroundSquare = document.createElement("div");
    backgroundSquare.className = "shopSquare";
    backgroundSquare.addEventListener("click", () => equipBackground(inventoryBackgrounds[i]));
    backgroundSquare.innerHTML += inventoryBackgrounds[i].charAt(0).toUpperCase() + inventoryBackgrounds[i].slice(1) + " Background";
    let pic = document.createElement("img");
    pic.src = "../Backgrounds/" + inventoryBackgrounds[i] + ".png";
    pic.className = "backgroundPos";
    backgroundSquare.appendChild(pic);
    document.getElementById("inventoryBackgrounds").appendChild(backgroundSquare);
  } // end for statement
  let inventoryProfiles = JSON.parse(sessionStorage.getItem("Current_User_Unlocked_Profile"));
  console.log(inventoryProfiles[0]);
  for (let i = 0; i < inventoryProfiles.length; i++) {
    let profileSquare = document.createElement("div");
    profileSquare.className = "shopSquare";
    profileSquare.addEventListener("click", () => equipProfile(inventoryProfiles[i]));
    profileSquare.innerHTML += inventoryProfiles[i] + " Profile";
    let ppic = document.createElement("img");
    ppic.src = "../Profiles/" + inventoryProfiles[i] + ".png";
    ppic.className = "backgroundPos";
    profileSquare.appendChild(ppic);
    document.getElementById("inventoryProfiles").appendChild(profileSquare);
  }//end for statement
}


function loadFlockTalk(grade) {
  console.log("LOADING FLOCK TALK");
  document.body.style.backgroundImage = "url('../FlockTalk/FlockTalkBackground.jpg')";
  document.body.style.backgroundSize = "cover";
  let first = "About,Again,Air,All,Along,Also,Another,Answer,Any,Are,Around,Away,Because,Been,Both,Carry,Change,Come,Could,Do,Does,Dont,Earth,Even,Every,Eye,Father,Find,Four,From,Give,Good,Great,Have,Head,Here,High,Is,Kind,Know,Large,Learn,Light,Long,Look,Many,Might,More,Most,Mother,Move,My,Near,Night,Of,Off,Often,On,One,Only,Other,Our,People,Put,Right,Said,Saw,School,Should,Some,Something,The,Their,They,Thought,Through,Two,Very,Walk,Want,Was,Water,Were,What,When,Where,Who,";
  let second = "accident,agree,arrive,astronomy,atlas,attention,award,aware,balance,banner,bare,base,beach,besides,blast,board,bounce,brain,branch,brave,bright,cage,calf,calm,career,center,cheer,chew,claw,clear,cliff,club,collect,connect,core,corner,couple,crowd,curious,damp,dangerous,dash,dawn,deep,demolish,design,discard,dive,dome,doubt,dozen,earth,enemy,evening,exactly,excess,factory,fair,famous,feast,field,finally,flap,float,flood,fold,fresh,frighten,fuel,gap,gaze,gift,gravity,greedy,harm,herd,idea,insect,instrument,invent,island,leader,leap,lizard,local,lonely,luxury,march,mention,motor,nervous,net,nibble,notice,ocean,pack,pale,parade,past,peak,planet,present,proof,reflect,rumor,safe,scholar,seal,search,settle,share,shelter,shiver,shy,skill,slight,smooth,soil,stack,steady,strand,stream,support,team,telescope,tiny,tower,travel,tremble,universe,village,warn,weak,wealthy,whisper,wise,wonder,worry,yard,zigzag,";
  let third = "ability,absorb,accuse,act,active,actual,adopt,advantage,advice,ambition,ancient,approach,arrange,arctic,attitude,attract,average,avoid,bold,border,brief,brilliant,cable,capture,certain,chill,clever,climate,cling,coast,confess,consider,contain,continent,convince,coward,crew,crumple,custom,decay,deed,defend,delicate,device,diagram,digest,disease,distant,doze,drift,elegant,enable,examine,explore,fan,fatal,fierce,flutter,fortunate,frail,gaspglide,globe,grace,gradual,grasp,habit,harsh,imitate,individual,intelligent,intend,journey,launch,limit,locate,loyal,magnificent,marsh,method,misery,moisture,mural,mystify,nation,nectar,nursery,observe,opponent,opposite,ordeal,origin,outcome,passage,pastime,pause,perform,plunge,predator,predict,prevent,primary,privilege,process,rare,rate,recall,rely,remark,resident,respect,responsible,reverse,revive,risk,scatter,schedule,sensitive,signal,solution,spoil,starve,steer,struggled,suitable,survey,swift,symbol,talent,theory,thrill,treasure,triumph,value,vision,volunteer,wander,wisdom,wit,woe,";
  let fourth = "accurate,address,afford,alert,analyze,ancestor,annual,apparent,appropriate,arena,arrest,ascend,assist,attempt,attentive,attractive,awkward,baggage,basic,benefit,blend,blossom,burrow,calculate,capable,captivity,carefree,century,chamber,circular,coax,column,communicate,competition,complete,concentrate,concern,conclude,confuse,congratulate,considerable,content,contribute,crafty,create,demonstrate,descend,desire,destructive,develop,disaster,disclose,distract,distress,dusk,eager,ease,entertain,entire,entrance,envy,essential,extraordinary,flexible,focus,fragile,frantic,frequent,frontier,furious,generosity,hail,hardship,heroic,host,humble,impact,increase,indicate,inspire,instant,invisible,jagged,lack,limb,limp,manufacture,master,mature,meadow,mistrust,mock,modest,noble,orchard,outstanding,peculiar,peer,permit,plead,plentiful,pointless,portion,practice,precious,prefer,prepare,proceed,queasy,recent,recognize,reduce,release,represent,request,resist,response,reveal,routine,severe,shabby,shallow,sole,source,sturdy,surface,survive,terror,threat,tidy,tour,tradition,tragic,typical,vacant,valiant,variety,vast,venture,weary,";
  console.log("Words have been assigned");
  let words = "NULLL";
switch (grade) {
  case "first":
    words = first.split(",");
    break;
  case "second":
    words = second.split(",");
    break;
  case "third":
    words = third.split(",");
    break;
  case "fourth":
    words = fourth.split(",");
    break;
  default:
    console.log("ERROR");
    break;
}
  console.log("Switch case done, word variable assigned");
 
 // for (let i = 0; i<5;i++) {
    //console.log("ROUND " +(i+1));
FTGameLoop(words);
  //}
}

function FTGameLoop(words) {
  sessionStorage.setItem("FT_Word_Array",JSON.stringify(words));
  //let num = Math.floor(Math.random()*words.length);
  //console.log(num);
let num1,num2,num3,num4;
  let newNums = true;
  while (newNums) {
    num1 = Math.floor(Math.random()*words.length);
    num2 = Math.floor(Math.random()*words.length);
    num3 = Math.floor(Math.random()*words.length);
    num4 = Math.floor(Math.random()*words.length);
    if (num1==num2 || num1==num3 || num1==num4 || num2==num3 || num2==num4 || num3==num4) {
      console.log("REROLLING");
    } else {
      console.log("NUMS FOUND");
      newNums = false;
    }
  }
  let word = words[num1];
  console.log("correct word: "+word);
  sessionStorage.setItem("FT_Word",word);
  let fake1 = words[num2];
  let fake2 = words[num3];
  let fake3 = words[num4];
  console.log("fake words: "+fake1+", "+fake2+", "+fake3);
//initialize the clouds

  let cloud1 = document.getElementById("cloud1");
  cloud1.innerHTML = word;
  let cloud2 = document.getElementById("cloud2");
  cloud2.innerHTML = word;
  let cloud3 = document.getElementById("cloud3");
  cloud3.innerHTML = word;
  let cloud4 = document.getElementById("cloud4");
  cloud4.innerHTML = word;

  switch (Math.floor(Math.random()*4)) {
    case 0:
      console.log("case 0");
      cloud2.innerHTML=fake1;
      cloud3.innerHTML=fake2;
      cloud4.innerHTML=fake3;
      break;
    case 1:
      console.log("case 1");
      cloud1.innerHTML=fake1;
      cloud3.innerHTML=fake2;
      cloud4.innerHTML=fake3;
      break;
    case 2:
      console.log("case 2");
      cloud1.innerHTML=fake1;
      cloud2.innerHTML=fake2;
      cloud4.innerHTML=fake3;
      break;
    case 3:
      console.log("case 3");
      cloud1.innerHTML=fake1;
      cloud2.innerHTML=fake2;
      cloud3.innerHTML=fake3;
      break;
  }
  
//Play word sound
FTPlaySound(word);
  //
 


  
  
}

function FTPlaySound() {
  let audio = new Audio('../FlockTalk/1gradeSounds/' + sessionStorage.getItem('FT_Word') + '.mp3');
  audio.play();
}

function verifyFTAns(cloudID) {
  console.log("VERIFYFTANS running");
  let word = sessionStorage.getItem('FT_Word');
  let cloud = document.getElementById(cloudID);
  console.log(cloud.innerHTML);
  if (cloud.innerHTML == word) {
    console.log("CORRECT");
    let temp = Number (sessionStorage.getItem('Current_User_QuestCoin'));
    console.log(temp);
    temp = temp+100;
    sessionStorage.setItem('Current_User_QuestCoin',temp);
    console.log(sessionStorage.getItem('Current_User_QuestCoin'));
    reloadQCTopBar();
    loadCorrectScreen() 
      
  } else {
    console.log("INCORRECT");
    loadIncorrectScreen();
  }
  FTGameLoop(JSON.parse(sessionStorage.getItem('FT_Word_Array')));//ln 205
}

function loadCorrectScreen() {
  console.log("LOADING CORRECT SCREEN");
  let win = document.createElement("div");
  document.body.appendChild(win);
  win.className = "winScreen";
  win.innerHTML = "CORRECT";
  //win.style.width = "100%";
  //win.style.height = "100%";
 // win.style.backgroundColor = "rgba(0,200,0,0.5)";
  //win.style.display = "block";
}

function loadIncorrectScreen() {
  console.log("LOADING INCORRECT SCREEN");
  let loss = document.createElement("div");
  document.body.appendChild(loss);
  loss.className = "lossScreen";
  loss.innerHTML = "INCORRECT";
}

function newUser() {
  console.log("NEW USR BEING CALLED");
  openPage('Signup');
}

//loadQCTopBar
document.addEventListener('DOMContentLoaded',
  function() {
    console.log(sessionStorage.getItem('Current_User_Unlocked_Profile'));
    let qcTopBar = document.getElementById("questCoin_topBar")
    qcTopBar.innerHTML = sessionStorage.getItem("Current_User_QuestCoin").toString();
    qcTopBar.innerHTML += " QC";
    profileTopBar = document.getElementById('profileTopBar');
    profileTopBar.src = "../Profiles/" + sessionStorage.getItem("profile") + ".png";
  });

function reloadQCTopBar() {
  console.log("RELOADING QC TOP BAR");
  let qcTopBar = document.getElementById("questCoin_topBar");
  qcTopBar.innerHTML = sessionStorage.getItem("Current_User_QuestCoin").toString();
  qcTopBar.innerHTML += " QC";
}


function validateLogin() {
  let loginSuccess = false;
  let userAttempt = document.getElementById("username").value;
  console.log(userAttempt);
  let passAttempt = document.getElementById("password").value;
  console.log(passAttempt);
  //LOAD THE USERS AND PASSWORDS HERE
  fetch("../user-pass.json")
    .then(response => response.json())
    .then(values => values.forEach(value => {
      if (userAttempt == value.username && passAttempt == value.password) {
        console.log("Login validated");
        loginSuccess = true;
        sessionStorage.setItem('Current_User', userAttempt);
        sessionStorage.setItem('Current_Pass', passAttempt);
        sessionStorage.setItem('Current_User_Unlocked_Background', JSON.stringify(value.UnlockedBackgrounds));
        //console.log(JSON.stringify(value.UnlockedProfiles))
        sessionStorage.setItem('Current_User_Unlocked_Profile', JSON.stringify(value.UnlockedProfiles));
        console.log(value.UnlockedBackgrounds);
        console.log(sessionStorage.getItem('Current_User_Unlocked_Background'))
        sessionStorage.setItem('profile', 'Default');
        sessionStorage.setItem('Current_User_Age', value.age);
        sessionStorage.setItem('Current_User_QuestCoin', value.QuestCoin);
        openPage('Home');
      }
    }))// end for each
  if (!loginSuccess) {
    console.log("Login failed");
    //document.getElementById("InvalidLogin").style.display = "block";
   // document.getElementById("InvalidLogin").style.margin = "auto";
  }

  //END LOADING THE USER AND PASSWORDS HERE

}

 class Racer {
    completedRace = false; 
    errorCount = 0;
    typingIndex = 0;
    wordsPerMinute = 0;
    accuracy = 0;
    raceFinishTime = 0;
    time = 0;

    /**
     * Creates a Racer
     * @param {string} name The name of the racer
     * @param {bool} isPlayer If this racer is the current user/player
     */
    constructor(name, isPlayer = false) {
        this.name = name;
        this.isPlayer = isPlayer;
    }
    

    /**
     * Completes the race and calculates all the data for this racer
     * @param {int} raceTime How long the race lasted for this player (measured in centiseconds)
     * @param {string} raceText The text that the user is currently typing for the race
     */
    finishRace(raceTime, raceText) {
      this.raceFinishTime = raceTime / 100; // Convert the centiseconds to seconds
       this.updateStats(raceTime, raceText);
       this.completedRace = true;
    }

    /**
     * Updates and displays the stats for this racer based on the provided credentials
     * @param {int} raceTime The duration of the race
     * @param {string} raceText The text that the user is currently typing for the race
     */
   updateStats(raceTime, raceText) {
     const effectiveTypingIndex = this.typingIndex;
     const totalErrors = Math.min(this.errorCount, raceText.length);
     this.accuracy = Math.round(((raceText.length - totalErrors) / raceText.length) * 100);
     // Convert raceTime (centiseconds) to minutes
     const raceTimeMinutes = raceTime / 6000; 
     // Count the number of spaces typed correctly
     const spacesTyped = raceText.slice(0, effectiveTypingIndex).split(' ').length - 1; 
     // Adjust for initial space
     if (raceText.charAt(0) === ' ') {
       spacesTyped++;
     }
     this.wordsPerMinute = Math.round(Math.abs(((effectiveTypingIndex / 5) - totalErrors) / raceTimeMinutes)); 

      if (this.wordsPerMinute > 90) {
        this.wordsPerMinute = Math.floor(Math.random() * (75 - 60 + 1) + 60);
      }
     
     if (this.isPlayer) {
       document.getElementById("wordsPerMinuteContainer").innerHTML = this.wordsPerMinute;
       document.getElementById("accuracyContainer").innerHTML = this.accuracy;
     }
   }

};

/**
 * Race
 */

const race = {
  active: false,
  time: 0, // How long the race has been going on in centiseconds
  racers: [],
  textToType: "This sentence has no meaning and is here to extend the typing times.",
  /**
   * Updates the text to type container using the Player Racer's current position
   * @param {Racer} playerRacer The player racer that is currently playing
   */
  updateTextToTypeContainer(playerRacer) {
    const textToTypeContainer = document.getElementById("textToTypeContainer");
    textToTypeContainer.innerHTML = `
        <span id="past">${this.textToType.slice(0, playerRacer.typingIndex)}</span>
        <span id="current">${this.textToType.charAt(playerRacer.typingIndex)}</span>
        <span id="future">${this.textToType.slice(playerRacer.typingIndex + 1)}</span>`;
  },
  startRace() {
    this.active = true;
    this.time = 0;
  },
  stopRace() {
    this.active = false;
  }
};

// Initialize the player racer
const playerRacer = new Racer("Player", true);
race.racers.push(playerRacer);

/**
 * When the user presses any key
 */
document.addEventListener("keypress", (event) => {
  if (!race.active) return;

  if (event.key === race.textToType.charAt(playerRacer.typingIndex)) {
    playerRacer.typingIndex++;
    race.updateTextToTypeContainer(playerRacer);

    // Move the swimmer image
    const swimmerFigure = document.getElementById("swimmerFigure");
    const characterWidth = 10; // Approximate width of each character in pixels
    const newLeftPosition = playerRacer.typingIndex * characterWidth; // Update based on typingIndex
    swimmerFigure.style.left = `${newLeftPosition}px`; // Move swimmer figure

    if (playerRacer.typingIndex >= race.textToType.length) {
      playerRacer.finishRace(race.time, race.textToType);
    }
  } else {
    playerRacer.errorCount++;
  }
});

/**
 * Run every 1 centisecond
 */
setInterval(() => {
  if (race.active) race.time++;
}, 10);

/**
 * Live update the player's current stats throughout the race
 * Runs every 1 second
 */
setInterval(() => {
  if (race.active && !playerRacer.completedRace) {
    playerRacer.updateStats(race.time, race.textToType);
  }
}, 1000);

// Initialize
race.updateTextToTypeContainer(playerRacer);


document.getElementById('startRaceButton').addEventListener('click', () => {
    race.startRace(); // Call the start method in your race object
    document.body.style.backgroundImage = "url('../Speech-Beach/beachBackground.jpeg')";
    document.body.style.backgroundSize = "cover";
    race.updateTextToTypeContainer(playerRacer); // Update the display
});