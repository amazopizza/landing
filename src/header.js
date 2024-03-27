export function renderHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.className = 'flex items-center mb-6';
  
    const profilePicture = document.createElement('img');
    profilePicture.className = 'w-16 h-16 rounded-full mr-4';
    profilePicture.src = 'https://lh3.googleusercontent.com/d/1MGKZjUtrZvEwnuVSiAEom4Bvf-RZJANi=w1000?authuser=0';
    profilePicture.alt = 'amazng.store';
  
    const headerDetails = document.createElement('div');
  
    const username = document.createElement('h1');
    username.className = 'text-2xl font-bold';
    username.textContent = 'amazng.store';
  
    const stats = document.createElement('div');
    stats.className = 'flex items-center mb-2';
  
    const postsCount = document.createElement('span');
    postsCount.className = 'mr-2';
    postsCount.textContent = '123 posts';
  
    const followersCount = document.createElement('span');
    followersCount.className = 'mr-2';
    followersCount.textContent = '456 followers';
  
    const followingCount = document.createElement('span');
    followingCount.textContent = '789 following';
  
    stats.appendChild(postsCount);
    stats.appendChild(followersCount);
    stats.appendChild(followingCount);
  
    const bio = document.createElement('p');
    bio.className = 'text-gray-600 mb-2';
    bio.textContent = '💡 Ingeniosos Productos ⭐ Calidad 🏡 Para el hogar 🔗https://www.tiktok.com/@amazng.store';
  
    const editProfileButton = document.createElement('a');
    editProfileButton.href = '#';
    editProfileButton.className = 'bg-gray-200 text-black px-2 py-1 rounded-md mr-2';
    editProfileButton.textContent = 'Edit Profile';
  
    const settingsIcon = document.createElement('i');
    settingsIcon.className = 'fas fa-cog';
  
    headerDetails.appendChild(username);
    headerDetails.appendChild(stats);
    headerDetails.appendChild(bio);
    headerDetails.appendChild(editProfileButton);
    headerDetails.appendChild(settingsIcon);
  
    headerContainer.appendChild(profilePicture);
    headerContainer.appendChild(headerDetails);
  
    const container = document.querySelector('.container');
    container.appendChild(headerContainer);
  }