
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.filter;

      const filters = document.querySelectorAll('.filter');

      if (value === 'all') {
        filters.forEach(filter => {
          filter.style.display = 'block';
          filter.style.transition = 'opacity 1s'; // Add transition for smooth animation
          filter.style.opacity = 1;
        });
      } else {
        filters.forEach(filter => {
          if (filter.classList.contains(value)) {
            filter.style.display = 'block';
            filter.style.transition = 'opacity 1s'; // Add transition for smooth animation
            filter.style.opacity = 1;
          } else {
            filter.style.display = 'none';
          }
        });
      }

      // Remove active class from other buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
