(function () {
    // burger
    const burger = document.querySelector(".burger")
    const menu = document.querySelector(".header__nav")

    // header anchors
    const links = document.querySelectorAll(".header__link")

    // slider toggles
    const tabs = document.querySelectorAll(".nav-tab__item")


    // burger-button
    burger.addEventListener("click", function () {
        menu.classList.toggle("active")
        this.classList.toggle("burger--active")
    })


    // anchors
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            const href = this.getAttribute("href").substring(1)
            const scrollTarget = document.getElementById(href)
            const topOffset = 67
            const elementPosition = scrollTarget.getBoundingClientRect().top
            const offSetPosition = elementPosition - topOffset

            window.scrollBy({
                top: offSetPosition,
                behavior: "smooth",
            })

            // если экран меньше 768px
            if (window.innerWidth < 768) {
                menu.classList.toggle("active")
                burger.classList.toggle("burger--active")
            }
        })
    })


    // slider
    tabs.forEach((tab, index) => {
        tab.onclick = () => showSlides(index + 1, "features__wrapper > .tab", "nav-tab__item")
    })

    function showSlides(n, slideName, toggleName) {
        let slides = document.querySelectorAll(`.${slideName}`)
        let toggles = document.querySelectorAll(`.${toggleName}`)

        if (n > slides.length) n = 1
        if (n < 1) n = slides.length

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
            toggles[i].className = toggles[i].className.replace(`${toggleName}--active`, "")
        }

        slides[n - 1].style.display = "flex"
        toggles[n - 1].className += ` ${toggleName}--active`
    }

    showSlides(1, "features__wrapper > .tab", "nav-tab__item")
}())