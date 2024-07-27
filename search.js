// search.js
document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('query');
    const resultsContainer = document.getElementById('results');
    const searchQueryElement = document.getElementById('search-query');

    if (query) {
        searchQueryElement.textContent = `Hasil pencarian untuk: "${query}"`;

        let resultText = '';

        // Cek query dan tentukan teks yang sesuai
        switch (query.toLowerCase()) {
            case 'babi':
                resultText = 'Gada Babi Disini Sayang.';
                break;
            case 'anjing':
                resultText = 'Apasi anjing, ngegas amat.';
                break;
            default:
                resultText = 'Tidak ada hasil ditemukan.';
                break;
        }

        // Menampilkan teks sesuai query
        resultsContainer.textContent = resultText;
    } else {
        resultsContainer.textContent = 'Query pencarian tidak ditemukan.';
    }
});