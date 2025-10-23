const title = document.getElementById('title');
const tagline = document.getElementById('tagline');
const projects = document.getElementById('projects');
const projectItems = projects.querySelectorAll('p');

setTimeout(() => {
  title.style.opacity = '1';
}, 500);

setTimeout(() => {
  const logo = document.getElementById('logoVideo');
  logo.style.opacity = '1';
}, 3000);

setTimeout(() => {
  tagline.style.opacity = '1';
}, 5000);

setTimeout(() => {
  projects.classList.remove('hidden');
  projectItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 500);
  });
}, 6500);

setTimeout(() => {
  document.body.style.animation = 'fadeOut 3s forwards';
}, 16000);
