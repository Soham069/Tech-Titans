const toggleSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    content.classList.toggle('shift');
});
const videoUpload = document.getElementById('videoUpload');
const videoPlayer = document.getElementById('videoPlayer');

videoUpload.addEventListener('change', function() {
    const file = this.files[0];
    const fileURL = URL.createObjectURL(file);
    videoPlayer.src = fileURL;
});
// Change header background color on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('header').style.backgroundColor = '#555';
    } else {
        document.querySelector('header').style.backgroundColor = '#333';
    }
}
