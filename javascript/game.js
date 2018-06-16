var hangmanWords = [{ word: "first", blanks: "_ _ _ _ _" }, { word: "second", blanks: "_ _ _ _ _ _" }, { word: "third", blanks: "_ _ _ _ _" }, { word: "home", blanks: "_ _ _ _" }, { word: "base", blanks: "_ _ _ _" }, { word: "ball", blanks: "_ _ _ _" }, { word: "baseball", blanks: "_ _ _ _ _ _ _ _" }]





var computerChoice = hangmanWords[Math.floor(Math.random() * hangmanWords.length)]
var wordToGuess = computerChoice.word
var blankDisplay = wordToGuess.replace(/[A-z]/g, "_ ")
console.log(blankDisplay)
console.log(wordToGuess)


function game() {
    console.log(blankDisplay)
    var numOfGuesses = 7
    var userGuesses = []
    document.getElementById("work").innerHTML = (blankDisplay);
}
game()

document.onkeyup = function (event) {
    var userGuess = event.key
    var userGuesses = []
    

    for (i = 0; i < numOfGuesses; i++) {
        userGuesses.push(event.key)

        if (wordToGuess[userGuess] >= 0) {
            var blankDisplay = wordToGuess.replace(/[A-z]-userGuesses[i]/g, "_ ")
            console.log(blankDisplay)
        }
        else{
            var numOfGuesses = (numOfGuesses-1)
            document.getElementById("left").innerHTML = (numOfGuesses);
        }
        
    }





    console.log(computerChoice)
    console.log(blankDisplay)









}

// to have _ turn into letters look up .split to split strings(words) into arrays individual characters