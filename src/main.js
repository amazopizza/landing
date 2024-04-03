import { renderHeader } from './header.js';
import { renderPostGrid } from './postGrid.js';
import { fetchData, handleScroll } from './dataFetcher.js';


renderHeader();
renderPostGrid();
fetchData();

// Add scroll event listener for infinite scrolling
window.addEventListener('scroll', handleScroll);