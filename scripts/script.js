const nav = document.querySelector("nav")
const navObserver = document.querySelector(".nav-observer")

const callout = document.querySelectorAll(".callout")


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

    let calloutObserver = new IntersectionObserver(
        e => {
            if (e[0].isIntersecting) {
                e[0].target.classList.add("visible")
            } else {
                // e[0].target.classList.remove("visible")
            }
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0,
        }
    )

    callout.forEach(e => calloutObserver.observe(e))
}

window.addEventListener(
    "load",
    event => {
        createObserver()
    },
    false
)
