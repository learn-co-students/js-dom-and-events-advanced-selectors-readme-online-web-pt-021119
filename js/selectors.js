// declare your functions here...
$(document).ready(function(){
	paragraphSelector()
})

function paragraphSelector(){
	return $('p')
}

function lastImageSelector(){
	return $('img').last()
}

function ninjaBabySelector(){
	return $('#baby-ninja').last()
}

function divSelector(){
	return $('div.pics')
}

function firstListItem(){
	return $('#pic-list').first()
}