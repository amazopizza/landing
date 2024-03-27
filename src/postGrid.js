export function renderPostGrid() {
    
    const container = document.querySelector('.container');

    const postGridContainer = document.createElement("div");

    postGridContainer.setAttribute('id', "postGrid");
    postGridContainer.className = "grid grid-cols-3 gap-4";

    container.appendChild(postGridContainer);
    // ... (code to create and append post grid elements) ...
  }
  
  export function renderPost(postData) {
    const { thumbnail, caption, link } = postData;

    const postGridContainer = document.getElementById('postGrid');
  
    const postElement = document.createElement('div');
    postElement.className = 'post';
  
    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';
  
    // const postAuthorPicture = document.createElement('img');
    // postAuthorPicture.src = 'https://picsum.photos/200';
    // postAuthorPicture.alt = 'Post Author';
  
    // const postAuthorUsername = document.createElement('span');
    // postAuthorUsername.textContent = 'Username postGrid';
  
    // postHeader.appendChild(postAuthorPicture);
    // postHeader.appendChild(postAuthorUsername);
  
    const postImage = document.createElement('a');
    postImage.href = link || '#';
    postImage.target = '_blank';
  
    const postThumbnail = document.createElement('img');
    postThumbnail.src = thumbnail;
    postThumbnail.alt = 'Post Thumbnail';
  
    postImage.appendChild(postThumbnail);
  
    const postOverlay = document.createElement('div');
    postOverlay.className = 'post-overlay';
  
    const postOverlayContent = document.createElement('div');
  
    const postLikes = document.createElement('span');
    postLikes.innerHTML = '<i class="far fa-heart mr-2"></i> 123 likes';
  
    const postComments = document.createElement('span');
    postComments.innerHTML = '<i class="far fa-comment mr-2"></i> View all 10 comments';
  
    postOverlayContent.appendChild(postLikes);
    postOverlayContent.appendChild(document.createElement('br'));
    postOverlayContent.appendChild(postComments);
  
    postOverlay.appendChild(postOverlayContent);
  
    const postFooter = document.createElement('div');
    postFooter.className = 'post-footer';
  
    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart';
  
    const commentIcon = document.createElement('i');
    commentIcon.className = 'far fa-comment';
  
    const shareIcon = document.createElement('i');
    shareIcon.className = 'far fa-paper-plane';
  
    const bookmarkIcon = document.createElement('span');
    bookmarkIcon.innerHTML = '<i class="far fa-bookmark"></i>';
  
    postFooter.appendChild(likeIcon);
    postFooter.appendChild(commentIcon);
    postFooter.appendChild(shareIcon);
    postFooter.appendChild(bookmarkIcon);
  
    const postStats = document.createElement('div');
    postStats.className = 'post-stats';
  
    const likesCount = document.createElement('span');
    likesCount.textContent = '123 likes';
  
    const postCaption = document.createElement('span');
    postCaption.textContent = caption;
  
    postStats.appendChild(likesCount);
    postStats.appendChild(postCaption);
  
    postElement.appendChild(postHeader);
    postElement.appendChild(postImage);
    postElement.appendChild(postOverlay);
    postElement.appendChild(postFooter);
    postElement.appendChild(postStats);

    postGridContainer.appendChild(postElement)
  
    return postElement;
  }