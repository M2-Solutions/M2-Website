// Function to fetch and insert content
function includeHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching ' + url + ':', error);
        });
}

// Include header and footer
includeHTML('header-placeholder', 'header.html');
includeHTML('footer-placeholder', 'footer.html');