var squares = document.querySelectorAll(".square");
var scoreDisplay = document.querySelector("#score-number");
var score;

function start() {
    score = 0;
    squaresSetup();
    assignTopo();
}

start();

function assignTopo() {
    // Select a random number between 0 and the number of squares-1
    var randomNum = Math.floor(Math.random() * squares.length);
    var sq = squares[randomNum];

    if (sq.classList.contains("hit")) sq.classList.remove("hit"); 
    sq.classList.add("topo");

    var randomTimeToHide = 250 + Math.floor(Math.random() * 500); //generates a random number between 250 and 750

    var randomTimeToAppear = Math.floor(Math.random() * 1500); //generates a random number between 0 and 1500
    setTimeout(function() {
        if (sq.classList.contains("topo")) sq.classList.remove("topo");

                    setTimeout(function() {
                        assignTopo();
                    }, randomTimeToAppear);

    }, randomTimeToHide);
} 




function squaresSetup() {
	for (var i = 0; i < squares.length; ++i) {
	// Add click listeners to squares
		squares[i].addEventListener("click", function() {

			//Check if square is topo
			if (this.classList.contains("topo")) {
                score = score+1;
                scoreDisplay.innerHTML = score;
                //Turn green for half a second to show it's been hit
                this.classList.add("hit");
                this.classList.remove("topo");
                var sq = this; //this is needed because "this" can only be accessed by this function
                //setTimeout can't see the "this"
                setTimeout(function() {
                    sq.classList.remove("hit");
                }, 500);
			}
		});
	}
}


















