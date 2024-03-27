import { renderPost } from './postGrid.js';

const sheetUrl = 'https://docs.google.com/spreadsheets/d/1G_HLaYS4lSJJTIMWktQF4NtR9abhaKR5dcCxVYWlDW0/tq?headers=1&tqx=out:json';
const loader = document.getElementById('loader');
const noMoreDataContainer = document.getElementById('noMoreData');
let nextPageToken = null;
let hasMoreData = true;

export function fetchData(pageToken = null) {
  if (!hasMoreData) return;

  const url = pageToken ? `${sheetUrl}&tqx=nextPageToken:${pageToken}` : sheetUrl;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      const parsedData = JSON.parse(data.substring(47, data.length - 2));
      const rows = parsedData.table.rows;
      nextPageToken = parsedData.nextPageToken;

      if (!nextPageToken) {
        hasMoreData = false;
      }

      const postElements = rows.map(row => {
        const thumbnail = row.c[0]?.v || '';
        const caption = row.c[1]?.v || '';
        const link = row.c[2]?.v || '';

        const postData = {
          thumbnail,
          caption,
          link,
        };

        return renderPost(postData);
      })
      
      loader.classList.add('hidden');
      if (!hasMoreData) {
        noMoreDataContainer.classList.remove('hidden');
      }
    })
    .catch(error => {
        if (error instanceof TypeError) {
          console.error('TypeError occurred while fetching data:', error.message);
          // Handle TypeError specific scenario
        } else if (error instanceof SyntaxError) {
          console.error('SyntaxError occurred while fetching data:', error.message);
          // Handle SyntaxError specific scenario
        } else {
          console.error('An error occurred while fetching data from Google Sheet:', error.message);
          // Handle other error scenarios
        }
        loader.classList.add('hidden');
      });
      
}

export function handleScroll() {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight && nextPageToken !== null && hasMoreData) {
    loader.classList.remove('hidden');
    fetchData(nextPageToken);
  }
}
