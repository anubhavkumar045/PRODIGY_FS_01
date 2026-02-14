// Shared utility functions for all pages

// Check if user is authenticated
function isAuthenticated() {
  return localStorage.getItem('authToken') !== null;
}

// Get stored token
function getToken() {
  return localStorage.getItem('authToken');
}

// Store token
function storeToken(token) {
  localStorage.setItem('authToken', token);
}

// Remove token
function removeToken() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userName');
}

// Redirect to login if not authenticated
function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = 'login.html';
  }
}

// Redirect to dashboard if already authenticated
function redirectIfAuthenticated() {
  if (isAuthenticated()) {
    window.location.href = 'dashboard.html';
  }
}
