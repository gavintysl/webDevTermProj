function Image(src){
	this.src = src;
}

var imgArray = new Array();

	var image1 = new Image("PNG/0.png");
	image1.src = "PNG/0.png";

	var image2 = new Image();
	image2.src = "PNG/1.png";

	var image3 = new Image();
	image3.src = "PNG/2.png";

	var image4 = new Image();
	image4.src = "PNG/3.png";

	var image5 = new Image();
	image5.src = "PNG/4.png";

	var image6 = new Image();
	image6.src = "PNG/5.png";

	var image7 = new Image();
	image7.src = "PNG/6.png";

	var image8 = new Image();
	image8.src = "PNG/7.png";

	var image9 = new Image();
	image9.src = "PNG/8.png";

	var image10 = new Image();
	image10.src = "PNG/9.png";

	var image11 = new Image();
	image11.src = "PNG/10.png";

	var image12 = new Image();
	image12.src = "PNG/11.png";

	var image13 = new Image();
	image13.src = "PNG/12.png";

	var image14 = new Image();
	image14.src = "PNG/13.png";

	var image15 = new Image();
	image15.src = "PNG/14.png";

	var image16 = new Image();
	image16.src = "PNG/15.png";

	var image17 = new Image();
	image17.src = "PNG/16.png";

	var image18 = new Image();
	image18.src = "PNG/17.png";

	var image19 = new Image();
	image19.src = "PNG/18.png";

	var image20 = new Image();
	image20.src = "PNG/19.png";

	var image21 = new Image();
	image21.src = "PNG/20.png";

	var image22 = new Image();
	image22.src = "PNG/21.png";
	
	var image23 = new Image();
	image23.src = "PNG/22.png";

	var image24 = new Image();
	image24.src = "PNG/23.png";

	var image25 = new Image();
	image25.src = "PNG/24.png";

	var image26 = new Image();
	image26.src = "PNG/25.png";

	var image27 = new Image();
	image27.src = "PNG/26.png";

	var image28 = new Image();
	image28.src = "PNG/27.png";

	var image29 = new Image();
	image29.src = "PNG/28.png";

	var image30 = new Image();
	image30.src = "PNG/29.png";

	var image31 = new Image();
	image31.src = "PNG/30.png";

	var image32 = new Image();
	image32.src = "PNG/31.png";

	var image33 = new Image();
	image33.src = "PNG/32.png";

	var image34 = new Image();
	image34.src = "PNG/33.png";

	var image35 = new Image();
	image35.src = "PNG/34.png";

	var image36 = new Image();
	image36.src = "PNG/35.png";

	var image37 = new Image();
	image37.src = "PNG/36.png";

	var image38 = new Image();
	image38.src = "PNG/37.png";

	var image39 = new Image();
	image39.src = "PNG/38.png";

	var image40 = new Image();
	image40.src = "PNG/39.png";

	var image41 = new Image();
	image41.src = "PNG/40.png";

	var image42 = new Image();
	image42.src = "PNG/41.png";

	var image43 = new Image();
	image43.src = "PNG/42.png";

	var image44 = new Image();
	image44.src = "PNG/43.png";

	var image45 = new Image();
	image45.src = "PNG/44.png";

	var image46 = new Image();
	image46.src = "PNG/45.png";

	var image47 = new Image();
	image47.src = "PNG/46.png";

	var image48 = new Image();
	image48.src = "PNG/47.png";

	var image49 = new Image();
	image49.src = "PNG/48.png";

	var image50 = new Image();
	image50.src = "PNG/49.png";

	var image51 = new Image();
	image51.src = "PNG/50.png";

	var image52 = new Image();
	image52.src = "PNG/51.png";

	var image53 = new Image();
	image53.src = "PNG/gray_back.png";


var imgArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51, image52];
var userindex =  (Math.floor(Math.random()*52));
var compindex = (Math.floor(Math.random()*52));
var userCounter = 0;
var compCounter = 0;


var userArray = []; //playerHand
var compArray = []; //compHand
var warArray = []; //warArray
var playDeck = '';
var compDeck = ''; //computerDeck
var usercard = ''; //playerCard
var computercard = ''; //compCard

function fillArray(){
	//fill array with 52 cards
	var deck = [];
	for (var i = 0; i < 52; i++)
		deck[i] = i;

	shuffle(deck);
	splitCards(deck);
	//checkValue(deck);
}

function shuffle(deck) {
    for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
    return deck;
}

function splitCards(deck) {
	//split shuffled deck in half
	var i = 0;

	//push a card to each "hand" array
	while (i != deck.length) {
		userArray.push(deck[i]);
		compArray.push(deck[(i+1)]);
		i+=2;
	}
}

function shuffleCards(deck){
	//pick random value from array and assign to spot for image in html
	
	userindex = (Math.floor(Math.random()*52));
	compindex = (Math.floor(Math.random()*52));
	
	document.getElementById("usercard").src = imgArray[userindex].src;
	document.getElementById("computercard").src = imgArray[compindex].src;
	checkValue(deck);
	
	
}

//checks value of which card value is larger
function checkValue(deck){
	
	if((userindex % 13) > (compindex % 13)){
		
		//pushes current cards from each hand to the back of the player's hand
		userArray.push(deck);
		userArray.push(deck);

		//removes current card from the front of each deck
		userArray.shift();
		compArray.shift();
		
		//resets war array to empty
		warArray.length = 0;
		
		//update count
		updateCount();
	}
	else if((userindex % 13) < (compindex % 13)){
		//pushes current cards from each hand to the back of the player's hand
		compArray.push(deck);
		compArray.push(deck);

		//removes current card from the front of each deck
		compArray.shift();
		userArray.shift();
		
		updateCount();
	}
	else if((userindex % 13) == (compindex % 13)){
		cardWar(deck);
	}
//document.getElementById('user').textContent = "User's score : " +  (userArray.length + userCounter);
//document.getElementById('comp').textContent = "Computer's score : " + (compArray.length + compCounter);

}

function updateCount(){
	//updates count at the end of every draw
	document.getElementById('user').textContent = "User's score : " +  (userArray.length);
	document.getElementById('comp').textContent = "Computer's score : " + (compArray.length);
}


function cardWar(){
	//this function is the "war"
	war1 = (Math.floor(Math.random()*52));
	war2 = (Math.floor(Math.random()*52));
	war3 = (Math.floor(Math.random()*52));
	war4 = (Math.floor(Math.random()*52));
	war5 = (Math.floor(Math.random()*52));
	war6 = (Math.floor(Math.random()*52));
	document.getElementById("warcard1").src = imgArray[war1].src;
	document.getElementById("warcard2").src = imgArray[war2].src;
	document.getElementById("warcard3").src = imgArray[war3].src;
	document.getElementById("warcard4").src = imgArray[war4].src;
	document.getElementById("warcard5").src = imgArray[war5].src;
	document.getElementById("warcard6").src = imgArray[war6].src;
	
	//if user wins, increment user's score by 8
	//if computer wins, increment computer's score by 8
	//either way remove 8 cards from deck array
	
	var cardStr = "";
	var length = 0;

	//if not able to draw 4 cards, draw as many as possible
	if (userArray.length < 5 || compArray.length < 5) {

		//if computer has less than 4 cards
		if(userArray.length > compArray.length) {
			length = userArray.length - 1;
		}

		//if the player hand has less than 4 cards
		else if (userArray.length < compArray.length) {
			length = userArray.length - 1;
		}
	}

	//if both decks have greater than four cards
	else {
		length = 3;		
	}
	//take the cards from each deck and push them to the war array
	for (var i = 0; i < length; i++) {
		warArray.push(userArray[0]);
		userArray.shift();
		warArray.push(compArray[0]);
		compArray.shift();
	}
	compareWar(userArray[0], compArray[0]);
}

function warCompare(){
	if((userindex % 13) > (compindex % 13)) {
		
		//pushes entire war array to the back of the player's hand
		userArray.push.apply(userArray, warArray);

		//pushes both current cards (War cards) to back of the player's hand
		userArray.push(deck);
		userArray.push(deck);
		
		//removes current card from both hands
		userArray.shift();
		compArray.shift();
		
		//resets the war array to empty
		warArray.length = 0;

		//update card count and check for a winner
		updateCount();
	}

	//if computer's War card value is greater than the player's War card value, computer wins the tie
	else if ((userindex % 13) < (compindex % 13)) {
		
		//pushes the entire war array to the back of the computer's hand
		compArray.push.apply(compArray, warArray);
		
		//pushes both current cards (War cards) to the back of the computer's hand
		compArray.push(deck);
		compArray.push(deck);

		//removes the current cards from each hand
		userArray.shift();
		compArray.shift();

		//resets the war array to empty
		warArray.length = 0;


		//update card count and check for a winner
		updateCount();
		checkWin();
	}

	//if player's War card value is the same as the computer's War card value, call for another war
	else if ((player % 13) === (comp % 13)){
		cardWar();
	}
}


function resetGame(){
	//this function will reset the game
	//card count on both sides will go to zero
	//change all card faces to default
	document.getElementById("usercard").src = "PNG/gray_back.png";
	document.getElementById("computercard").src = "PNG/gray_back.png";
	document.getElementById("warcard1").src = "PNG/gray_back.png";
	document.getElementById("warcard2").src = "PNG/gray_back.png";
	document.getElementById("warcard3").src = "PNG/gray_back.png";
	document.getElementById("warcard4").src = "PNG/gray_back.png";
	document.getElementById("warcard5").src = "PNG/gray_back.png";
	document.getElementById("warcard6").src = "PNG/gray_back.png";
	document.getElementById('howtoplay').style.display = "none";
	document.getElementById('user').textContent = "User's score : " + 26 ;
	document.getElementById('comp').textContent = "Computer's score : " + 26;


}

function cardBottom(){
	document.getElementById("usercard").src = "PNG/gray_back.png";
	document.getElementById("computercard").src = "PNG/gray_back.png";
	document.getElementById("warcard1").src = "PNG/gray_back.png";
	document.getElementById("warcard2").src = "PNG/gray_back.png";
	document.getElementById("warcard3").src = "PNG/gray_back.png";
	document.getElementById("warcard4").src = "PNG/gray_back.png";
	document.getElementById("warcard5").src = "PNG/gray_back.png";
	document.getElementById("warcard6").src = "PNG/gray_back.png";
}


window.onload = cardBottom();
window.onload = fillArray();
window.onload = checkValue();


