var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function lyricsToCons() {
    console.log(lyrics.join(", "))
}

lyricsToCons()

function lyricsBackwards() {
    console.log(lyrics.reverse().join(", "))
}

lyricsBackwards()

var everyOther = []

function lyricsEveryOther() {
    for (var i = 1; i < lyrics.length; i += 2) {
        everyOther.push(lyrics[i])
    }
    console.log(everyOther.join(", "))
}

lyricsEveryOther()
