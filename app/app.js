function changeOpacityOnScroll(elementId, opacity) {
    const element = document.getElementById(elementId);

    window.addEventListener('scroll', function () {
        // Calculate the opacity based on the scroll position
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const elementOffset = element.offsetTop;
        const distanceFromTop = elementOffset - scrollPosition;

        if (distanceFromTop < windowHeight) {
            const calculatedOpacity = 1 - (distanceFromTop / windowHeight) * (1 - opacity);
            element.style.opacity = calculatedOpacity;
        } else {
            element.style.opacity = 0;
        }
    });
}
