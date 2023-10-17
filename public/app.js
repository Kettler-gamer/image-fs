const fileInput = document.querySelector("#fileInput");
const downloadLink = document.querySelector("#downloadLink");
const imagePreview = document.querySelector("#imagePreview");
const loginBtn = document.querySelector("#loginBtn");

function createFetchOptions(method) {
  return {
    headers: {
      authorization: document.cookie
        ? document.cookie.replace("token=", "")
        : "",
      "Content-Type": "application/json",
    },
    method,
  };
}

function onFileLoaded(e) {
  const imageBase64String = e.target.result;
  imagePreview.src = imageBase64String;

  fetchOptions.body = JSON.stringify({ image: imageBase64String });

  fetch("/image", createFetchOptions("POST"));
}

function onFileChange(e) {
  const file = e.target.files[0];
  const fileReader = new FileReader();

  fileReader.onloadend = onFileLoaded;

  fileReader.readAsDataURL(file);
}

loginBtn.addEventListener("click", () => {
  fetch("/login", createFetchOptions("POST"))
    .then((response) => response.text())
    .then((text) => (document.cookie = `token=${text}`));
});

fileInput.addEventListener("change", onFileChange);
