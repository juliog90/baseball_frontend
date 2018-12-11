
var players=
[
    {
        name: "John Smith"
    },
    {
        name: "Mary Jane"
    },
    {
        name: "Peter Parker"
    },
    {
        name: "Josh Nicoles"
    },
    {
        name: "Nicolas Tesla"
    },
    {
        name: "George Washington"
    },
    {
        name: "Freddy Mercury"
    },
    {
        name: "Daniel Torres"
    },
    {
        name: "Pues yo"
    }
];


var bases =
[
    {
        id: 0,
        name: "Home",
        player: null,
        
    },
    {
        id: 1,
        name: "Base 1",
        player: null,
        
    },
    {
        id: 2,
        name: "Base 2",
        player: null,
        
    },
    {
        id: 3,
        name: "Base 3",
        player: null,
        
    }
];

var i=0;
var runs = 0;
var outs = 0;
function game()
{
    document.getElementById("runs").innerHTML=runs;
    var home = document.getElementById('b0');
    var mainButton = document.getElementById('mainButton');
    bases[0].player = players[i];

    mainButton.innerHTML='ball in game';
    mainButton.setAttribute('onclick', 'ballInGame()')
    home.innerHTML = bases[0].player.name;
    document.getElementById('flyoutButton').setAttribute('onclick','flyout()');
    document.getElementById('groundButton').setAttribute('onclick','groundOut()');

}

function flyout(){
    document.getElementById('groundDialog').style.display = 'none';
    document.getElementById('flyoutDialog').style.display = 'block';
    document.getElementById('selectButton').setAttribute('onclick','flyoutProcede()');

}
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
    //this will "kill" everybody and add an out for every player on the field
}
function ballInGame()
{
    mainButton.setAttribute('onclick', 'nextBatter()')
    mainButton.innerHTML='next batter';
    document.getElementById('flyoutButton').style.display = 'block';
    document.getElementById('groundButton').style.display = 'block';
    PlayerRun(0);
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
    bases[0].player = players[i];
    document.getElementById('b0').innerHTML=players[i].name;
    mainButton.innerHTML='ball in game';
    mainButton.setAttribute('onclick', 'ballInGame()')
    }
    else
    {
        console.log('b');
        PlayerRun(0);
    }
}

function getPlayer(a, b)
{
    var from = document.getElementById('b' + a);
    var to = document.getElementById('b' + b);

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
        runs++;
        document.getElementById("runs").innerHTML=runs;
        console.log(runs);
    }

    resetAllBases();
}

function resetAllBases()
{
    for(var b=0; b<4; b++)
    {
        var base = document.getElementById('b' + b);
        base.setAttribute('class','base');
        base.setAttribute('style','cursor: unset;');
        base.setAttribute('onclick','');

        if(bases[b].player != null)
        {
            base.setAttribute('onclick','PlayerRun(' + b + ')');
            base.setAttribute('style','cursor: pointer;');
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
                var base = document.getElementById('b' + b);
                if(bases[b].player == null)
                {
                    base.setAttribute('class','freeBase');
                    base.setAttribute('onclick','getPlayer(' + a + ',' + b + ')');
                    base.setAttribute('style','cursor: pointer;');
                }
                else
                {
                    for(var d=b; d<4; d++)
                    {
                        var base = document.getElementById('b' + d);
                        base.setAttribute('class','unavBase');
                    }
                    break;
                }
            }
            else
            {
                var base = document.getElementById('b0');
                base.setAttribute('class','freeBase');
                base.setAttribute('onclick','getPlayer('+ a + ',0)');
                base.setAttribute('style','cursor: pointer;');
            }
        }
}