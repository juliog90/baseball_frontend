//create Point Class
function Point(x, y) {
	if (typeof x !== 'undefined') this.x = x;
	if (typeof y !== 'undefined') this.y = y;
}

//create Size Class
function Size(width, height) {
	if (typeof width !== 'undefined') this.width = width;
	if (typeof height !== 'undefined') this.height = height;
}

//draw line
function drawLine(svgParent, startPoint, endPoint, cssClass, id) {
	//create element
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	//start point
	line.setAttribute('x1', startPoint.x);
	line.setAttribute('y1', startPoint.y);
	//end point
	line.setAttribute('x2', endPoint.x);
	line.setAttribute('y2', endPoint.y);
	//class
	line.setAttribute('class', cssClass);
	//id
	line.setAttribute('id',id);
	//add to parent
	svgParent.appendChild(line);
}

//draw rectangle
function drawRectangle(svgParent, startPoint, size, cssClass, id) {
	//create element
	var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	//start point
	rect.setAttribute('x', startPoint.x);
	rect.setAttribute('y', startPoint.y);
	//size
	rect.setAttribute('width', size.width);
	rect.setAttribute('height', size.height);
	//class
	rect.setAttribute('class', cssClass);
	//id
	rect.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(rect);
}

//write text
function writeText(svgParent, startPoint, innerText, cssClass, id) {
	//create element
	var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	//start point
	text.setAttribute('x', startPoint.x);
	text.setAttribute('y', startPoint.y);
	//inner text
	text.innerHTML = innerText;
	//class
	text.setAttribute('class', cssClass);
	//id
	if (typeof id !== 'undefined') text.setAttribute('id', id);
	//add to parent
	svgParent.appendChild(text);
}

//draw circle
function drawCircle(svgParent, center, radius, cssClass, id) {
	//create element
	var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	//center point
	c.setAttribute('cx',center.x);
	c.setAttribute('cy', center.y);
	//radius
	c.setAttribute('r', radius);
	//class
	c.setAttribute('class', cssClass);
	//id
	c.setAttribute('id',id);
	//add to parent
	svgParent.appendChild(c);
}

//draw path
function drawPath(svgParent, id, path, cssClass, onClickEvent)
{
	var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	if (id != null) p.setAttribute('id', id);
	p.setAttribute('d', path);
	p.setAttribute('class', cssClass);
	p.setAttribute('onclick', onClickEvent);
	svgParent.appendChild(p);
}