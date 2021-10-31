const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".navigation-section")
const closeBtn = document.querySelector(".close-menu")

menuBtn.addEventListener("click", e => {
    console.log("click")
    e.preventDefault()
    navigation.style.transform = "translateX(0)"
})

closeBtn.addEventListener("click", e => {
    e.preventDefault()
    navigation.style.transform = "translateX(-100%)"
})

AOS.init({disable: 'mobile'});