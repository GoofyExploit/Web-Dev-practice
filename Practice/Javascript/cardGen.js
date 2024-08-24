
function createCard() {
    let title = prompt("Enter Title")
    let cName = prompt("Enter Channel Name")
    let views = prompt("Enter Views")
    let monthsOld = prompt("How old is your video in months")
    let duration = prompt("Enter duration of the video")

    let viewstr
    if(views < 1000000){
        viewstr = views/1000 + "K"
    }
    else if(views > 1000000){
        viewstr = views/1000000 + "M"
    }else{
        viewstr = views/1000 + "K"
    }

    if (title) {
        let titleName = document.body.firstElementChild.children[2].children[0]
        titleName.innerHTML = title
        titleName.style.fontFamily = "Arial"
        titleName.style.fontSize = "12px"
    }
    if (cName) {
        let channelName = document.body.firstElementChild.children[2].children[1].firstElementChild.children[0]
        channelName.innerHTML = cName
        channelName.style.fontFamily = "Arial"
        channelName.style.fontSize = "12px"
    }
    if (views) {
        let viewsNumber = document.body.firstElementChild.children[2].children[1].firstElementChild.children[1]
        viewsNumber.innerHTML = viewstr
        viewsNumber.style.fontFamily = "Arial"
        viewsNumber.style.fontSize = "12px"
    }
    if (monthsOld) {
        let monthsOldNumber = document.body.firstElementChild.children[2].children[1].firstElementChild.children[2]
        monthsOldNumber.innerHTML = `${monthsOld} months ago`
        monthsOldNumber.style.fontFamily = "Arial"
        monthsOldNumber.style.fontSize = "12px"
    }
    if (duration) {
        let durationNumber = document.body.firstElementChild.children[1]
        durationNumber.innerHTML = duration
        durationNumber.style.fontFamily = "Arial"
        durationNumber.style.fontSize = "12px"
        durationNumber.style.backgroundColor = "#1f1f1f8f"
        durationNumber.style.Color = "White"
        durationNumber.style.position = "relative"
        durationNumber.style.left = "-62px"
        durationNumber.style.bottom = "-26px"
    }

}

createCard()