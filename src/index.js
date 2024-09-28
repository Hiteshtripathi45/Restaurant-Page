import './styles.css';
function loadHomePage() {
    const content = document.querySelector('.content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';
    
    const description = document.createElement('p');
    description.textContent = 'The best food in town!';
    
    const image = document.createElement('img');
    image.src = 'your-image-path.jpg';
    image.alt = 'Delicious food';
    
    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(image);
  }
  
  loadHomePage();


  import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

document.getElementById('home-btn').addEventListener('click', loadHome);
document.getElementById('menu-btn').addEventListener('click', loadMenu);
document.getElementById('contact-btn').addEventListener('click', loadContact);

loadHome();
  