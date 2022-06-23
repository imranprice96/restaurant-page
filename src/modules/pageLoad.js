import ice3 from '../../images/ice3.png';
import '../style.css';

const pageLoad = () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const title = document.createElement('h1'); 
    const info = document.createElement('p');
    const info2 = document.createElement('p');
    const div = document.createElement('div');
    const img = new Image();
    img.src = ice3;

    title.classList.add('content-title');
    div.classList.add('content-info');
    img.classList.add('content-img');
    
    title.textContent = 'Icecream Zone';

   

    info.textContent = "Ice cream is a sweetened frozen food typically \
                        eaten as a snack or dessert. It may be made from milk \
                        or cream and is flavoured with a sweetener, either sugar\
                         or an alternative, and a spice, such as cocoa or vanilla, \
                         or with fruit such as strawberries or peaches.";

    info2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco \
                        laboris nisi ut aliquip ex ea commodo consequat. \
                        Duis aute irure dolor in reprehenderit in voluptate velit \
                        esse cillum dolore eu fugiat nulla pariatur. \
                        Excepteur sint occaecat cupidatat non proident, \
                        sunt in culpa qui officia deserunt mollit anim id est laborum."

    div.appendChild(title);
    div.appendChild(info)
    div.appendChild(info2);
    content.appendChild(img);
    content.appendChild(div);
};

export default pageLoad;