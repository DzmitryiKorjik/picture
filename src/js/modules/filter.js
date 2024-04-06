const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const items = menu.querySelectorAll('li');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const no = document.querySelector('.portfolio-no');
    const filters = {
        '.all': wrapper.querySelectorAll('.all'),
        '.lovers': wrapper.querySelectorAll('.lovers'),
        '.chef': wrapper.querySelectorAll('.chef'),
        '.girl': wrapper.querySelectorAll('.girl'),
        '.guy': wrapper.querySelectorAll('.guy'),
        '.grandmother': [],
        '.granddad': []
    };

    const typeFilter = (markType) => {
        Object.values(filters).forEach(markGroup => {
            markGroup.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');
            });
        });

        if (markType && markType.length > 0) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName === 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            const filterClass = '.' + target.classList[0];
            typeFilter(filters[filterClass]);
        }
    });
};

export default filter;

