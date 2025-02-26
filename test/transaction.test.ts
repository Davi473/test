let token = "";
async function getToken()
{
    const nameUser = "Davi";
    const passwordUser = "123";
    const responseUser = await fetch("http://localhost:3000/api/users/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameUser, password: passwordUser
        })
    });
    const responseUserJSON = await responseUser.json();
    token = responseUserJSON.token;
}

test("Transaction Create", async () => {
    await getToken();
    const response = await fetch("http://localhost:3000/api/transaction/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            idWallet: "e4254d8a-5539-4fbb-879b-a400cf0b2571", name: "Teste", amount: 100, quantity: 1, date: "2021-10-10" 
        })
    });
    const responseJSON = await response.json();
    expect(!!responseJSON.transaction).toBe(true);
});

test("Transaction Get", async () => {
    await getToken();
    const response = await fetch("http://localhost:3000/api/transaction/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const responseJSON = await response.json();
    expect(!!responseJSON.response).toBe(true);
});