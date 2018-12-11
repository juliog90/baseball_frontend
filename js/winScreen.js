function init() {
	console.log('Initializing page...');

    //draw field
    
    var winString;

    console.log(sessionStorage.winner);

        if(sessionStorage.winner != 2)
        {
            if(sessionStorage.winner<1)
                winString = sessionStorage.home;
            else
                winString = sessionStorage.guest;

            winString = winString + ' wins!';
        }
        else
        winString = 'Draw game';

    console.log(winString);

	document.getElementById('winTitle').innerHTML=winString;
}

function backToMenu()
{
    sessionStorage.clear();
    window.location='logMatch.html';
}