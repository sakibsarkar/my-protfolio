function animation(parent, imgClass) {

    document.querySelector(parent) && document.querySelector(parent).addEventListener("mousemove", (e) => {
        document.querySelector(imgClass).style.opacity = 1
        document.querySelector(imgClass).style.height = "100%"
        document.querySelector(imgClass).style.transform = `translateX(${e.pageX - 250}px)`


    })

}

function hideImg(imgClass) {
    document.querySelector(imgClass).style.opacity = 0
    document.querySelector(imgClass).style.height = "30%"
}

export { animation, hideImg }