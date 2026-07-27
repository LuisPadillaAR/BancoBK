const body = document.querySelector("body");
async function getUsers(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("http error");
    }
    else {
        return await response.json();
    }
}
const users = await getUsers("http://localhost:3000/users");
users.forEach(e => {
    const showInfo = document.createElement("p");
    showInfo.textContent = `El id es: ${e.id} y su nombre es: ${e.name} `;
    body.appendChild(showInfo);
});
export {};
//# sourceMappingURL=app.js.map