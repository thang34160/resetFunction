let count = 0;

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function resetCount() {
    count = 0;
    displayCount(); // Mettez à jour l'affichage après avoir réinitialisé
}

function checkCountValue() {
    if (count === 0) {
        alert("Your insta count has been reset!");
    }
}

function increaseCount() {
    count++;
    displayCount();
}