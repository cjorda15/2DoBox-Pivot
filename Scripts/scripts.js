var data = [];

$(document).ready(function(){
	console.log("here we are")
	console.log(localStorage);
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
	// getIdea();
	printIdea();
	console.log('localStorage', localStorage)
	console.log(data);
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
	console.log('getIdea', data);
}

function printIdea(){
$("#card-section").empty();
data.forEach(function(object) {
	 	$("#card-section").append(`
			<div class="new-idea">
				<header>
					<h1 class="entry-title">${object.title}</h1>
					<ul>
						<li class="clear"></li>
					</ul>
				</header>
				<article>
					<p>${object.body}</p>
					<ul>
						<li class="upvote"></li>
						<li class="downvote"></li>
					</ul>
					<span class="quality">${object.quality}</span>
				</article>
				<hr>
			</div>`);
	});

}

// $(".new-idea").on('click','.upvote')
// for (var i = 0; i<localStorage.length; i++){
// 	console.log(localStorage.getItem(localStorage.key(i)));
// }

// for (var i = 0; i<localStorage.length; i++){
// 	var getBack = localStorage.getItem(localStorage.key(i));
// 	var parsed = JSON.parse(getBack);
// }
// console.log(parsed);
