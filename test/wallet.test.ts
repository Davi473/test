
// test("create wallet", async () => 
// {
//     const nameUser = "Davi";
//     const passwordUser = "123";
//     const responseUser = await fetch("http://localhost:3000/api/users/", {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: nameUser, password: passwordUser
//         })
//     });
//     const responseUserJSON = await responseUser.json();
//     const token = responseUserJSON.token;
//     const name = `${Math.random()}`;
//     const icone = "dsdf";
//     const valueTarget = 20000;
//     const coin = "USD";
//     const response = await fetch("http://localhost:3000/api/wallet/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//             name, icone, valueTarget, coin
//         })
//     });
//     const responseJSON = await response.json();
//     expect(!!responseJSON.walletNew).toBe(true);
// });


test("get wallet", async () => 
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
    const token = responseUserJSON.token;
    const response = await fetch("http://localhost:3000/api/wallet/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
    expect(!!responseJSON.wallet).toBe(true);
});