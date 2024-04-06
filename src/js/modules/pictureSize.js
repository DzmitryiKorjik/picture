const pictureSize = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png'; //Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideImg (block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png'; //Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
        block.querySelectorAll('p').forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    })
};

export default pictureSize;