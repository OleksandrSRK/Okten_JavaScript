const arr = [`Main`, `Products`, `About us`, `Contacts`]

const menu = document.createElement(`ul`);
menu.classList.add(`menu`);

document.body.appendChild(menu);

for (const item of arr) {
    const li = document.createElement(`li`);
    li.innerText = item;
    menu.appendChild(li)
}

