


var speed = 1000;
arr_speed.addEventListener("input",visualize_speed);


function visualize_speed()
{
	var pace = arr_speed.value;
	switch(parseInt(pace)) 
	{
		case 1: 	speed = 1;
					break;
		case 2: 	speed = 30;
					break;
		case 3: 	speed = 50;
					break;
		case 4: 	speed = 100;
					break;
		case 5: 	speed = 1000;
					break;
		case 6: 	speed = 10000;
					break;
		case 7: 	speed = 100000;
					break;
		case 8: 	speed = 1000000;
					break;
	}

	delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}


var delay_time = 10000 / (Math.floor(array_size / 10) * speed);
var c_delay = 0;


function div_update(cont , height , color)
{
	window.setTimeout(function(){
		cont.style = "margin:0%" + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
	}, c_delay += delay_time);
}


function enable_buttons()
{
	window.setTimeout(function(){
		for(var i = 0 ; i < button_algos.length ; i++)
		{
			button_algos[i].classList = [];
			button_algos[i].classList.add("button_unselected");

			button_algos[i].disabled = false;
			arr_size.disabled = false;
			arr_generate.disabled = false;
			arr_speed.disabled = false;
		}
	},c_delay += delay_time);
}