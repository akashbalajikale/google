function searchGoogle() {
    const query = document.getElementById('search').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

function feelingLucky() {
    window.location.href = 'https://www.google.com/doodles';
}
