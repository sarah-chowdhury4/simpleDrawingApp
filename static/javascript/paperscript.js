function sliderVal() {
	var val = document.getElementById("stroke-width").value;
	document.getElementById("size").innerHTML = "Size: " + val
}
document.getElementById("stroke-width").oninput = function() {sliderVal()};
window.onload = sliderVal();


function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeCap = 'round';
	var color = document.getElementById("colorPicker").value;
	myPath.strokeColor = color;
	var val = document.getElementById("stroke-width").value;
	myPath.strokeWidth = val;
	console.log('You pressed the mouse!');
}

function onMouseDrag(event) {
	myPath.add(event.point);
	myPath.smooth({ type: 'continuous' });
	console.log('You dragged the mouse!');
}

function onMouseUp(event) {
	console.log('You released the mouse!');
}

