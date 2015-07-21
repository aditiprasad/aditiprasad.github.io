var turn = 1;
var player1;
var player2;
var input1 = $('#player1');
var input2 = $('#player2');
var imageOfX = $('#imageOfX');
var imageOfO = $('#imageOfO');
var start = $('#start');



imageOfX.on('click', function(){
	player1 = input1.val();
    console.log("player1 has been chosen");
    return player1;
});

imageOfO.on('click', function(){
	player2 = input2.val();
	console.log("player2 has been chosen");
	return player2;
});



var $boxes = $('.box');

var imgUrls = [
    "http://www.meshbelt.com/X.gif", 
    "http://www.thecompliancecenter.com/img_temp/decals/numbers/dc0_lo.gif"
];


$boxes.on('click', function(event){
	if(turn % 2 === 1) {
		console.log('player 1');
	    var newImg = $('<img>');
		newImg.attr('src', imgUrls[0]).attr("width", "90px").attr("height", "90px");
		$(event.target).append(newImg);
		turn++;
	} else if (turn % 2 === 0) {
		console.log('player 2');
	    var newImg2 = $('<img>');
		newImg2.attr('src', imgUrls[1]).attr("width", "90px").attr("height", "90px");
	    $(event.target).append(newImg2);
	    turn++;
	}
	 whoWins();
	 // tie();
})   

var winningCombinations = [ 
[$boxes[0], $boxes[1], $boxes[2]], 
[$boxes[3], $boxes[4], $boxes[5]],
[$boxes[6], $boxes[7], $boxes[8]],
[$boxes[0], $boxes[4], $boxes[8]],
[$boxes[2], $boxes[4], $boxes[6]],
[$boxes[0], $boxes[3], $boxes[6]],
[$boxes[1], $boxes[4], $boxes[7]],
[$boxes[2], $boxes[5], $boxes[8]]
];

var winningX = [imgUrls[0], imgUrls[0], imgUrls[0]];
var winningO = [imgUrls[1], imgUrls[1], imgUrls[1]];


var whoWins = function whoWins () {
    winningCombinations.forEach(function(element) {
    	var countX = 0;
    	var countO = 0;
    	element.forEach(function(element, id) {
    		if ($("img", element).attr("src") === winningX[id]) {
    			countX++;
    			 if (countX === 3) {
    		console.log("Player 1 is the winner!");
    		alert(player1 + " " + "wins!");
    	}
    		} else if($("img", element).attr("src") === winningO[id]) {
    			countO++;
    			 if(countO === 3) {
    		console.log("Player 2 is the winner!");
    		alert(player2 + " " + "wins!");
    	}
    		} 
    	})

 })
};

// var tie = function tie (){
//    winningCombinations.forEach(function(element){
// 	  countTie = 0;
// 	if (winningCombinations !== winningX){
// 	   console.log("it's obviously a tie")
// 		countTie++;
// 		alert("That's a tie!")
//    } else if (winningCombinations !== winningO){
// 		console.log("Tha's a tie yo");
// 		countTie++;
// 		alert("That's a tie yo");
// 	}
//  })
// };

var button = $('#modal-button');
var datModal = $('#modal');
var closeButton = $('#close-modal');

button.on('click', function(){
	console.log("You clicked me oh lord!")
	datModal.toggle();
});

closeButton.on('click', function(){
	datModal.toggle();
})


var restart = $('#restart-game');
restart.on('click', function (){
	console.log("Should work");
	location.reload();
})





