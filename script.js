// Get the header element
const header = document.querySelector('header');

// Change background color on hover
header.addEventListener('mouseover', function() {
  header.style.backgroundColor = '#388e3c';
});

// Change background color back to original on mouseout
header.addEventListener('mouseout', function() {
  header.style.backgroundColor = '#4CAF50';
});
