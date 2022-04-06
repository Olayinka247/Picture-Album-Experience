const API_KEY = "563492ad6f91700001000001d49953abf757426a9c341cb406cdc44b";

const URL = "https://api.pexels.com/v1/search?query=?q=people";

const URL2 = "https://api.pexels.com/v1/search?query=";

async function loadImages() {
  let response = await fetch(URL, {
    headers: { Authorization: API_KEY },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
}
loadImages();
