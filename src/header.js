export function renderHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.className = 'flex items-center my-12';
  
    const profilePicture = document.createElement('img');
    profilePicture.className = 'w-20 h-20 rounded-full mr-4';
    profilePicture.src = 'https://lh3.googleusercontent.com/d/1MGKZjUtrZvEwnuVSiAEom4Bvf-RZJANi=w1000?authuser=0';
    profilePicture.alt = 'amazng.store';
  
    const headerDetails = document.createElement('div');
  
    const username = document.createElement('h1');
    username.className = 'text-2xl font-bold';
    username.textContent = 'Ana C. Diaz (@amazng.store)';
  
    const bio = document.createElement('h2');
    bio.className = 'text-gray-600 my-2';
    bio.textContent = '🏡 Transforming homes with smart technology and cool gadgets ⭐ Shop our curated collection of innovative devices 💡 Genius Products';
  
    const linkBio = document.createElement('a');
    linkBio.href = "https://www.tiktok.com/@amazng.store";
    linkBio.target = '_blank';
    linkBio.textContent = '🔗 tiktok.com/@amazng.store'
  
    headerDetails.appendChild(username);
    headerDetails.appendChild(bio);
    headerDetails.appendChild(linkBio);
  
    headerContainer.appendChild(profilePicture);
    headerContainer.appendChild(headerDetails);
  
    const container = document.querySelector('.container');
    container.appendChild(headerContainer);
  }