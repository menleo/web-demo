
const menus = [
    {
        text: '鼠标右键出现文字，文字向上移动，最后消失',
        url: './right-click-text/index.html'
    }
]

const ul = document.getElementById('menu');
const fragment = document.createDocumentFragment();
menus.forEach(menu => {
    const li = document.createElement('li');
    li.innerHTML = `<a style="text-decoration: none;" href="${menu.url}" target="_blank">${menu.text}</a>`;
    fragment.appendChild(li);
})

ul.appendChild(fragment);