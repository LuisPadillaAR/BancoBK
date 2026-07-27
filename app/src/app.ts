const body = document.querySelector("body") as HTMLBodyElement;

interface Users {
    id: number,
    name: string,
    num: number
}

async function getUsers<T>(url: string): Promise<T> {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("http error")
    } else {
        return await response.json()
    }
}

const users = await getUsers<Users[]>("http://localhost:3000/users")



    users.forEach(e => {
        const showInfo = document.createElement("p");
        showInfo.textContent = `El id es: ${e.id} y su nombre es: ${e.name} `
        body.appendChild(showInfo);
    });
    


