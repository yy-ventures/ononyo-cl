const mobileMenuBtn = document.querySelector(".header-section-mobile .menu-btn")
const mobileNavigation = document.querySelector(".header-section-mobile .navigation-section")
const mobileCloseBtn = document.querySelector(".header-section-mobile .close-menu")

mobileMenuBtn.addEventListener("click", e => {
    console.log("click")
    e.preventDefault()
    mobileNavigation.style.transform = "translateX(0)"
})

mobileCloseBtn.addEventListener("click", e => {
    e.preventDefault()
    mobileNavigation.style.transform = "translateX(-100%)"
})
