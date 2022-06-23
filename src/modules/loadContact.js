import ice2 from '../../images/ice2.png';
import '../style.css';

const loadContact = () => {
    const d1 = document.createElement('div');
    const img = new Image();
    img.src = ice2;
    img.classList.add('header-img')
    const title = document.createElement('h1');
    title.textContent = 'Contact us';
    title.classList.add('content-title');

    d1.appendChild(title);
    d1.appendChild(img);
    d1.classList.add('contact-header')

    const d2 = document.createElement('div');
    const head = document.createElement('h3');
    head.textContent = 'Owner Operator'
    const lines = ['Mr Ice', 'ph: 111-222-3333', 'email: iceman99@mail.com'];

    lines.forEach((line) => {
        const p = document.createElement('p');
        p.textContent = line;
        d2.appendChild(p);
    });
    d2.classList.add('contact-info');

    const d3 = document.createElement('div');
    d3.appendChild(d1);
    d3.appendChild(d2);
    d3.classList.add('content-info');

    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(d3);

};

export default loadContact;