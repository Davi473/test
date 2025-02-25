
test("create user", async () => 
{
    const name = `Davi`
    const password = "123"
    const response = await fetch("http://localhost:3000/api/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, password
        })
    });
    const responseJSON = await response.json();
    expect(responseJSON.message).toBe("User create");
});

test("login user", async () => 
{
    const name = "Davi"
    const password = "123"
    const response = await fetch("http://localhost:3000/api/users/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, password
        })
    });
    const responseJSON = await response.json();
    expect(!!responseJSON.token).toBe(true);
});
