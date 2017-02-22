var data = [];

$(document).ready(function() {
    getIdea();
    printIdea();
})

function Card(storeIdeaTitle, storeIdeaContent) {
    this.title = storeIdeaTitle;
    this.body = storeIdeaContent;
    this.quality = "Normal";
    this.id = Date.now();
    this.complete = "no"
}

function storeIdea() {
    var stringData = JSON.stringify(data);
    localStorage.setItem("Data Item", stringData);
}

function getIdea() {
    var storedData = localStorage.getItem("Data Item") || '[]';
    var parsedData = JSON.parse(storedData);
    data = parsedData;
}

// function displayLength() {
//   var  storedLength = localStorage.getItem("Data Item") || '[]';
//    var  parsedLength = JSON.parse(storedLength)
//    var newTen = parsedLength.prop.slice( 10 ).css('display', 'none')
//    console.log(parsedLength.length)
//
//
//
// // parsedLength.prop.slice( 10 ).css("display", "none")
//   // {
//   //   if(parsedLength[i]>10){
//   //   parsedLength.slice(10).css("display", "none")
//   //   }
//   //  }
//
//  }

// displayLength()

function printIdea() {
    $("#card-section").html('');
    data.forEach(function(object) {
        $("#card-section").append(`
			<div id="${object.id}" class="new-idea ${object.complete}">
				<header>
					<h1 class="entry-title" contenteditable='true'>${object.title}</h1>
					<button class="clear"></button>
				</header>
				<article>
					<p class='entry-body' contenteditable='true'>${object.body}</p>
					<button class="upvote"></button>
					<button class="downvote"></button>
					<h3>Importance:<h4 class="quality">${object.quality}</h4></h3>
          <button class="completed-btn">Completed</button>
				</article>
				<hr>
			</div>`);
      showTen();
    });
}

function clearInput() {
    $('#title-input').val('');
    $('#content-input').val('');
}

function editQuality(location, qualityVar) {
    var objectId = $(location).parent().parent().attr("id");
    data = JSON.parse(localStorage.getItem("Data Item"));
    data.forEach(function(object) {
        if (object.id == objectId) {
            object.quality = qualityVar;
            return object.quality;
        }
    });
    stringData = JSON.stringify(data);
    localStorage.setItem("Data Item", stringData);
}

function editTitleText(location, newText) {
    var objectId = $(location).parent().parent().attr('id');
    data = JSON.parse(localStorage.getItem('Data Item'));
    data.forEach(function(object) {
        if (object.id == objectId) {
            object.title = newText;
            return object.title;
        }
    });
    stringData = JSON.stringify(data);
    localStorage.setItem("Data Item", stringData);
}

function editBodyText(location, newText) {
    var objectId = $(location).parent().parent().attr('id');
    data = JSON.parse(localStorage.getItem('Data Item'));
    data.forEach(function(object) {
        if (object.id == objectId) {
            object.body = newText;
            return object.body;
        }
    });
    stringData = JSON.stringify(data);
    localStorage.setItem("Data Item", stringData);
}

function clear(location, idOfRemoved) {
    var objectId = $(location).parent().parent().attr("id");
    var removedId = idOfRemoved;
    data = JSON.parse(localStorage.getItem("Data Item"));
    data = data.filter(function(object) {
        return object.id % objectId;
    });
    stringData = JSON.stringify(data);
    localStorage.setItem("Data Item", stringData);

    //  $('.new-idea')attr("display", "none").slice(0, 1).css("display","inherit")
}

function showTen() {
  $(".new-idea").slice(10).css("display", "none");
}

showTen()

function disableEnter() {
    if ($("#title-input").val().length > 0 && $("#content-input").val().length > 0) {
        $("#submit").prop("disabled", false);
    } else {
        $("#submit").prop("disabled", true);
    }
}

$("#title-input, #content-input").on("keyup", disableEnter);

$("#submit").on('click', function(e) {
    e.preventDefault();
    var storeIdeaTitle = $('#title-input').val();
    var storeIdeaContent = $('#content-input').val();
    var card = new Card(storeIdeaTitle, storeIdeaContent);
    data.unshift(card);
    storeIdea();
    printIdea();
    clearInput();
    disableEnter();
})

$("#card-section").on('click', '.upvote', function() {
    var qualityVar = $(this).siblings(".quality").text();
    if ($(this).siblings(".quality").text() === "None") {
        $(this).siblings(".quality").text("Low");
        qualityVar = "Low";
        editQuality(this, qualityVar);
    } else if ($(this).siblings(".quality").text() === "Low") {
        $(this).siblings(".quality").text("Normal");
        qualityVar = "Normal"
    } else if ($(this).siblings(".quality").text() === "Normal") {
        $(this).siblings(".quality").text("High");
        qualityVar = "High"
    } else if ($(this).siblings(".quality").text() === "High") {
        $(this).siblings(".quality").text("Critical");
        qualityVar = "Critical"
        editQuality(this, qualityVar);
    } else if ($(this).siblings(".quality").text() === "Critical") {
        qualityVar = "Critical";
    }
});

$("#card-section").on('click', '.downvote', function() {
    var qualityVar = $(this).siblings(".quality").text();
    if ($(this).siblings(".quality").text() === "Critical") {
        $(this).siblings(".quality").text("High");
        qualityVar = "High";
        editQuality(this, qualityVar);
    } else if ($(this).siblings(".quality").text() === "High") {
        $(this).siblings(".quality").text("Normal");
        qualityVar = "Normal";
    } else if ($(this).siblings(".quality").text() === "Normal") {
        $(this).siblings(".quality").text("Low");
        qualityVar = "Low";
    } else if ($(this).siblings(".quality").text() === "Low") {
        $(this).siblings(".quality").text("None");
        qualityVar = "None";
        editQuality(this, qualityVar);
    } else if ($(this).siblings(".quality").text() === "None") {
        qualityVar = "None";
    }
});
function editComplete(location, completeVar) {
  var objectId = $(location).parent().parent().attr("id");
  data = JSON.parse(localStorage.getItem("Data Item"));
  data.forEach(function(object) {
    if (object.id == objectId) {
      object.complete = completeVar;
      return object.complete;
    }
  });
  stringData = JSON.stringify(data);
  localStorage.setItem("Data Item", stringData);
}

$("#card-section").on('click', '.completed-btn', function(){
  var $card = $(this).parent().parent()
  if ($card.hasClass('no')){
    $card.addClass('yes').removeClass('no')
      editComplete(this, "yes")
  }
  else if ($card.hasClass('yes')){
    $card.addClass('no').removeClass('yes')
    editComplete(this, "no")
}})

$('#card-section').on('blur', '.entry-title', function(e) {
    var newTitleText = $(this).text();
    editTitleText(this, newTitleText);
});

$('#card-section').on('blur', '.entry-body', function() {
    var newBodyText = $(this).text();
    editBodyText(this, newBodyText);
});


function list(){
  $('.new-idea').slice(0,10).css("display","block")
  $(".new-idea").slice(10).css("display", "none");}


$("#card-section").on('click', '.clear', function() {
    var idOfRemoved = $(this).parent().parent().attr("id")
    clear(this, idOfRemoved);
    $(this).closest('.new-idea').remove();
    getIdea("Data Item")
    list()

});

$('#search').on('keyup', function() {
    var searchInput = $('#search').val();
    var re = new RegExp(searchInput, 'igm');
    $('.new-idea').each(function() {
        var title = $(this).find(".entry-title").text();
        var body = $(this).find("article p").text();
        var match = (title.match(re) || body.match(re));
        if (!match) {
            $(this).hide();
        } else {
            $(this).show();
        }
    })
});

$("#title-input, #content-input").on("keyup", disableEnter);
