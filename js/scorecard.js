//variables
var screenWidth = 0;
var b1, b2, b3, home;
var homeCount=0;
var guestCount=0;
var i=0;
var homesruns = 0;
var guestsruns = 0;
var outs = 0;
var entry=1;
var balls=0;
var strikes=0;
var gameEnd=false;
var homeFirstTurn=true;


var teamNames=
    {
        home: match.home.name,
        guest:match.guest.name,//gests
    };

var homePlayers = match.home.players;

var guestPlayers= match.guest.players;

var players;

var bases =
[
    {
        id: 0,
        name: "Home",
        player: null,
        status : 0
    },
    {
        id: 1,
        name: "Base 1",
        player: null,
        status : 0
    },
    {
        id: 2,
        name: "Base 2",
        player: null,
        status : 0
    },
    {
        id: 3,
        name: "Base 3",
        player: null,
        status : 0
    }
];
var score = [
	{
		'bases' : bases
	},
	{
		runs: {
			'home' : homesruns,
			'guest' : guestsruns
		}
		
	}
]

//init
function init() {
	console.log('Initializing page...');

	//draw field
	drawField();
}


function game()
{
    setField();

    document.getElementById('guestteamname').innerHTML=teamNames.guest;
    document.getElementById('hometeamname').innerHTML=teamNames.home;
    document.getElementById('entryscore').innerHTML=entry;
    document.getElementById('flyoutButton').style.display='unset';
    var hometext = document.getElementById('b0name');
    var mainButton = document.getElementById('mainButton');
    bases[0].player = players[i];
    mainButton.setAttribute('onclick', 'ballInGame()');
	hometext.innerHTML = bases[0].player.name;
	home = bases[0].player.name;
    for(var v = 0; v < 4; v++)
    {
        var base = document.getElementById('dialog'+v);
        base.setAttribute('onclick','out('+v+')');
        var cancel = document.getElementById('cancel'+v);
        cancel.setAttribute('onclick','out('+v+')');
    }

    enableButton();
	dueUp();
}
function strike()
{

    if(strikes<2)
    {
        strikes++;
    }
    else
    {
        bases[0].player= null;
        strikes=0;
        out();
        nextBatter();
        if(gameEnd!=true)
        {
            dueUp();
        }
    }
    setScores();
    console.log('st: ' + strikes);
    //action(bases[0].player.id, 'st');
}
function baseOut(v){
    console.log('BaseOut');
    bases[v].player = null;
    document.getElementById('b'+v+'name').innerHTML = '';
    resetAllBases();
    out();
    for(var i = 0; i < 4 ; i++){
        document.getElementById('dialog'+i).setAttribute('onclick','');
    }
}

function out()
{
    if(outs<2)
    {
        outs++;
    }
    else
    {
        if(entry < 9){
            outs=0;
            entry++;
            setField();
        }else{
            gameEnd=true;
            disableAll();
            endGame();
        }
       
    }
    putNames();
    setScores();
}

function disableAll()
{
    console.log(1);
    document.getElementById('mainButton').setAttribute('class','mainButtonDisabled');
    document.getElementById('mainButton').setAttribute('onclick','');
    console.log(2);
    for(var i=0; i<4;i++)
    {
        bases[i].player=null;
    }
    console.log(3);
    outs=0;
    disableButton();
    setScores();
    putNames();
    resetAllBases();
    console.log(4);
}


function setScores()
{
    document.getElementById('entryscore').innerHTML=entry;

    //outs
    if(outs!=0)
    {
        for(var i=1; i<outs+1; i++)
        {
            document.getElementById('O'+i).setAttribute('class', 'spacerOn');
        }
    }
    else
    {
        for(var i=1; i<3; i++)
        {
            document.getElementById('O'+i).setAttribute('class', 'spacer');
        }
    }
    //strikes
    if(strikes!=0)
    {
        for(var i=1; i<strikes+1; i++)
        {
            document.getElementById('st'+i).setAttribute('class', 'spacerOn');
        }
    }
    else
    {
        for(var i=1; i<3; i++)
        {
            document.getElementById('st'+i).setAttribute('class', 'spacer');
        }
    }
    //balls
    if(balls!=0)
    {
        for(var i=1; i<balls+1; i++)
        {
            document.getElementById('ba'+i).setAttribute('class', 'spacerOn');
        }
    }
    else
    {
        for(var i=1; i<4; i++)
        {
            document.getElementById('ba'+i).setAttribute('class', 'spacer');
        }
    }
}
function dueUp()
{
    var a = i;

    console.log('DueUp+');
    console.log('cont ' + i);

    for(var b = 1; b<3; b++)
    {
        var c = a+b;
        
        if(c>8) c-=9;

    document.getElementById('dueUp'+b).innerHTML=players[c].name + ' - ' + players[c].number;
    }
}
function endGame(){
    resetAllBases();
    
    var winner;
    if(homesruns>guestsruns)    winner = 0; //gana home
    if(homesruns<guestsruns)    winner = 1; //gana guest
    if(homesruns==guestsruns)   winner = 2; //empates


    sessionStorage.home=teamNames.home;
    sessionStorage.guest=teamNames.guest;
    sessionStorage.winner=winner;
    window.location='winScreen.html';

}
function ball()
{
    if(balls<3)
    {
        balls++;
    }
    else
    {
        balls=0;
        strikes = 0;
        baseOnball();
        nextBatter();
    }
    setScores();
    console.log('b: ' + balls);
    //action(fieldPlayers.pitcher, 'B');
}

function baseOnball()
{
    if(bases[1].player==null)
    {
        bases[1].player=bases[0].player;
        bases[0].player=null;
    }
    else
    {
        if(bases[2].player==null)
        {
            bases[2].player=bases[1].player;
            bases[1].player=bases[0].player;
            bases[0].player=null;
        }
        else
        {
            if(bases[3].player==null)
            {
                bases[3].player=bases[2].player;
                bases[2].player=bases[1].player;
                bases[1].player=bases[0].player;
                bases[0].player=null;
            }
            else
            {
                run();
                bases[3].player=bases[2].player;
                bases[2].player=bases[1].player;
                bases[1].player=bases[0].player;
                bases[0].player=null;
            }
        }
    }

    putNames();

}
function putNames()
{
    for(var i=0; i<4;i++)
    {
        if(bases[i].player!=null)
        {
            document.getElementById('b'+i+'name').innerHTML=bases[i].player.name;
        }
    }
}
function setField()
{

    resetAllBases();

    if(entry%2==0) //es par??
    {
        // es par, juega home
        guestCount = i;
        i = homeCount;
        players = homePlayers;
        document.getElementById('hometeamname').setAttribute('class','teamPlaying');
        document.getElementById('guestteamname').setAttribute('class','teamname');
    }
    else //no es par, juega guest
    {
        homeCount = i;
        i = guestCount;
        players = guestPlayers;
        document.getElementById('guestteamname').setAttribute('class','teamPlaying');
        document.getElementById('hometeamname').setAttribute('class','teamname');
    }
    for(var b=0; b<4;b++)
    {
        document.getElementById('b'+b+'name').innerHTML='';
        bases[b].player=null;
    }

    document.getElementById("guestteamscore").innerHTML=guestsruns;
    document.getElementById("hometeamscore").innerHTML=homesruns;

    setScores();
}

var data = [
    {
        'matId': 1,
        'dmtEntry':entry,
        'dmtBatter': bases[0].status,
        'dmtBalls':balls,
        'dmtStrikes':strikes,
        'dmtOuts':outs,
        'dmtRunsHomeTeam':homesruns,
        'dmtRunsGuestTeam':guestsruns,
        'dmtBase1':bases[1].status,
        'dmtBase2':bases[2].status,
        'dmtBase3':bases[3].status
    }
]

function ballInGame()
{
    mainButton.setAttribute('onclick', 'nextBatter()');
    mainButton.innerHTML='Next Batter';
    strikes=0;
    balls=0;
    PlayerRun(0);
    setScores();
    disableButton();
    resetStatus();
    data = 
        {
            'matId': 1,
            'dmtEntry':entry,
            'dmtBatter': bases[0].status,
            'dmtBalls':balls,
            'dmtStrikes':strikes,
            'dmtOuts':outs,
            'dmtRunsHomeTeam':homesruns,
            'dmtRunsGuestTeam':guestsruns,
            'dmtBase1':bases[1].status,
            'dmtBase2':bases[2].status,
            'dmtBase3':bases[3].status
        }
}
function disableButton(){
    document.getElementById('homeRunButton').setAttribute('class','hrDisabled');
    document.getElementById('strike').setAttribute('class','disabledButn');
    document.getElementById('ball').setAttribute('class','disabledButn');
    document.getElementById('flyoutButton').setAttribute('class','disabledButn');
    document.getElementById('flyoutButton').setAttribute('onclick','');
	//document.getElementById('groundButton').setAttribute('onclick','');
    document.getElementById('strike').setAttribute('onclick','');
    document.getElementById('ball').setAttribute('onclick','');
    document.getElementById('homeRunButton').setAttribute('onclick','');
}

function enableButton(){
    document.getElementById('homeRunButton').setAttribute('class','hrButton');
    document.getElementById('strike').setAttribute('class','button');
    document.getElementById('ball').setAttribute('class','button');
    document.getElementById('flyoutButton').setAttribute('class','button');
    document.getElementById('flyoutButton').setAttribute('onclick','flyout()');
	//document.getElementById('groundButton').setAttribute('onclick','groundOut()');
    document.getElementById('strike').setAttribute('onclick','strike()');
    document.getElementById('ball').setAttribute('onclick','ball()');
    document.getElementById('homeRunButton').setAttribute('onclick','homeRun()')
}

function nextBatter()
{
    resetAllBases();
    if(bases[0].player==null)
    {
        console.log('a');
        if(i<8)
        i++;
        else
        i=0;
        if(entry==2 & homeFirstTurn)
        {
            i=0;
            homeFirstTurn = false;
        }
    bases[0].player = players[i];
    document.getElementById('b0name').innerHTML=players[i].name;
    mainButton.innerHTML='Ball in Play';
    mainButton.setAttribute('onclick', 'ballInGame()')
    }
    else
    {
        console.log('b');
        PlayerRun(0);
    }
    enableButton();
    dueUp();
    
}

function run()
{
    if(entry%2==0) //es par??
    {
        // es par, juega home
        homesruns++;
    }
    else //no es par, juega guest
    {
        guestsruns++;
    }

    document.getElementById("guestteamscore").innerHTML=guestsruns;
    document.getElementById("hometeamscore").innerHTML=homesruns;

}

function flyout(){
    var ent = entry;
    bases[0].player=null;
    document.getElementById('b0name').innerHTML='';
    strikes=0;
    balls=0;
    out();
    nextBatter();
}
/*
function groundOut(){
    document.getElementById('flyoutDialog').style.display = 'none';
    document.getElementById('groundDialog').style.display = 'block';
    document.getElementById('checkButton').setAttribute('onclick','groundOutProcede()');
}

function groundOutProcede(){
    var general = '';
    
    for(var i = 1; i <= 4; i++){
        if(document.getElementById('B'+i).checked == true){
            general = general + 'B'+i;
        }
    }
    console.log(general);
    document.getElementById('groundDialog').style.display = 'none';
    document.getElementById('flyoutButton').style.display = 'none';
    document.getElementById('groundButton').style.display = 'none';
    outs = outs + 1;
    console.log(outs);
    bases[0].player = null;
    document.getElementById('b0name').innerHTML = '';
    resetAllBases();
}
function flyoutProcede(){
    
    var selected = document.getElementById('flyoutSelect');
    var strBase = selected.options[selected.selectedIndex].text;
    console.log(strBase);
    document.getElementById('flyoutDialog').style.display = 'none';
    document.getElementById('flyoutButton').style.display = 'none';
    document.getElementById('groundButton').style.display = 'none';
    resetAllBases();
    nextBatter();
    outs = outs + 1;
    console.log(outs);
    bases[0].player = null;
    document.getElementById('b0name').innerHTML = '';
    resetAllBases();
    //this will "kill" everybody and add an out for every player on the field
}
*/
function getPlayer(a, b)
{
    var from = document.getElementById('b' + a+'name');
    var to = document.getElementById('b' + b+'name');
 
    if(b!=0)
    {
    bases[b].player = bases[a].player;
    bases[a].player = null;
    from.innerHTML = '';
    to.innerHTML = bases[b].player.name;
    }
    else
    {
        bases[a].player = null;
        from.innerHTML = '';
        run();
        //action(bases[a].player.id, 'R');
    }

    resetAllBases();
    disableButton();
}

function resetAllBases()
{
    for(var b=0; b<4; b++)
    {
		var base = document.getElementById('B' + b);
        base.setAttribute('style','cursor: unset;');
        base.setAttribute('class','base');
        base.setAttribute('onclick','');

        if(bases[b].player != null)
        {
            base.setAttribute('onclick','PlayerRun(' + b + ')');
            base.setAttribute('style','cursor: pointer;');
        }
        
    }

    for(var b=0; b<4; b++)
    {
        document.getElementById('dialog'+b).style.display = 'none';
        document.getElementById('cancel'+b).style.display = 'none';

    }
}
function canGetOut(a)
{
    if(outs<2)
    {
        var label=document.getElementById('b'+a+'name');
        label.innerHTML='';
        bases[a].player=null;
        outs++;
        resetAllBases();
    }
    else
    {
        outs=0;
        entry++;
        setField();
        nextBatter();
    }

}

function homeRun(){
    resetAllBases();
    if(bases[0].player != null){
        for(var i = 0; i < 4; i++){
            if(bases[i].player != null){
                //action(bases[i].player.id, 'R');
                bases[i].player = null;
                document.getElementById('b'+i+'name').innerHTML = "";
                run();
            }
        }
        nextBatter();
    }
}
function resetStatus(){
    for(var i = 0; i < 4; i++){
        if(bases[i].player == null){
            bases[i].status = 0;
        }else{
            bases[i].status = 1;
        }
    }
}
function PlayerRun(a)
{
    resetAllBases();

        for(var b=a+1; b<5; b++)
        {
            if(b<4)
            {
                var base = document.getElementById('B' + b);
                if(bases[b].player == null)
                {
                    base.setAttribute('class','freeBase');
                    var d=document.getElementById('dialog'+b);
                    var c=document.getElementById('cancel'+b);

                    
                    c.style.display = 'block';
                    c.setAttribute('onclick', 'baseOut('+a+')');
                    d.style.display = 'block';
                    d.setAttribute('onclick', 'baseOut('+a+')');

                    base.setAttribute('onclick','getPlayer(' + a + ',' + b + ')');
                    base.setAttribute('style','cursor: pointer;');
                    
                }
                else
                {
                    
                    for(var d=b; d<4; d++)
                    {
                        var base = document.getElementById('B' + d);
                        base.setAttribute('class','unavBase');
                    }
                    break;
                }
            }
            else
            {
                var d=document.getElementById('dialog0');
                var c=document.getElementById('cancel0');
                
                c.style.display = 'block';
                c.setAttribute('onclick', 'baseOut('+a+')');
                d.style.display = 'block';
                d.setAttribute('onclick', 'baseOut('+a+')');

                var base = document.getElementById('B0');
                base.setAttribute('class','freeBase');
                base.setAttribute('onclick','getPlayer('+ a + ',0)');
                base.setAttribute('style','cursor: pointer;');
                
            }
        }
        
        if(a==0)
        {
            var base = document.getElementById('B0');
            if(document.getElementById('mainButton').innerHTML == 'Ball in Play')
            {
            resetAllBases();
            enableButton();
            }
        }
        else
        {
            disableButton();
        }
}