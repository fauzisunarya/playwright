const {test, expect, request } = require("@playwright/test");

test.describe('Testing API Pertemuan ke empat', async () => {
    test('Contoh Method GET', async ({}) => {
    const api = await request.newContext();
    const response = await api.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    console.log(responseBody);
    expect(responseBody.page).toBe(2);
    expect(responseBody.per_page).toBe(6);

    })

    test('contoh POST', async({}) => {
        const apiContext = await request.newContext();
        const postData = {
                "name": "morpheus",
                "job": "leader"
        };
        const res = await apiContext.post('https://reqres.in/api/users', {
            data : postData
        });
        expect(res.status()).toBe(201);
        const respondBody = await res.json();
        console.log(respondBody);
        expect(respondBody.name).toBe('morpheus');
        expect(respondBody.job).toBe('leader');
    });
})