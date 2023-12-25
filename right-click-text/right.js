

document.addEventListener('contextmenu', handleContextMenu)
document.removeEventListener('unload', handleContextMenu)

// 点击右键，添加文字元素
function handleContextMenu(e) {
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
    appendText(x, y);
}

function appendText(x, y) {
    let text = document.createElement('div');
    text.className = 'a-right-text move-up';
    text.style.left = x + 'px';
    text.style.top = y + 'px';
    text.innerHTML = `<span>hello world</span>`;
    document.body.appendChild(text);
    text.addEventListener('animationend', (e) => {
        e.target.outerHTML = null;
    })
}