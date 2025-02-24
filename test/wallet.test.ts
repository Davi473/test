
test("creatẹ wallet", async () => 
{
    const nameUser = "Davi"
    const passwordUser = "123"
    const responseUser = await fetch("http://localhost:3000/users/", {
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
    const name = `${Math.random()}`;
    const icone = "dsdf";
    const valueTarget = 20000;
    const response = await fetch("http://localhost:3000/wallet/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name, icone, valueTarget
        })
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
    // expect(responseJSON.message).toBe("User create");
});
