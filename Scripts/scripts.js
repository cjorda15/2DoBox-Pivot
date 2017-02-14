window.onload = function(){
	for
}


$("#submit").on('click', function(e){
	e.preventDefault();
	var storeIdeaTitle = $('#title-input').val();
	var storeIdeaContent = $('#content-input').val();
	var card = new Card(storeIdeaTitle, storeIdeaContent);
	var itemKey = Date.now();
	var stringCard = JSON.stringify(card);
	localStorage.setItem(storeIdeaTitle, stringCard);
	console.log(card);
	console.log(stringCard);

	addIdea(storeIdeaTitle)
})

function Card(storeIdeaTitle, storeIdeaContent) {
	this.title = storeIdeaTitle;
	this.body = storeIdeaContent;
	this.quality = undefined;
	this.id = $(".new-idea").length;
}

function addIdea(storeIdeaTitle){

	var x = localStorage.getItem(storeIdeaTitle);
	var object = JSON.parse(x);
	console.log(object.title);
	$("#card-section").prepend(`
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
		</div>`)
}

// for (var i = 0; i<localStorage.length; i++){
// 	console.log(localStorage.getItem(localStorage.key(i)));
// }

// for (var i = 0; i<localStorage.length; i++){
// 	var getBack = localStorage.getItem(localStorage.key(i));
// 	var parsed = JSON.parse(getBack);
// }
// console.log(parsed);
