const {test, expect} = require('@playwright/test')
test('should be able to send a GET method request',async ({request}) => {
  let res = await request.fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "get",
  })

//   const jsonRes = await res.json();
//   console.log(jsonRes);
//   const resBody = await res.body();
//   console.log(JSON.parse(resBody));
const resStatus = res.status();
const jsonRes = await res.json();
const firstPost = jsonRes[0]

// Verification
expect(resStatus).toBe(200);
expect(jsonRes.length).toBeGreaterThan(0);

const {userId, id, title, body} = firstPost;
expect(userId).toBe(1);
expect(id).toBe(1);
expect(title).toBeTruthy();
expect(body).toBeTruthy();
});
