window.addEventListener("load", askUserName);
function askUserName() {
    let firstPlayer = prompt("Please enter First Player");
    let secondPlayer = prompt("Please enter Second Player");
    document.getElementById("players").innerText = `First Player ${firstPlayer} & Second Player ${secondPlayer}`;
}