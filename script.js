const redirectButton = document.getElementById('redirect-button');
const videoLinkInput = document.getElementById('video-link');

redirectButton.addEventListener('click', () => {
    const videoLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    window.location.href = videoLink;
});
