const {test, expect, request } = require("@playwright/test");

test.describe('Testing API Pertemuan ke empat', async () => {
    test('Method GET', async ({}) => {
    const api = await request.newContext();
    const response = await api.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    console.log(responseBody);
    expect(responseBody.data.first_name).toBe("Janet");
    expect(responseBody.data.last_name).toBe("Weaver");

    })

    test('POST', async({}) => {
        const apiContext = await request.newContext();
        const postData = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };
        const res = await apiContext.post('https://reqres.in/api/register', {
            data : postData
        });
        expect(res.status()).toBe(200);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.id).toBe(4);
    });

    test('Method PUT', async({}) => {
        const apiContext = await request.newContext();
        const putData = {
                "name": "morpheus",
                "job": "zion resident"
        };
        const res = await apiContext.put('https://reqres.in/api/users/2', {
            data : putData
        });
        expect(res.status()).toBe(200);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.name).toBe('morpheus');
        expect(respondBody.job).toBe('zion resident');
    });

    test('Method DELETE', async({}) => {
        const apiContext = await request.newContext();
        const res = await apiContext.delete('https://reqres.in/api/users/2');
        expect(res.status()).toBe(204);
    });
})