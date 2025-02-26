async function getToken() {
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
    return responseUserJSON.token;
}

test("create wallet", async () => 
{
    const token = await getToken();
    const name = `${Math.random()}`;
    const icone = "dsdf";
    const valueTarget = 20000;
    const coin = "USD";
    const response = await fetch("http://localhost:3000/api/wallet/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name, icone, valueTarget, coin
        })
    });
    const responseJSON = await response.json();
    expect(!!responseJSON.walletNew).toBe(true);
});


test("get wallet", async () => 
{
    const token = await getToken();
    const response = await fetch("http://localhost:3000/api/wallet/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const responseJSON = await response.json();
    expect(!!responseJSON.wallet).toBe(true);
});

test("get wallet transaction", async () => 
{
    const token = await getToken();
    const wallet = "e4254d8a-5539-4fbb-879b-a400cf0b2571";
    const response = await fetch(`http://localhost:3000/api/wallet/${wallet}/transactions`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const responseJSON = await response.json();
    expect(!!responseJSON.transactions).toBe(true);
});