import ice1 from '../../images/ice1.png'
import '../style.css';

const loadMenu = () =>{
    const title = document.createElement('h1');
    title.textContent = 'Menu';
    title.classList.add('content-title');

    const head1 = document.createElement('h3');
    head1.textContent = '$3.00 per scoop'

    const flavours = ['vanilla','chocolate', 'lime', 'strawberry', 'boysenberry', 'lemon'];

    const div1 = document.createElement('div');
    div1.appendChild(head1);
    flavours.forEach((flavour) => {
        const p = document.createElement('p');
        p.textContent = flavour;
        p.classList.add('list');
        div1.appendChild(p);
    });

    const head2 = document.createElement('h3');
    head2.textContent = 'Sauce $1.00'
    
    const sauces = ['chocolate','caramel'];
    const div2 = document.createElement('div');
    div2.appendChild(head2);
    sauces.forEach((sauce) => {
        const p = document.createElement('p');
        p.textContent = sauce;
        p.classList.add('list');
        div2.appendChild(p);
    });

    const head3 = document.createElement('h3');
    head3.textContent = 'Extras $1.00';

    const extras = ['sprinkles','wafer','cream','cherry'];
    const div3 = document.createElement('div');
    div3.appendChild(head3);
    extras.forEach((extra) => {
        const p = document.createElement('p');
        p.textContent = extra;
        p.classList.add('list');
        div3.appendChild(p);
    });

    const div4 = document.createElement('div');
    div4.appendChild(title);
    div4.appendChild(div1);
    div4.appendChild(div2);
    div4.appendChild(div3);
    div4.classList.add('content-info');

    const img = new Image();
    img.src = ice1;
    img.classList.add('content-img');

    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(img);
    content.appendChild(div4);
    
};

export default loadMenu;