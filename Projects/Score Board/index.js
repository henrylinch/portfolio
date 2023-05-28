let team_1 = prompt("Enter home team: ")
document.getElementById("team1").textContent = team_1

let team_2 = prompt("Enter guest team: ")
document.getElementById("team2").textContent = team_2

let btn_text1 = document.getElementById("text1")
let btn_text2 = document.getElementById("text2")
let count_text1 = 0
let count_text2 = 0

//for the home side
function add1() {
    count_text1 += 1
    btn_text1.textContent = count_text1
}

function add2() {
    count_text1 += 2
    btn_text1.textContent = count_text1
}

function add3() {
    count_text1 += 3
    btn_text1.textContent = count_text1
}

//for the guest side
function add21() {
    count_text2 += 1
    btn_text2.textContent = count_text2
}

function add22() {
    count_text2 += 2
    btn_text2.textContent = count_text2
}

function add23() {
    count_text2 += 3
    btn_text2.textContent = count_text2
}

let reset = document.getElementById("last-btn")
function reset_score() {
    count_text1 = 0
    count_text2 = 0
    btn_text1.textContent = count_text1
    btn_text2.textContent = count_text2
}
