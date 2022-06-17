import ice3 from '../../images/ice3.png';
import '../style.css';

const pageLoad = () => {
    const content = document.getElementById('content');
    const title = document.createElement('h1'); 
    const info = document.createElement('p');
    const img = new Image();
    img.src = ice3;

    title.classList.add('content-title');
    info.classList.add('content-info');
    img.classList.add('content-img');
    
    title.textContent = 'Icecream Zone';
    info.textContent = "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.";
    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(img);
};

export default pageLoad;