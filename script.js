const menu = document.querySelector(".menu-icon")
const aside = document.querySelector("aside")
const plusIcon = document.querySelector(".plus-icon")
const newChatText = document.querySelector(".new-chat")


menu.addEventListener("click", (e) => {
    e.preventDefault()

    // sidebar
    if (aside.classList.contains("small-w")) {
        aside.classList.replace("small-w", "big-w")    
    }else if (aside.classList.contains("big-w")) {
        aside.classList.replace("big-w", "small-w")
    }

    // new chat button
    if (plusIcon.classList.contains("small-plus")) {
        plusIcon.classList.replace("small-plus", "big-plus")

    }else if (plusIcon.classList.contains("big-plus")) {
        plusIcon.classList.replace("big-plus", "small-plus")
    }
    
})

aside.addEventListener("mouseover", (e) => {
    e.preventDefault()

    // sidebar
    if (aside.classList.contains("small-w")) {
        aside.classList.replace("small-w", "big-w")    
    }

    // new chat button
    if (plusIcon.classList.contains("small-plus")) {
        plusIcon.classList.replace("small-plus", "big-plus")
    }   
})

aside.addEventListener("mouseout", (e) => {
    e.preventDefault()

    // sidebar
    if (aside.classList.contains("big-w")) {
        aside.classList.replace("big-w", "small-w")
    }

    // new chat button
    if (plusIcon.classList.contains("big-plus")) {
        plusIcon.classList.replace("big-plus", "small-plus")
    }
    
})