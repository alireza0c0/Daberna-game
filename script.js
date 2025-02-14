const socket = io();

document.getElementById("startGame").addEventListener("click", () => {
    socket.emit("startGame");
});

socket.on("gameStarted", () => {
    alert("بازی شروع شد!");
});
