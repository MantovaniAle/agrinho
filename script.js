    const contrastButton = document.getElementById('contrastButton');

    contrastButton.addEventListener('click', () => {
        const body = document.body;

        if (body.classList.contains('high-contrast-mode-dark')) {
            body.classList.remove('high-contrast-mode-dark');
            body.classList.add('high-contrast-mode');
        } else {
            body.classList.remove('high-contrast-mode');
            body.classList.add('high-contrast-mode-dark');
        }
    });