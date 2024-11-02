function submitForm() {
    // Отобразить модальное окно
    document.getElementById('successModal').style.display = 'flex';

    // Очистить поля формы
    document.getElementById('subscriptionForm').reset();
}

function closeModal() {
    // Скрыть модальное окно
    document.getElementById('successModal').style.display = 'none';
}

// Получаем кнопки фильтров и элементы каталога
const filterButtons = document.querySelectorAll('.filter-button');
const catalogItems = document.querySelectorAll('.catalog-item');

// Тексты для каждой категории
const catalogInfoTexts = {
    all: "Выберите категорию, чтобы узнать больше о наших товарах.",
    gyro: "Гироскутеры: компактный транспорт для активного образа жизни и быстрой городской мобильности.",
    scooter: "Электросамокаты: удобный способ передвижения для ежедневных поездок.",
    segway: "Сигвеи: уникальное транспортное средство с самобалансировкой для комфортного передвижения."
};

// Функция для обновления информационного текста
function updateCatalogInfo(category) {
    const infoElement = document.getElementById("catalog-info");
    infoElement.textContent = catalogInfoTexts[category] || catalogInfoTexts.all;
}

// Функция для фильтрации элементов каталога
function filterCatalog(category) {
    catalogItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    // Обновляем информационный текст при фильтрации
    updateCatalogInfo(category);
}

// Устанавливаем слушатели событий на кнопки фильтров
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.filter;
        filterCatalog(category);
    });
});

// Инициализируем с фильтром "все"
filterCatalog('all');

document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});