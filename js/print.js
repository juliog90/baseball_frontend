//draw field
function drawField() {
	console.log('Drawing field...');
	//get screen width
	screenWidth = window.innerWidth;
	//set field height and width
	if (document.getElementById('field') != null) document.getElementById('field').style.height = screenWidth + 'px';
	//get field svg
	var svgParent = document.getElementById('svgfield');
	//empty svg	
	svgParent.innerHTML = '';
	//convert percentage to pixels
	var p = screenWidth / 104;
	//diamond
	
	var pathDiamond = 'M' + (p * 50) + ',' + (p * 95) + ' L' + (p * 5) + ',' + (p * 50)	+ ' A' + (p * 40) + ',' + (p * 38) + ' 1 0,1 ' + (p * 95) + ',' + (p * 50) + ' Z';
	drawPath(svgParent, null, pathDiamond, 'diamond');
	//infield
	var pathInfield = 'M' + (p * 25) + ',' + (p * 60) + ' L' + (p * 50) + ',' + (p * 35) + ' L' + (p * 75)  + ',' + (p * 60) + ' L' + (p * 50) + ',' + (p * 85)	+ ' Z';
	drawPath(svgParent, null, pathInfield, 'infield');
	//home circle
	var homeCenter = new Point(p * 50, p * 83);
	drawCircle(svgParent, homeCenter, (p * 12), 'diamond');
    //pitchers mound
	var homeCenter = new Point(p * 50, p * 60);
	drawCircle(svgParent, homeCenter, (p * 6), 'diamond');
	//homeplate
    var pathHome = 'M' + (p * 50) + ',' + (p * 89)+ ' L' + (p * 46) + ',' + (p * 85) + ' L' + (p * 46) + ',' + (p * 79) + ' L' + (p * 54) + ',' + (p * 79) + ' L' + (p * 54) + ',' + (p * 85) + ' Z';
    drawCircle(svgParent, new Point(p * 50, p * 72),'20px','cancel','dialog0');
    drawLine(svgParent, new Point(p * 45, p * 70), new Point(p * 55, p * 73),'cancel','cancel0');
	drawPath(svgParent, 'B0', pathHome, 'base');
	//bases
	var pathFirstBase = 'M' + (p * 71) + ',' + (p * 52) + 'L' + (p * 79) + ',' + (p * 44) + 'L' + (p * 87) + ',' + (p * 52)	+ 'L' + (p * 79) + ',' + (p * 60) + ' Z';
    drawPath(svgParent, 'B1', pathFirstBase, 'base');
    drawCircle(svgParent, new Point(p * 80, p * 38),'20px','cancel','dialog1');
    drawLine(svgParent, new Point(p * 75, p * 36), new Point(p * 85, p * 39),'cancel','cancel1');
	var pathSecondBase = 'M' + (p * 42) + ',' + (p * 23) + 'L' + (p * 50) + ',' + (p * 15) + 'L' + (p * 58) + ',' + (p * 23) + 'L' + (p * 50) + ',' + (p * 31) + ' Z';
    drawPath(svgParent, 'B2', pathSecondBase, 'base');
    
    drawCircle(svgParent, new Point(p * 50, p * 11),'20px','cancel','dialog2');
    drawLine(svgParent, new Point(p * 45, p * 9), new Point(p * 55, p * 12),'cancel','cancel2');
	var pathThirdBase = 'M' + (p * 13) + ',' + (p * 52) + 'L' + (p * 21) + ',' + (p * 44) + 'L' + (p * 29) + ',' + (p * 52) + 'L' + (p * 21) + ',' + (p * 60) + ' Z';
    drawPath(svgParent, 'B3', pathThirdBase, 'base');
    drawCircle(svgParent, new Point(p * 20, p * 38),'20px','cancel','dialog3');
    drawLine(svgParent, new Point(p * 15, p * 36), new Point(p * 25, p * 39),'cancel','cancel3');
	//base lines
    drawLine(svgParent, new Point(p * 0, p * 39), new Point(p * 50, p * 89), 'baseline');
    drawLine(svgParent, new Point(p * 100, p * 39), new Point(p * 50, p * 89), 'baseline');
    
    writeText(svgParent,new Point(p * 50, p * 85), '','playerName','b0name');
    writeText(svgParent,new Point(p * 71, p * 52), '','playerName','b1name');
    writeText(svgParent,new Point(p * 42, p * 23), '','playerName','b2name');
	writeText(svgParent,new Point(p * 13, p * 52), '','playerName','b3name');

    game();
}
