import "./style.css";

const cards = document.querySelector('.content__cards');

function toggleStyles(event) {
    if (event.target.closest('.content__card')) {
        const card = event.target.closest('.content__card');
        card.classList.toggle('content__card_selected');
        card.classList.toggle('content__card_not-selected');
        const circle = card.querySelector('.content__card-circle');
        circle.classList.toggle('content__card-circle_selected');
        circle.classList.toggle('content__card-circle_not-selected');
        const link = card.nextElementSibling;
        link.classList.toggle('hidden');
        const info = link.nextElementSibling;
        info.classList.toggle('hidden');
        const cardSubtitle = card.querySelector('.content__card-subtitle');
        cardSubtitle.classList.remove('hidden');
        cardSubtitle.nextElementSibling.classList.add('hidden');
    } else if (event.target.closest('.content__card-link')) {
        const card = event.target.closest('.content__card-wrapper').firstElementChild;
        card.classList.toggle('content__card_selected');
        card.classList.toggle('content__card_not-selected');
        const link = card.nextElementSibling;
        link.classList.toggle('hidden');
        const info = link.nextElementSibling;
        info.classList.toggle('hidden');
        const cardSubtitle = card.querySelector('.content__card-subtitle');
        cardSubtitle.classList.remove('hidden');
        cardSubtitle.nextElementSibling.classList.add('hidden');
        const circle = card.querySelector('.content__card-circle');
        circle.classList.toggle('content__card-circle_selected');
        circle.classList.toggle('content__card-circle_not-selected');
    };
}

function toggleText(event) {
    if (event.target.closest('.content__card_selected')) {
        const card = event.target.closest('.content__card_selected');
        const cardSubtitle = card.querySelector('.content__card-subtitle');
        cardSubtitle.classList.add('hidden');
        cardSubtitle.nextElementSibling.classList.remove('hidden');
    };
}

cards.addEventListener('click', toggleStyles);
cards.addEventListener('mouseout', toggleText);