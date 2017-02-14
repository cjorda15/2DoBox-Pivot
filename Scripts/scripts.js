$("#submit").on('click', function(e){
	e.preventDefault();
	var storeIdeaTitle = $('#title-input').val();
	var storeIdeaContent = $('#content-input').val();
	var card = new Card(storeIdeaTitle, storeIdeaContent);
	var stringCard = JSON.stringify(card);
	// for(i =0; i<)
	localStorage.setItem("storeCard", stringCard);
	console.log(card);
	console.log(stringCard);
})

function Card(storeIdeaTitle, storeIdeaContent) {
	this.title = storeIdeaTitle;
	this.body = storeIdeaContent;
	this.quality = undefined;
	this.id = $('#new-idea').length;
}
