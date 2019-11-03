let image = ["../img/cards1.png", "../img/cards2.png", "../img/cards3.png", ];

let title = ["Best Track Record", "Trusted by leaders", "Brand Equity"];

let text = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute";

let btnText = "Read More";

let container = document.querySelector(".cards__container");



for (let i = 0; i < 3; i++) {
    let fragment = document.createDocumentFragment();

    let cardsItem = document.createElement('div');
    cardsItem.classList.add("cards__item");

    let img = document.createElement('img');
    img.classList.add("cards__img");
    img.src = image[i];
    cardsItem.appendChild(img);

    let cardsTitle = document.createElement('div');
    cardsTitle.classList.add("cards__title");
    cardsTitle.textContent = title[i];
    cardsItem.appendChild(cardsTitle);

    let cardsText = document.createElement('div');
    cardsText.classList.add("cards__text");
    cardsText.textContent = text;
    cardsItem.appendChild(cardsText);

    let cardsBtn = document.createElement('div');
    cardsBtn.classList.add("cards__btn");
    let gradientButton = document.createElement("button");
    gradientButton.classList.add("gradient__button");
    gradientButton.textContent = btnText;
    cardsBtn.appendChild(gradientButton);
    cardsItem.appendChild(cardsBtn);

    fragment.appendChild(cardsItem);
    container.appendChild(fragment);
}