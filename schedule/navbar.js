let i = 0;
OpenNav = () => {
    $("#navbar").slideToggle('slow');
    if (i%2==0){
        document.body.style.overflow="hidden";
    }
    else{
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
    }
    i++;
}
document.getElementById('open_btn').addEventListener("click", function() {
    this.classList.toggle("is-active");
}, false);
