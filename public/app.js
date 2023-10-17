const fileInput = document.querySelector("#fileInput");
const downloadLink = document.querySelector("#downloadLink");
const imagePreview = document.querySelector("#imagePreview");
const loginBtn = document.querySelector("#loginBtn");
const uploadBtn = document.querySelector("#uploadBtn");

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

function onFileUpload(e) {
  const options = createFetchOptions("POST");

  options.body = JSON.stringify({ image: imagePreview.src });

  fetch("/image", options);
}

function onFileChange(e) {
  const file = e.target.files[0];
  const fileReader = new FileReader();

  fileReader.onloadend = (e) => {
    const imageBase64String = e.target.result;
    imagePreview.src = imageBase64String;
  };

  fileReader.readAsDataURL(file);
}

loginBtn.addEventListener("click", () => {
  fetch("/login", createFetchOptions("POST"))
    .then((response) => response.text())
    .then((text) => (document.cookie = `token=${text}`));
});

uploadBtn.addEventListener("click", onFileUpload);

fileInput.addEventListener("change", onFileChange);
