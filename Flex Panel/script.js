const panel = document.querySelectorAll(".panel")


function expandPanels() {
    this.classList.toggle('open')
}

function activeTitle(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

function removeEverything() {
    this.classList.remove('open')
}

panel.forEach(panel => panel.addEventListener('click', expandPanels))
panel.forEach(panel => panel.addEventListener('transitionend', activeTitle))
panel.forEach(panel => panel.addEventListener('mouseleave', removeEverything))
