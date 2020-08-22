const nav = document.querySelector("nav")
const navObserver = document.querySelector(".nav-observer")

const createObserver = () => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    }

    let observer = new IntersectionObserver(e => {
        console.log("observer is listening")
        if (!e[0].isIntersecting) {
            nav.classList.add("sticky")
            console.log("stick!")
        } else {
            nav.classList.remove("sticky")
            console.log("unstick")
        }
    }, options)

    observer.observe(navObserver)
}

window.addEventListener(
    "load",
    event => {
        createObserver()
    },
    false
)
