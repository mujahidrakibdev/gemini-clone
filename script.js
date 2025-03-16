const menu = document.querySelector(".menu-icon")
const aside = document.querySelector("aside")
const plusIcon = document.querySelector(".plus-icon")
const main = document.querySelector("main")
const bottomIcons = document.querySelectorAll(".aside-bottom .ab-text")
const bottomCont = document.querySelector(".bottom-cont")


menu.addEventListener("click", (e) => {
    e.preventDefault()

    // sidebar
    if (aside.classList.contains("small-w")) {
        aside.classList.replace("small-w", "big-w")
        main.style.paddingLeft =  "320px"
        bottomCont.style.paddingLeft =  "320px"

    }else if (aside.classList.contains("big-w")) {
        aside.classList.replace("big-w", "small-w")
        main.style.paddingLeft =  "75px"
        bottomCont.style.paddingLeft =  "75px"
    }

    // new chat button
    if (plusIcon.classList.contains("small-plus")) {
        plusIcon.classList.replace("small-plus", "big-plus")

    }else if (plusIcon.classList.contains("big-plus")) {
        plusIcon.classList.replace("big-plus", "small-plus")
    }

    bottomIcons.forEach((icon) => {
        if (icon.classList.contains("small-plus")) {
            icon.classList.replace("small-plus", "big-plus")
    
        }else if (icon.classList.contains("big-plus")) {
            icon.classList.replace("big-plus", "small-plus")
        }
    })
    
})

aside.addEventListener("mouseover", (e) => {
    e.preventDefault()

    // sidebar
    if (aside.classList.contains("small-w")) {
        aside.classList.replace("small-w", "big-w")
        main.style.paddingLeft =  "320px"
        bottomCont.style.paddingLeft =  "320px"
    }

    // new chat button
    if (plusIcon.classList.contains("small-plus")) {
        plusIcon.classList.replace("small-plus", "big-plus")
    }   

    bottomIcons.forEach((icon) => {
        if (icon.classList.contains("small-ab-text")) {
            icon.classList.replace("small-ab-text", "big-ab-text")
        }
    })
})

aside.addEventListener("mouseout", (e) => {
    e.preventDefault()

    // sidebar
    if (aside.classList.contains("big-w")) {
        aside.classList.replace("big-w", "small-w")
        main.style.paddingLeft =  "75px"
        bottomCont.style.paddingLeft =  "75px"
    }

    // new chat button
    if (plusIcon.classList.contains("big-plus")) {
        plusIcon.classList.replace("big-plus", "small-plus")
    }
    
    bottomIcons.forEach((icon) => {
        if (icon.classList.contains("big-ab-text")) {
            icon.classList.replace("big-ab-text", "small-ab-text")
        }
    })
})