const API_KEY = "563492ad6f91700001000001d49953abf757426a9c341cb406cdc44b";

const URL = "https://api.pexels.com/v1/search?query=";

const URL2 = "https://api.pexels.com/v1/search?query=";

const rowDisplay = document.querySelector(".displayRow");

async function loadImages(query) {
  let response = await fetch(URL + query, {
    headers: { Authorization: API_KEY },
  });
  if (response.ok) {
    const data = await response.json();

    displayCard(data);
  } else {
    console.log("Something went wrong");
  }
}

async function loadSecondary(query) {
  let response = await fetch(URL2 + query, {
    headers: { Authorization: API_KEY },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);

    displayCard(data);
  } else {
    console.log("Something went wrong");
  }
}
const handleSearch = (event) => {
  loadImages(event.target.value);
};

const modalDisplay = (event) => {
  const locateimg = event.target.closest(".card").children[0].src;
  const modalContent = document.querySelector(".modal-body");
  const displayImg = `<img src="${locateimg}" alt="" style=" width:auto; height:180px; object-fit:cover;">`;
  modalContent.innerHTML = displayImg;
};

const hideDisplay = (event) => {
  event.target.closest(".col-md-4").remove();
};

function displayCard(data) {
  rowDisplay.innerHTML = data.photos
    .map(
      (card) => `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <img src="${card.src.medium}" alt=${card.alt} style=" width:auto; height:180px; object-fit:cover;">
          <div class="card-body">
            <p class="card-text">
              ${card.alt}
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="modalDisplay(event)"
                  data-toggle="modal" data-target="#exampleModal"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick= "hideDisplay(event)"
                >
                  Hide
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
