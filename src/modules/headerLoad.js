import '../style.css';

const loadHeader = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const d1 = document.createElement('div');
    const d2 = document.createElement('div');
    const d3 = document.createElement('div');

    d1.textContent = 'Home';
    d2.textContent = 'Menu';
    d3.textContent = 'Contact';

    nav.appendChild(d1);
    nav.appendChild(d2);
    nav.appendChild(d3);

    nav.classList.add('nav');

    header.appendChild(nav);
    header.classList.add('header');

    document.body.prepend(header);

};

export default loadHeader;
