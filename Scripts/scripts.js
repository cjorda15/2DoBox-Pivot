var data = [];

$(document).ready(function(){
	getIdea();
	printIdea();
})

$("#submit").on('click', function(e){
	e.preventDefault();
	var storeIdeaTitle = $('#title-input').val();
	var storeIdeaContent = $('#content-input').val();
	var card = new Card(storeIdeaTitle, storeIdeaContent);
	data.unshift(card);
	storeIdea();
	printIdea();
	// console.log(card.id);
})

function Card(storeIdeaTitle, storeIdeaContent) {
	this.title = storeIdeaTitle;
	this.body = storeIdeaContent;
	this.quality = "swill";
	this.id = Date.now();
}

function storeIdea(){
	var stringData = JSON.stringify(data);
	localStorage.setItem("Data Item", stringData);
}

function getIdea(){
	var storedData = localStorage.getItem("Data Item") || '[]';
	var parsedData = JSON.parse(storedData);
	data = parsedData;
}

function printIdea(){
$("#card-section").empty();
data.forEach(function(object) {
	 	$("#card-section").append(`
			<div id="${object.id}" class="new-idea">
				<header>
					<h1 class="entry-title">${object.title}</h1>
					<ul>
						<li class="clear"></li>
					</ul>
				</header>
				<article>
					<p>${object.body}</p>
					<h3>quality:<h4 class="quality">${object.quality}</h4></h3>
					<button class="upvote"></button>
					<button class="downvote"></button>
				</article>
				<hr>
			</div>`);
	});
}

$("#card-section").on('click','.upvote', function() {
		var qualityVar = $(this).siblings(".quality").text();
		if($(this).siblings(".quality").text() === "swill") {
			$(this).siblings(".quality").text("plausible");
			qualityVar = "plausible";
		} else if ($(this).siblings(".quality").text() === "plausible") {
			$(this).siblings(".quality").text("genius");
			qualityVar = "genius"
		}
		editIdea(this, qualityVar);
});


function editIdea(location, qualityVar){
	//grab the objectId of the item you are editing
	var objectId = $(location).parent().parent().attr("id");
	//grab the cardData from the array.
	var cardData = JSON.parse(localStorage.getItem("Data Item"));
	console.log("This is the String you parsed: ");
	console.log(cardData);
	//run a for loop to evaluate each object in the array.
	//use if statement to determine if the the object.id and the id of div matches.
	//if it does, return object.quality to the array.
	cardData.forEach(function(object){
		if (object.id == objectId){
			object.quality = qualityVar;
			console.log(object.quality);
			console.log(object);
			return object.quality;
		}
	});
	console.log("Hooray?");
	console.log(cardData);

	//stringify new array.
	//upload array to localStorage.
	var ammendedData = JSON.stringify(cardData);
	localStorage.setItem("Data Item", ammendedData);
}



		// accessCard.filter(function(object) {
		// 		return object.id % id != 0 {
		// 		});
		// console.log(accessCard);
		// console.log(id);

	// parse through stored data for object/key;value
	//
	// accessCard.quality = qualityVar;
	// localStorage.setItem(return stored data)JSON.stringify(accessCard));
