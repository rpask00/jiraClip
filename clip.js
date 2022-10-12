setInterval(() => {
    let box = document.querySelector('.ghx-key-group') || document.querySelector('.aui-nav-breadcrumbs li:nth-last-child(1)')
    if (box) {
        let clip = box.querySelector('.ghx-iconfont.aui-icon.aui-icon-small.aui-iconfont-attachment')
        if (clip) {
            return
        }
        clip = document.createElement('span')
        clip.className = "ghx-iconfont aui-icon aui-icon-small aui-iconfont-attachment"

        clip.style.cursor = "pointer"
        clip.style.marginLeft = "6px"
        const key = box.querySelector("#issuekey-val")?.textContent || box.textContent

        clip.onclick = () => navigator.clipboard.writeText(key)

        box.appendChild(clip)
    }
}, 500)
