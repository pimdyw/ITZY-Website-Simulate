OpenVideo = () => {
    $("#video").fadeIn(300);
}
document.getElementById('open_vdo').addEventListener("click", function() {
    this.classList.toggle("is-active");
}, false);
CloseVideo = () => {
    $("#video").fadeOut(300);
    document.getElementById('iframe').src = "https://www.youtube.com/embed/MjCZfZfucEc";
}
document.getElementById('close_vdo').addEventListener("click", function() {
    this.classList.toggle("is-active");
}, false);