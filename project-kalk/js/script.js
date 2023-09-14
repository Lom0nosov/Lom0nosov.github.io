function generateRandomNumber() {
    var minValueInput = document.getElementById('min');
    var maxValueInput = document.getElementById('max');
    var outputResult = document.getElementById('result');

    var minValue = parseInt(minValueInput.value);
    var maxValue = parseInt(maxValueInput.value);

    // Проверяем, что значения валидны
    if (isNaN(minValue) || isNaN(maxValue)) {
        outputResult.textContent = 'Пожалуйста, введите числовые значения в оба поля.';
    } else if (minValue >= maxValue) {
        outputResult.textContent = 'Минимальное значение должно быть меньше максимального.';
    } else {
        // Генерируем случайное число между minValue и maxValue
        var randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        outputResult.textContent = 'Случайное число: ' + randomNumber;
        resultHeading.style.display = 'block';
    }
}