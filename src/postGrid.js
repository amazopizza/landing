export function renderPostGrid() {
    const container = document.querySelector('.container');

    const postGridContainer = document.createElement("div");

    postGridContainer.setAttribute('id', "postGrid");
    postGridContainer.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2";

    container.appendChild(postGridContainer);
  }
  
  export function renderPost(postData) {
    const { thumbnail, caption, link } = postData;

    const postGridContainer = document.getElementById('postGrid');
    
    const postElement = document.createElement('a');
    postElement.href = link || '#';
    postElement.target = '_blank';
    postElement.className = 'post rounded border border-grey-100 p-2';
  
    const postThumbnail = document.createElement('img');
    postThumbnail.src = thumbnail;
    postThumbnail.alt = 'Post Thumbnail';
  
    const postOverlay = document.createElement('h3');
    postOverlay.className = 'description';
    postOverlay.textContent = caption;
    
    postElement.appendChild(postThumbnail);
    postElement.appendChild(postOverlay);

    postGridContainer.appendChild(postElement)
  
    return postElement;
  }