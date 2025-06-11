    const contrastButton = document.getElementById('contrastButton');

    contrastButton.addEventListener('click', () => {
        const body = document.body;

        if (body.classList.contains('high-contrast-mode-0')) {
            body.classList.remove('high-contrast-mode-0');
            body.classList.add('high-contrast-mode-1');
        } else {
            body.classList.remove('high-contrast-mode-1');
            body.classList.add('high-contrast-mode-0');
        }
    });