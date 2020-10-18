
var theInput = document.getElementById("colorPicker");
var theColor = theInput.value;
theInput.addEventListener("input", function() {

theColor = theInput.value;

}, false);

document.getElementById("sizePicker").addEventListener("submit", makeGrid);

function makeGrid() {

event.preventDefault()

var inputHeight = document.getElementById("inputHeight").value;
var inputWidth = document.getElementById("inputWidth").value;

var grid = document.getElementById("pixelCanvas");

grid.innerHTML = "";

for(var r = 0; r<inputHeight; r++)
{
	var tr = grid.appendChild(document.createElement('tr'));

	for(var c = 0; c<inputWidth; c++)
	{
		var cell = tr.appendChild(document.createElement('td'));
		cell.addEventListener('click',(function(el){
                return function(){
                    changeColor(el);
                }
            })(cell),false);
	}
}

}

function changeColor(cell){
	cell.style.backgroundColor = theColor; 	
}

