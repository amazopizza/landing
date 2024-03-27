import { renderHeader } from './header.js';
import { renderNavTabs } from './navTabs.js';
import { renderPostGrid } from './postGrid.js';
import { fetchData, handleScroll } from './dataFetcher.js';


// Render the header
renderHeader();

// Render the navigation tabs
renderNavTabs();

renderPostGrid();

// Render the initial post grid
fetchData();

// Add scroll event listener for infinite scrolling
window.addEventListener('scroll', handleScroll);