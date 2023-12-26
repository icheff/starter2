function addTemplate(url, from, to, position) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = html;
      const sectionElement = tempElement.querySelector(from);

      if (!sectionElement) {
        console.error(`Element not found with selector: ${from}`);
        return;
      }

      const contentContainer = document.querySelector(to);
      if (!contentContainer) {
        console.error(`Element not found with selector: ${to}`);
        return;
      }

      if (position === 'top') {
        contentContainer.prepend(sectionElement.cloneNode(true));
      } else if (position === 'bottom') {
        contentContainer.appendChild(sectionElement.cloneNode(true));
      } else {
        console.error('Invalid position parameter. Use "top" or "bottom".');
      }
    })
    .catch(error => {
      console.error('Error loading external HTML file:', error);
    });
}

var parts = window.location.pathname.split('/');
// Remove the last element if it's empty or specific to a sub-page
if (parts[parts.length - 1] !== 'argent' && parts[parts.length - 1] !== '') {
  parts.pop();
}
// Find the index of 'argent' in the array to set as the base directory
var index = parts.indexOf('argent');
if (index !== -1) {
  parts = parts.slice(0, index + 1);
}

var basePath = window.location.origin + parts.join('/');

// Now your basePath should be correct for both root and sub-folders


// Add content to the beginning of the container
addTemplate(`${basePath}/header/index.html`, '.header', '.page', 'top');
// Add content to the end of the container
addTemplate(`${basePath}/footer/index.html`, '.footer', '.page', 'bottom');
// Add content to the end of the container
addTemplate(`${basePath}/sidebar/index.html`, '.sidebar', '.page', 'bottom');


function open_right_sidebar() {				
  document.getElementsByClassName("sidebar")[0].style.right = "0";
  document.getElementsByClassName("sidebar")[0].style.transition = "0.3s";
  
}

