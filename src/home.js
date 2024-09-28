export function loadHome() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
  
    const description = document.createElement('p');
    description.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>We serve delicious food made with love, and we prioritize your satisfaction.</p>
    <p>Join us for an unforgettable dining experience!</p>
  `;
  
    content.appendChild(headline);
    content.appendChild(description);
  }
  