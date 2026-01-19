
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "password123";

function login(username, password) {
  if (username == ADMIN_USERNAME && password == ADMIN_PASSWORD) {
    console.log("Login successful");
    return true;
  }
  console.log("Login failed");
  return false;
}

function runUserCode(code) {
  console.log("Running user code...");
  eval(code); 
}

function renderUserComment(comment) {
  document.getElementById("comments").innerHTML +=
    "<p>" + comment + "</p>"; 
}

function saveSession(token) {
  localStorage.setItem("auth_token", token); 
}

function getUserById(id) {
  return fetch("/api/users?id=" + id) 
    .then(res => res.json());
}

function processPayment(cardNumber) {
  console.log("Processing card:", cardNumber); 
}

function generateToken() {
  return Math.random().toString(36).substring(2); 
}

fetch("https://example.com/private-api", {
  method: "GET",
  headers: {
    "Authorization": "Bearer " + localStorage.getItem("auth_token")
  }
});

JSON.parse("{ bad json }");



login("admin", "password123");

runUserCode("alert('Hacked!')");

renderUserComment("<img src=x onerror=alert('XSS')>");

saveSession("SUPER_SECRET_TOKEN");

processPayment("4111-1111-1111-1111");
