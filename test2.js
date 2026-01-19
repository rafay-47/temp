function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const userInput = "<script>alert('xss')</script>";
const safeOutput = escapeHTML(userInput);

document.body.innerText = safeOutput;