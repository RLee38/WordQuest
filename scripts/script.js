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
  let first = "about,again,air,all,along,also,another,answer,any,are,around,away,because,been,both,carry,change,come,could,do,does,dont,earth,even,every,eye,father,find,four,from,give,good,great,have,head,here,high,is,kind,know,large,learn,light,long,look,many,might,more,most,mother,move,my,near,night,of,off,often,on,one,only,other,our,people,put,right,said,saw,school,should,some,something,the,their,they,thought,through,two,very,walk,want,was,water,were,what,when,where,who,";
  let second = "accident,agree,arrive,astronomy,atlas,attention,award,aware,balance,banner,bare,base,beach,besides,blast,board,bounce,brain,branch,brave,bright,cage,calf,calm,career,center,cheer,chew,claw,clear,cliff,club,collect,connect,core,corner,couple,crowd,curious,damp,dangerous,dash,dawn,deep,demolish,design,discard,dive,dome,doubt,dozen,earth,enemy,evening,exactly,excess,factory,fair,famous,feast,field,finally,flap,float,flood,fold,fresh,frighten,fuel,gap,gaze,gift,gravity,greedy,harm,herd,idea,insect,instrument,invent,island,leader,leap,lizard,local,lonely,luxury,march,mention,motor,nervous,net,nibble,notice,ocean,pack,pale,parade,past,peak,planet,present,proof,reflect,rumor,safe,scholar,seal,search,settle,share,shelter,shiver,shy,skill,slight,smooth,soil,stack,steady,strand,stream,support,team,telescope,tiny,tower,travel,tremble,universe,village,warn,weak,wealthy,whisper,wise,wonder,worry,yard,zigzag,";
  let third = "ability,absorb,accuse,act,active,actual,adopt,advantage,advice,ambition,ancient,approach,arrange,arctic,attitude,attract,average,avoid,bold,border,brief,brilliant,cable,capture,certain,chill,clever,climate,cling,coast,confess,consider,contain,continent,convince,coward,crew,crumple,custom,decay,deed,defend,delicate,device,diagram,digest,disease,distant,doze,drift,elegant,enable,examine,explore,fan,fatal,fierce,flutter,fortunate,frail,gaspglide,globe,grace,gradual,grasp,habit,harsh,imitate,individual,intelligent,intend,journey,launch,limit,locate,loyal,magnificent,marsh,method,misery,moisture,mural,mystify,nation,nectar,nursery,observe,opponent,opposite,ordeal,origin,outcome,passage,pastime,pause,perform,plunge,predator,predict,prevent,primary,privilege,process,rare,rate,recall,rely,remark,resident,respect,responsible,reverse,revive,risk,scatter,schedule,sensitive,signal,solution,spoil,starve,steer,struggled,suitable,survey,swift,symbol,talent,theory,thrill,treasure,triumph,value,vision,volunteer,wander,wisdom,wit,woe,";
  let fourth = "accurate,address,afford,alert,analyze,ancestor,annual,apparent,appropriate,arena,arrest,ascend,assist,attempt,attentive,attractive,awkward,baggage,basic,benefit,blend,blossom,burrow,calculate,capable,captivity,carefree,century,chamber,circular,coax,column,communicate,competition,complete,concentrate,concern,conclude,confuse,congratulate,considerable,content,contribute,crafty,create,demonstrate,descend,desire,destructive,develop,disaster,disclose,distract,distress,dusk,eager,ease,entertain,entire,entrance,envy,essential,extraordinary,flexible,focus,fragile,frantic,frequent,frontier,furious,generosity,hail,hardship,heroic,host,humble,impact,increase,indicate,inspire,instant,invisible,jagged,lack,limb,limp,manufacture,master,mature,meadow,mistrust,mock,modest,noble,orchard,outstanding,peculiar,peer,permit,plead,plentiful,pointless,portion,practice,precious,prefer,prepare,proceed,queasy,recent,recognize,reduce,release,represent,request,resist,response,reveal,routine,severe,shabby,shallow,sole,source,sturdy,surface,survive,terror,threat,tidy,tour,tradition,tragic,typical,vacant,valiant,variety,vast,venture,weary,";
  console.log("Words have been assigned");
  let words = "NULLL";
switch (grade) {
  case "first":
    words = first.split(",");
    break;
  case second:
    words = second.split(",");
    break;
  case third:
    words = third.split(",");
    break;
  case fourth:
    words = fourth.split(",");
    break;
  default:
    console.log("ERROR");
    break;
}
  console.log("Switch case done, word variable assigned");
 
  while (true) {
FTGameLoop(words);
  }
}

function FTGameLoop(words) {
  let word = words[Math.random()*words.length];
  //set the 5 boxes 
  setTimeout(FTPlaySound(word),1000);
}

function FTPlaySound(word) {
  let Audio = new Audio("../FlockTalk/Sounds/" + word + ".mp3");
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
    document.getElementById("InvalidLogin").style.display = "block";
    document.getElementById("InvalidLogin").style.margin = "auto";
  }

  //END LOADING THE USER AND PASSWORDS HERE

}




