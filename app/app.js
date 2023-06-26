function adjustOpacity() {
    var div = document.getElementById("scroll-div");
    var divHeight = div.offsetHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the position of the middle of the div
    var divTop = div.offsetTop + divHeight / 2;

    // Calculate the distance from the middle of the div to the top and bottom
    var distanceToTop = divTop - scrollTop;
    var distanceToBottom = scrollTop + window.innerHeight - divTop;

    // Calculate the opacity based on the distance from the middle
    var opacity = 0.1;

    if (distanceToTop > 0 && distanceToBottom > 0) {
        opacity = 1 - Math.min(distanceToTop, distanceToBottom) / (divHeight / 2);
    }

    // Apply the opacity to the content inside the div
    div.style.opacity = opacity;
}

// Attach the function to the scroll event
window.addEventListener("scroll", adjustOpacity);
