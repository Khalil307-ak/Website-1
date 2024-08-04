document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const elements = document.querySelectorAll('[data-i18n]');
    
    function translatePage(lang) {
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = translations[lang][key] || key;
        });
    }

    languageSelect.addEventListener('change', function() {
        translatePage(this.value);
    });

    translatePage(languageSelect.value);
});
