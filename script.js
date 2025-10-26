// OAuth login placeholder
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
  // Redirect to your OAuth page
  window.location.href = 'https://auth.itinerary.eu.org/';
});

// Dummy analytics fetch (replace with actual API calls)
document.addEventListener('DOMContentLoaded', () => {
  const followers = document.getElementById('followers');
  const views = document.getElementById('views');
  const loves = document.getElementById('loves');
  const favorites = document.getElementById('favorites');

  // Dummy data for now
  followers.textContent = 123;
  views.textContent = 4567;
  loves.textContent = 89;
  favorites.textContent = 10;
});
