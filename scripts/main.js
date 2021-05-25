

var arr_size = document.getElementById('array-size'),array_size = arr_size.value;
var arr_generate = document.getElementById('array-generater');
var arr_speed = document.getElementById('array-speed');


var button_algos = document.querySelectorAll('.algos button');

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById('array-container');
cont.style = 'flex-direction:row';


// Array generation and Updation using Event Listener.

arr_generate.addEventListener("click",generate_array);
arr_size.addEventListener("input",update_array_size);

//Generating Array
function generate_array()
{
	cont.innerHTML = "";

	for(var i = 0 ; i < array_size ; i++)
	{
		div_sizes[i] = Math.floor(Math.random() * 3.0 * (arr_size.max - arr_size.min) ) + 10;
		divs[i] = document.createElement("div");
		cont.appendChild(divs[i]);
		margin_size = 0.1;
		divs[i].style = "margin:0%" + margin_size + "%; background-color:#ff9900;width:" + (100/array_size - ( 2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";	
	}
}

//Udating Array

function update_array_size()
{
	array_size = arr_size.value;
	generate_array();
}

window.onload = update_array_size();


//Running Algorithm
for(var i = 0 ; i < button_algos.length ; i++)
{
	button_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
	for(var i = 0 ; i < button_algos.length ; i++)
	{
		button_algos[i].classList = [];
		button_algos[i].classList.add("button_locked");

		button_algos[i].disabled = true;
		arr_size.disabled = true;
		arr_generate.disabled = true;
		arr_speed.disabled = true;
	}
}

function runalgo()
{
	disable_buttons();

	this.classList.add('button_selected');
	switch(this.innerHTML)
	{
		case "Bubble" : 	Bubble_sort();
						 	break;
		case "Selection" : 	Selection_sort();
							break;
		case "Insertion" : 	Insertion_sort();
							break;
		case "Merge" : 		Merge_sort();
							break;
		case "Quick" : 		Quick_sort();
							break;
		case "Heap" : 		Heap_sort();
							break;
	}
}