export function loadContact() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
  
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = 
    `<p>Email: info@restaurant.com</p>
    <p>Phone: (555) 123-4567</p>
    <p>Address: 123 Food Street, Flavor Town</p>`;
  
    content.appendChild(headline);
    content.appendChild(contactInfo);
  }
  