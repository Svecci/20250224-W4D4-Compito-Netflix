document.addEventListener('DOMContentLoaded', function() {
    const profileLinks = document.querySelectorAll('.profile-link');
    profileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const selectedProfile = this.getAttribute('data-profile');
            localStorage.setItem('selectedProfile', selectedProfile);
        });
    });

    const selectedProfile = localStorage.getItem('selectedProfile');
    if (selectedProfile) {
        document.getElementById('profilesDropdown').innerHTML = `<i class="fas fa-user"></i> ${selectedProfile}`;
    }
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true
});

function signOut() {
    alert('Sei uscito correttamente dal tuo account');
    window.location.href = 'signout.html';
}