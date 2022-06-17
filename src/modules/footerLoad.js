import '../style.css';

const loadFooter = () => {
    const footer = document.createElement('footer');
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    p1.textContent = 'Copyright © 2022 imranprice96';
    p2.textContent = 'Images sourced from Pixabay'

    div.classList.add('footer-div');

    div.appendChild(p1);
    div.appendChild(p2);
    footer.appendChild(div);

    document.body.appendChild(footer);
};

export default loadFooter;
