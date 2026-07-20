 const btnAmanda = document.getElementById('btn-amanda');
        const btnBlackbird = document.getElementById('btn-blackbird');
        const listAmanda = document.getElementById('list-amanda');
        const listBlackbird = document.getElementById('list-blackbird');

        btnAmanda.addEventListener('click', () => {
            btnAmanda.classList.add('active');
            btnBlackbird.classList.remove('active');
            listAmanda.style.display = 'block';
            listBlackbird.style.display = 'none';
        });

        btnBlackbird.addEventListener('click', () => {
            btnBlackbird.classList.add('active');
            btnAmanda.classList.remove('active');
            listBlackbird.style.display = 'block';
            listAmanda.style.display = 'none';
        });