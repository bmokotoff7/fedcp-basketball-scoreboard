let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
let homeScoreboard = document.getElementById("home-scoreboard")
let guestScoreboard = document.getElementById("guest-scoreboard")

function add1Home() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    highlightWinner()
}

function add2Home() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    highlightWinner()
}

function add3Home() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    highlightWinner()
}

function add1Guest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    highlightWinner()
}

function add2Guest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    highlightWinner()
}

function add3Guest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    highlightWinner()
}

function newGame() {
    homeScore = 0
    homeScoreEl.textContent = "0"
    guestScore = 0
    guestScoreEl.textContent = "0"
    highlightWinner()
}

function highlightWinner() {
    if (homeScore == guestScore) {
        homeScoreboard.style.border = "6px solid #111827"
        guestScoreboard.style.border = "6px solid #111827"
    }
    else if (homeScore > guestScore) {
        homeScoreboard.style.border = "6px solid #34D399"
        guestScoreboard.style.border = "6px solid #111827"
    }

    else if (homeScore < guestScore) {
        homeScoreboard.style.border = "6px solid #111827"
        guestScoreboard.style.border = "6px solid #34D399"
    }
}