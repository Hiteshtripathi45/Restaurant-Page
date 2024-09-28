export function loadMenu() {
    const content = document.querySelector('.content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
  
    const item = document.createElement('p');
    item.innerHTML = `
      <h1>Our Menu</h1>
      <p><strong>Grilled Chicken:</strong> Marinated in special herbs and spices - $15</p>
      <p><strong>Spaghetti Carbonara:</strong> Italian classic with creamy sauce - $12</p>
      <p><strong>Cheesecake:</strong> Classic New York-style cheesecake - $6</p>
    `;
  
    content.appendChild(headline);
    content.appendChild(item);
  }
  