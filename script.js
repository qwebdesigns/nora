// Словарь для перевода с человеческого на крысиный
const humanToRat = {
    'а': 'пи', 
    'б': 'пИ', 
    'в': 'пип', 
    'г': 'пИп', 
    'д': 'пипи', 
    'е': 'пИпи', 
    'ё': 'пИпИ', 
    'ж': 'пипип', 
    'з': 'пИпип', 
    'и': 'пИпИп', 
    'й': 'пипИп', 
    'к': 'пипИпИ', 
    'л': 'пипипИ', 
    'м': 'пипипип', 
    'н': 'пИпипип', 
    'о': 'пИпИпип', 
    'п': 'пИпИпИп', 
    'р': 'пипИпИп', 
    'с': 'пипипИп', 
    'т': 'пипипипИ', 
    'у': 'пИпипипИ', 
    'ф': 'пИпипИпИ', 
    'х': 'пипИпипИ', 
    'ц': 'пипипИпип', 
    'ч': 'пипипипип', 
    'ш': 'пИпипипип', 
    'щ': 'пИпИпипип', 
    'ъ': 'пипипИпИп', 
    'ы': 'пипипипИп', 
    'ь': 'пипипипипИ', 
    'э': 'пИпипипипИ', 
    'ю': 'пипИпипипИ', 
    'я': 'пипипИпипИ', 
    'a': 'pi', 
    'b': 'pI', 
    'c': 'pip', 
    'd': 'pIp', 
    'e': 'pipi', 
    'f': 'pIpi', 
    'g': 'pIpI', 
    'h': 'pipip', 
    'i': 'pIpip', 
    'j': 'pIpIp', 
    'k': 'pipIp', 
    'l': 'pipIpI', 
    'm': 'pipipI', 
    'n': 'pipipip', 
    'o': 'pIpipip', 
    'p': 'pIpIpip', 
    'q': 'pIpIpIp', 
    'r': 'pipIpIp', 
    's': 'pipipIp', 
    't': 'pipipipI', 
    'u': 'pIpipipI', 
    'v': 'pIpipIpI', 
    'w': 'pipIpipI', 
    'x': 'pipipIpip', 
    'y': 'pipipipip', 
    'z': 'pIpipipip', 
    'A': 'pi', 
    'B': 'pI', 
    'C': 'pip', 
    'D': 'pIp', 
    'E': 'pipi', 
    'F': 'pIpi', 
    'G': 'pIpI', 
    'H': 'pipip', 
    'I': 'pIpip', 
    'J': 'pIpIp', 
    'K': 'pipIp', 
    'L': 'pipIpI', 
    'M': 'pipipI', 
    'N': 'pipipip', 
    'O': 'pIpipip', 
    'P': 'pIpIpip', 
    'Q': 'pIpIpIp', 
    'R': 'pipIpIp', 
    'S': 'pipipIp', 
    'T': 'pipipipI', 
    'U': 'pIpipipI', 
    'V': 'pIpipIpI', 
    'W': 'pipIpipI', 
    'X': 'pipipIpip', 
    'Y': 'pipipipip', 
    'Z': 'pIpipipip',
    '!': 'ppпиpp', 
    '@': 'ppпИpp', 
    '#': 'ppпипpp', 
    '$': 'ppпИпpp', 
    '%': 'ppпипиpp', 
    '^': 'ppпИпиpp', 
    '&': 'ppпИпИpp', 
    '*': 'ppпипипpp', 
    '(': 'ppпИпипpp', 
    ')': 'ppпИпИпpp', 
    '_': 'ppпипИпpp', 
    '+': 'ppпипИпИpp', 
    '-': 'ppпипипИpp', 
    '=': 'ppпипипипpp', 
    '{': 'ppпИпипипpp', 
    '}': 'ppпИпИпипpp', 
    '[': 'ppпИпИпИпpp', 
    ']': 'ppпипИпИпpp', 
    ':': 'ppпипипИпpp', 
    ';': 'ppпипипипИpp', 
    '"': 'ppпИпипипИpp', 
    '<': 'ppпИпипИпИpp', 
    '>': 'ppпипИпипИpp', 
    ',': 'ppпипипИпипpp', 
    '.': 'ppпипипипипpp', 
    '?': 'ppпИпипипипpp', 
    '/': 'ppпИпИпипипpp', 
    '|': 'ppпипипИпИпpp', 
    '0': 'iipиiipi', 
    '1': 'iipпIiipi', 
    '2': 'iipпипiipi', 
    '3': 'iipпИпiipi', 
    '4': 'iipпипиiipi', 
    '5': 'iipпИпИiipi', 
    '6': 'iipпипипiipi', 
    '7': 'iipпипИiipi', 
    '8': 'iipпИпипiipi', 
    '9': 'iipпИпИiipi',
    ' ': 'П'
};
// Словарь для перевода с крысиного на человеческий
const ratToHuman = Object.fromEntries(
    Object.entries(humanToRat).map(([key, value]) => [value, key])
);

// Массивы для хранения истории переводов
let humanHistory = [];
let ratHistory = [];

// Функция для перевода с человеческого на крысиный
function translateToRat() {
    const humanText = document.getElementById('human-text').value;
    const ratText = humanText
        .toLowerCase() // Приводим текст к нижнему регистру
        .split('') // Разбиваем текст на символы
        .map(char => humanToRat[char] || char) // Переводим каждый символ
        .join('пИИп') // Соединяем символы с разделителем "И"
        //.replace(/И\s*П/g, 'П'); // Заменяем разделитель между словами

    // Выводим результат
    document.getElementById('output-text').innerText = ratText;

    // Добавляем в историю ```javascript
    humanHistory.push(humanText); // Сохраняем оригинальный текст
    ratHistory.push(ratText); // Сохраняем переведенный текст
    updateHistory(); // Обновляем отображение истории
}

// Функция для перевода с крысиного на человеческий
function translateToHuman() {
    const ratText = document.getElementById('rat-text').value;
    const humanText = ratText
        .split('П') // Разбиваем текст на слова
        .map(word => word.split('пИИп').map(char => ratToHuman[char] || char).join('')) // Переводим каждое слово
        .join(' '); // Соединяем слова с пробелами

    // Выводим результат
    document.getElementById('output-text').innerText = humanText;

    // Добавляем в историю
    ratHistory.push(ratText); // Сохраняем оригинальный текст
    humanHistory.push(humanText); // Сохраняем переведенный текст
    updateHistory(); // Обновляем отображение истории
}

// Функция для обновления отображения истории переводов
function updateHistory() {
    const humanHistoryContainer = document.getElementById('human-history');
    const ratHistoryContainer = document.getElementById('rat-history');

    // Очищаем контейнеры
    humanHistoryContainer.innerHTML = '';
    ratHistoryContainer.innerHTML = '';

    // Заполняем историю переводов (в начало)
    humanHistory.forEach((text, index) => {
        const li = document.createElement('li');
        const now = new Date(); // Получаем текущее время
    
        // Форматируем часы, минуты и секунды
        const hours = String(now.getHours()).padStart(2, '0'); // Часы (двузначный формат)
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты (двузначный формат)
        const seconds = String(now.getSeconds()).padStart(2, '0'); // Секунды (двузначный формат)
    
        // Добавляем время перед текстом
        li.textContent = `[${hours}:${minutes}:${seconds}] ${text}`;
    
        // Вставляем элемент в начало контейнера
        humanHistoryContainer.prepend(li);
    });

    ratHistory.forEach((text, index) => {
        const li = document.createElement('li');
        const now = new Date(); // Получаем текущее время
    
        // Форматируем часы, минуты и секунды
        const hours = String(now.getHours()).padStart(2, '0'); // Часы (двузначный формат)
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты (двузначный формат)
        const seconds = String(now.getSeconds()).padStart(2, '0'); // Секунды (двузначный формат)
    
        // Добавляем время перед текстом
        li.textContent = `[${hours}:${minutes}:${seconds}] ${text}`;
    
        // Вставляем элемент в начало контейнера
        ratHistoryContainer.prepend(li); // Вставляем в начало
    });
}

// Функция для копирования текста в буфер обмена
function copyOutput() {
    const outputText = document.getElementById('output-text').innerText;

    // Проверяем, поддерживается ли navigator.clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(outputText)
            .then(() => {
                // Используем Toastify вместо alert
                Toastify({
                    text: "Текст скопирован в буфер обмена!",
                    duration: 3000, // Время отображения уведомления (в миллисекундах)
                    close: true, // Добавляем кнопку закрытия
                    gravity: "top", // Позиция уведомления (top, bottom)
                    position: "right", // Позиция уведомления (left, right, center)
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Цвет фона
                    stopOnFocus: true, // Останавливает автоматическое закрытие при наведении
                }).showToast();
            })
            .catch(err => {
                console.error('Ошибка при копировании текста: ', err);
                fallbackCopyText(outputText); // Используем fallback, если navigator.clipboard не сработал
            });
    } else {
        fallbackCopyText(outputText); // Используем fallback, если navigator.clipboard не поддерживается
    }
}

function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        // Используем Toastify вместо alert
        Toastify({
            text: "Текст скопирован в буфер обмена!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            stopOnFocus: true,
        }).showToast();
    } catch (err) {
        console.error('Ошибка при копировании текста: ', err);
        // Уведомление об ошибке
        Toastify({
            text: "Не удалось скопировать текст.",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
            stopOnFocus: true,
        }).showToast();
    }
    document.body.removeChild(textarea);
}


// Получаем элемент фона
const parallaxBackground = document.querySelector('.parallax-background');

// Функция для обновления позиции фона
function updateParallax(event) {
    const mouseX = event.clientX; // Положение курсора по оси X
    const mouseY = event.clientY; // Положение курсора по оси Y

    // Вычисляем смещение фона
    const offsetX = -(mouseX / window.innerWidth - 0.5) * 50; // Смещение по X (от -25px до 25px)
    const offsetY = -(mouseY / window.innerHeight - 0.5) * 50; // Смещение по Y (от -25px до 25px)

    // Применяем смещение к фону
    parallaxBackground.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Добавляем обработчик события движения мыши
window.addEventListener('mousemove', updateParallax);