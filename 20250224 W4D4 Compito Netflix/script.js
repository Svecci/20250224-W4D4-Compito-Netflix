function selectProfile(profileName) {
    localStorage.setItem('selectedProfile', profileName);
}

function updateProfileName(profile) {
    const profileNameElement = document.getElementById('profileName');
    if (profileNameElement) {
        profileNameElement.textContent = profile;
    }
}