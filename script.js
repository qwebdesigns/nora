// Словарь для перевода с человеческого на крысиный
const humanToRat = {
    // Буквы (как в предыдущем примере)
    'а': 'пи', 'б': 'ппи', 'в': 'пип', 'г': 'ппип', 'д': 'пипи',
    'е': 'ппипи', 'ё': 'пипип', 'ж': 'ппипип', 'з': 'пипипи',
    'и': 'ппипипи', 'й': 'пипипип', 'к': 'ппипипип',
    'л': 'пипипипи', 'м': 'ппипипипи', 'н': 'пипипипип',
    'о': 'ппипипипип', 'п': 'пипипипипи', 'р': 'ппипипипипи',
    'с': 'пипипипипип', 'т': 'ппипипипипип', 'у': 'пипипипипипи',
    'ф': 'ппипипипипипи', 'х': 'пипипипипи2пип', 'ц': 'ппипипипипипип',
    'ч': 'пипипипипипипи', 'ш': 'ппипипипипипипи', 'щ': 'пипипипипипип',
    'ъ': 'ппипипипипипипип', 'ы': 'пипипипипипипипи', 'ь': 'ппипипипипипипипи',
    'э': 'пипипипипипипипип', 'ю': 'ппипипипипипипипип', 'я': 'пипипипипипипипипи',
    ' ': 'П', // Пробел разделяет слова
    'А': 'пиИ', 'Б': 'ппиИ', 'В': 'пипИ', 'Г': 'ппипИ', 'Д': 'пипиИ',
    'Е': 'ппипиИ', 'Ё': 'пипипИ', 'Ж': 'ппипипИ', 'З': 'пипипиИ',
    'И': 'ппипипиИ', 'Й': 'пипипипИ', 'К': 'ппипипипИ',
    'Л': 'пипипипиИ', 'М': 'ппипипипиИ', 'Н': 'пипипипипИ',
    'О': 'ппипипипипИ', 'П': 'пипипипипиИ', 'Р': 'ппипипипипиИ',
    'С': 'пипипипипипИ', 'Т': 'ппипипипипипИ', 'У': 'пипипипипипиИ',
    'Ф': 'ппипипипипипиИ', 'Х': 'пипипипипипипИ', 'Ц': 'ппипипипипипипИ',
    'Ч': 'пипипипипипипиИ', 'Ш': 'ппипипипипипипиИ', 'Щ': 'пипипипипипипипИ', 'Ъ': 'ппипипипипипипипИ', 'Ы': 'пипипипипипипипиИ', 'Ь': 'ппипипипипипипипиИ', 'Э': 'пипипипипипипипипИ', 'Ю': 'ппипипипипипипипипИ', 'Я': 'пипипипипипипипипи',
    '(': 'piip', 
    ')': 'ipip', 
    '[': 'pipp', 
    ']': 'ippi', 
    '{': 'pipi', 
    '}': 'ipii', 
    '+': 'ppii', 
    '-': 'ippii', 
    '*': 'pipip', 
    '/': 'ipipi', 
    '=': 'ppip', 
    '!': 'ipipp', 
    '?': 'pipii', 
    '@': 'ipipip', 
    '#': 'pipipi', 
    '$': 'ipipii', 
    '%': 'pipipp', 
    '^': 'ipippi', 
    '&': 'pipipip', 
    '_': 'ipipipi',

    '0': 'Лапка', 
    '1': 'Огого', 
    '2': 'АВАХВАВХАВХАВХАВА', 
    '3': 'крейзя', 
    '4': 'Сыр', 
    '5': 'Глазик',
    '6': 'Рус', 
    '7': 'Датычё', 
    '8': 'нора', 
    '9': 'агага'
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
        .split('') // Разбиваем текст на символы
        .map(char => humanToRat[char] || char) // Переводим каждый символ
        .join('И') // Соединяем символы с разделителем "И"
        .replace(/И\s*П/g, 'П'); // Заменяем разделитель между словами

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
        .map(word => word.split('И').map(char => ratToHuman[char] || char).join('')) // Переводим каждое слово
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
        const hours = String(now.getHours()).padStart(2, '0'); // Часы (двузначный формат)
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты (двузначный формат)
        li.textContent = `[${hours}:${minutes}] ${text}`; // Добавляем время перед текстом
        humanHistoryContainer.prepend(li); // Вставляем в начало
    });

    ratHistory.forEach((text, index) => {
        const li = document.createElement('li');
        const now = new Date(); // Получаем текущее время
        const hours = String(now.getHours()).padStart(2, '0'); // Часы (двузначный формат)
        const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты (двузначный формат)
        li.textContent = `[${hours}:${minutes}] ${text}`; // Добавляем время перед текстом
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
                alert('Текст скопирован в буфер обмена!');
            })
            .catch(err => {
                console.error('Ошибка при копировании текста: ', err);
                fallbackCopyText(outputText); // Используем fallback, если navigator.clipboard не сработал
            });
    } else {
        fallbackCopyText(outputText); // Используем fallback, если navigator.clipboard не поддерживается
    }
}

// Fallback метод для копирования текста
function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        alert('Текст скопирован в буфер обмена!');
    } catch (err) {
        console.error('Ошибка при копировании текста: ', err);
        alert('Не удалось скопировать текст.');
    }
    document.body.removeChild(textarea);
}