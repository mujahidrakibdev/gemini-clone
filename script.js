const menu = document.querySelector(".menu-icon")
const aside = document.querySelector("aside")
const plusIcon = document.querySelector(".plus-icon")
const main = document.querySelector("main")
const bottomIcons = document.querySelectorAll(".aside-bottom .ab-text")
const bottomCont = document.querySelector(".prompt-cont")
const textInput = document.querySelector(".text-input")



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

// input field height

textInput.addEventListener("input", function () {
    textInput.style.height = "20px"
    textInput.style.height = textInput.scrollHeight + "px"
    
})

// prompt form

const chatCont = document.querySelector(".message-inner")
const form = document.querySelector(".prompt-form")
const textArea = document.querySelector(".text-input")

textArea.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        form.requestSubmit()
    }

})

form.addEventListener("submit", handleSubmit)

// create msg element
function createMsgDiv(msgHtml, ...classes) {
    const div = document.createElement("div")
    div.classList.add("message", ...classes)
    div.innerHTML = msgHtml
    return div
}

// handle form submition
function handleSubmit(e) {
    e.preventDefault()
    const userMsg = textArea.value.trim()
    if (textArea.value !== "") {
        textArea.value = ""
        // hide the welcome message
        chatCont.querySelector(".welcome").style.display = "none"
    }

    // generate user message div and append
    const userMsgHtml = `<p class="message-text"></p>`
    const userMsgDiv = createMsgDiv(userMsgHtml, "user-message")

    userMsgDiv.querySelector(".message-text").textContent = userMsg
    chatCont.appendChild(userMsgDiv)


    setTimeout(() => {
        // generate bot message div and append after 600 ms
        const botMsgHtml = `<div class="bot-top">
                                <div class="spinner-wrapper">
                                    <img src="images/fav-icon.svg" alt="logo" class="bot-image">
                                </div>
                                <p class="message-text">Just a sec...</p> 
                            </div>
                            <div class="bot-bottom">
                                <span class="material-symbols-outlined">thumb_up</span>
                                <span class="material-symbols-outlined">thumb_down</span>
                                <span class="material-symbols-outlined">refresh</span>
                                <span class="material-symbols-outlined">share</span>
                                <span class="material-symbols-outlined">more_vert</span>
                            </div>`
        const botMsgDiv = createMsgDiv(botMsgHtml, "bot-message", "loading")
        chatCont.appendChild(botMsgDiv)
    }, 600);
}

