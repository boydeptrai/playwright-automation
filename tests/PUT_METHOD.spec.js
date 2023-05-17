const { test, expect } = require("@playwright/test");

test('should ',async ({request}) => {
  // Contruct data
  const url = "https://jsonplaceholder.typicode.com/posts/1"
  const postContent = {
    id: 1,
    title: "My name is Tuan",
    body: "This is the body",
    userId: 1,
  }

  const options = {
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    data: postContent
  }
  // Send PUT request
  const response = await request.put(url,options);
  const status = response.status();
  const bodyJson = await response.json();

  // Verification
  expect(status).toBe(200);
  const {id, title, body, userId} = bodyJson;
  expect(status).toBe(200);
  expect(id).toBe(postContent.id);
  expect(userId).toBe(postContent.userId);
  expect(title).toBe(postContent.title);
  expect(body).toBe(postContent.body)
})
