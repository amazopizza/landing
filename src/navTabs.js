export function renderNavTabs() {
    const navTabsContainer = document.createElement('div');
    navTabsContainer.className = 'flex mb-4';
  
    const postsTab = document.createElement('a');
    postsTab.href = '#';
    postsTab.className = 'mr-4 text-gray-600 hover:text-black';
    postsTab.innerHTML = '<i class="fas fa-th mr-2"></i> POSTS';
  
    const reelsTab = document.createElement('a');
    reelsTab.href = '#';
    reelsTab.className = 'mr-4 text-gray-400';
    reelsTab.innerHTML = '<i class="fas fa-tv mr-2"></i> REELS';
  
    const videosTab = document.createElement('a');
    videosTab.href = '#';
    videosTab.className = 'mr-4 text-gray-400';
    videosTab.innerHTML = '<i class="fas fa-play mr-2"></i> VIDEOS';
  
    const savedTab = document.createElement('a');
    savedTab.href = '#';
    savedTab.className = 'mr-4 text-gray-400';
    savedTab.innerHTML = '<i class="fas fa-bookmark mr-2"></i> SAVED';
  
    const taggedTab = document.createElement('a');
    taggedTab.href = '#';
    taggedTab.className = 'mr-4 text-gray-400';
    taggedTab.innerHTML = '<i class="fas fa-tag mr-2"></i> TAGGED';
  
    navTabsContainer.appendChild(postsTab);
    navTabsContainer.appendChild(reelsTab);
    navTabsContainer.appendChild(videosTab);
    navTabsContainer.appendChild(savedTab);
    navTabsContainer.appendChild(taggedTab);
  
    const container = document.querySelector('.container');
    container.insertBefore(navTabsContainer, document.getElementById('postGrid'));
  }