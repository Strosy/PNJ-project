//Init of variables. 

let bannerStatus = 1;
// set in ms the time of sliding
let bannerTimer = 4000; 

//will start the function on the opening of the page. 
window.onload = function() {
    bannerLoop();
}
//make use of the timer variable to decide ther period.
let startBannerLoop = setInterval(function() {
    bannerLoop();
}, bannerTimer);

//stop the looping when your mouse is on the banner
document.getElementById("main-banner").onmouseenter = function() {
    clearInterval(startBannerLoop);
}
//restart the looping when mouse goes out of the banner
document.getElementById("main-banner").onmouseleave = function() {
    startBannerLoop = setInterval(function() {
        bannerLoop();
    }, bannerTimer);
}

//create the prev button
document.getElementById("imgbanbtn-prev").onclick = function() {
    if(bannerStatus === 1) {
        bannerStatus = 2;
    } else if (bannerStatus === 2) {
        bannerStatus = 3;
    } else if (bannerStatus === 3) {
        bannerStatus = 1;
    }
    bannerLoop();
}
//create the next button
document.getElementById("imgbanbtn-next").onclick = function() {
    //allow to skip to the next image when using it
    bannerLoop(); 
}
//function of the sliding
function bannerLoop(){
    if (bannerStatus === 1) {

        document.getElementById("imgban2").style.opacity = "0"; 

        setTimeout(function() {
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-1920px";
            document.getElementById("imgban2").style.zIndex = "1500";
            document.getElementById("imgban3").style.right = "1920px";
            document.getElementById("imgban3").style.zIndex = "500";    
        }, 500);
        setTimeout(function() {
        document.getElementById("imgban2").style.opacity = "1";
        }, 1000);       
        bannerStatus = 2;
    }


    else if (bannerStatus === 2) {

        document.getElementById("imgban3").style.opacity = "0"; 

        setTimeout(function() {
            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000";
            document.getElementById("imgban3").style.right = "-1920px";
            document.getElementById("imgban3").style.zIndex = "1500";
            document.getElementById("imgban1").style.right = "1920px";
            document.getElementById("imgban1").style.zIndex = "500";    
        }, 500);
        setTimeout(function() {
        document.getElementById("imgban3").style.opacity = "1";
        }, 1000);       
        bannerStatus = 3;
    }

    else if (bannerStatus === 3) {

        document.getElementById("imgban1").style.opacity = "0"; 

        setTimeout(function() {
            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000";
            document.getElementById("imgban1").style.right = "-1920px";
            document.getElementById("imgban1").style.zIndex = "1500";
            document.getElementById("imgban2").style.right = "1920px";
            document.getElementById("imgban2").style.zIndex = "500";    
        }, 500);
        setTimeout(function() {
        document.getElementById("imgban1").style.opacity = "1";
        }, 1000);       
        bannerStatus = 1;
    }

}
