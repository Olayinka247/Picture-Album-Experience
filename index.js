const API_KEY = "563492ad6f91700001000001d49953abf757426a9c341cb406cdc44b";

const URL = "https://api.pexels.com/v1/search?query=?q=people";

const URL2 = "https://api.pexels.com/v1/search?query=?q=animal";

const rowDisplay = document.querySelector(".displayRow");

async function loadImages() {
  let response = await fetch(URL, {
    headers: { Authorization: API_KEY },
  });
  if (response.ok) {
    const data = await response.json();

    displayCard(data);
  } else {
    console.log("Something went wrong");
  }
}

function displayCard(data) {
  rowDisplay.innerHTML = data.photos
    .map(
      (card) => `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="${card.src.medium}" alt="" style=" width:auto; height:180px; object-fit:cover;">
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small class="text-muted">ID: ${card.id}</small>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");
}

async function loadSecondary() {
  let response = await fetch(URL2, {
    headers: { Authorization: API_KEY },
  });
  if (response.ok) {
    const data = await response.json();

    displayCard(data);
  } else {
    console.log("Something went wrong");
  }
}
