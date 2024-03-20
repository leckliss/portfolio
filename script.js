const GitIcon = document.getElementById('github');

GitIcon.addEventListener('mouseenter', function() {
    this.src = './assets/img/GitHubHover.svg'; 
});

GitIcon.addEventListener('mouseleave', function() {
    this.src = './assets/img/GitHub.svg';
});

const LinkedinIcon = document.getElementById('linkedin');

LinkedinIcon.addEventListener('mouseenter', function() {
    this.src = '../assets/img/LinkedinHover.svg'; 
});

LinkedinIcon.addEventListener('mouseleave', function() {
    this.src = './assets/img/Linkedin.svg';
});
