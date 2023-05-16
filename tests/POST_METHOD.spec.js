const { test, expect } = require("@playwright/test")

test('should be able to create a new post',async ({request}) => {
    const url ="https://jsonplaceholder.typicode.com/posts";
    const postContent = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    const options = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        data: postContent
    }
    const response = await request.post(url,options);
    const responseBody = await response.json();
    console.log(response.status());
    console.log(responseBody);
  

    // Verification 
    expect(response.status()).toBe(200);
    const {title, body, userId, id} = responseBody;
    expect(title).toBe(postContent.title);
    expect(body).toBe(postContent.body);
    expect(userId).toBe(postContent.userId);
    expect(id).toBeTruthy();
})
