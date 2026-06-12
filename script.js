// DOM Elements
const btn = document.getElementById('openBtn');
const landing = document.getElementById('landing');
const akte = document.getElementById('akte');
const closeBtn = document.getElementById('closeBtn');

// User Data (bearbeitbar)
const userData = {
  name: 'Max Mustermann',
  age: 25,
  discord: 'Max#0001',
  department: 'Weazel News',
  position: 'Director of Press',
  userId: '00000',
  history: 'Hier kommt deine Geschichte hinein. Teile deinen beruflichen Werdegang und deine Erfahrungen bei Weazel News mit.',
  profile: 'Hier kommt dein Profil hinein. Beschreibe deine Stärken, Fähigkeiten und was dich als Director of Press auszeichnet.',
  skills: ['Kommunikation', 'Journalismus', 'Leadership', 'Medienmanagement', 'Kreativität', 'Teamfähigkeit']
};

// Initialize data on page load
window.addEventListener('DOMContentLoaded', () => {
  updateUserData();
  setupSmoothScroll();
});

// Update user data in DOM
function updateUserData() {
  document.getElementById('userName').textContent = userData.name;
  document.getElementById('userId').textContent = userData.userId;
  document.getElementById('fullName').textContent = userData.name;
  document.getElementById('age').textContent = userData.age;
  document.getElementById('discord').textContent = userData.discord;
  document.getElementById('department').textContent = userData.department;
  document.getElementById('position').textContent = userData.position;
  document.getElementById('historyText').textContent = userData.history;
  document.getElementById('profileText').textContent = userData.profile;
  
  // Add skills
  const skillsContainer = document.getElementById('skills');
  skillsContainer.innerHTML = '';
  userData.skills.forEach(skill => {
    const skillEl = document.createElement('div');
    skillEl.className = 'skill';
    skillEl.textContent = skill;
    skillsContainer.appendChild(skillEl);
  });
}

// Open Akte
btn.onclick = () => {
  landing.style.display = 'none';
  akte.style.display = 'block';
  window.scrollTo(0, 0);
};

// Close Akte
closeBtn.onclick = (e) => {
  e.preventDefault();
  akte.style.display = 'none';
  landing.style.display = 'flex';
  window.scrollTo(0, 0);
};

// Smooth scroll for navigation links
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('nav a:not(.close-btn)');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Optional: Funktion zum Bearbeiten der Benutzerdaten
function editUserData(key, value) {
  if (userData.hasOwnProperty(key)) {
    userData[key] = value;
    updateUserData();
    console.log(`${key} updated to:`, value);
  }
}

// Export für externe Nutzung
window.editUserData = editUserData;
window.userData = userData;
