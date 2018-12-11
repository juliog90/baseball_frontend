var dailyMatches = [
    {
        'id' : 0,
        'home' : 'Casa 1',
        'guest' : 'Visitantes 1'
        
    },
    {
        'id' : 1,
        'home' : 'Casa 2',
        'guest' : 'Visitantes 2'
        
    },
    {
        'id' : 2,
        'home' : 'Casa 3',
        'guest' : 'Visitantes 3'
        
    },
    {
        'id' : 3,
        'home' : 'Casa 4',
        'guest' : 'Visitantes 4'
        
    },
    {
        'id' : 5,
        'home' : 'Casa 4',
        'guest' : 'Visitantes 4'
        
    },
    {
        'id' : 6,
        'home' : 'Casa 4',
        'guest' : 'Visitantes 4'
        
    },
    {
        'id' : 7,
        'home' : 'Casa 4',
        'guest' : 'Visitantes 4'
        
    },
    {
        'id' : 8,
        'home' : 'Casa 4',
        'guest' : 'Visitantes 4'
        
    },
    {
        'id' : 9,
        'home' : 'Casa 4',
        'guest' : 'Visitantes 4'
        
    },
]
function init(){
    var svg = document.getElementById('svgParent');
    var porcantaje = 95 / dailyMatches.length;
    writeText(svg, new Point('30%','3%'),'Choose an option','title');
    for(var i = 0; i < dailyMatches.length; i++){
        writeText(svg, new Point('15%',+porcantaje * i+'15%'), dailyMatches[i].home+' vs '+dailyMatches[i].guest,'matcheslist',dailyMatches[i].id);
    }
    
}