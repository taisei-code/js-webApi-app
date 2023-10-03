// function callApi() {
//   const res = fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(res);
// }

// callApi();

async function callApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);
}

callApi();