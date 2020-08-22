const nav = document.querySelector("nav")
const navObserver = document.querySelector(".nav-observer")

const createObserver = () => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    }

    let observer = new IntersectionObserver(e => {
        if (!e[0].isIntersecting) {
            nav.classList.add("sticky")
        } else {
            nav.classList.remove("sticky")
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
