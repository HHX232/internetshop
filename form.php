<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $createSite = isset($_POST['create-site']) ? 'Да' : 'Нет';
    $name = $_POST['name'];
    $message = $_POST['message'];
    // Пример обработки загруженных файлов
    $uploadedFiles = $_FILES['file'];

    // Создаем тело письма
    $to = 'admin@studiweb0x.ru'; // Замените на ваш email
    $subject = 'Новая заявка с формы';
    $body = "Разработать сайт или интернет-магазин: $createSite\n";
    $body .= "Ваше имя: $name\n";
    $body .= "Сообщение: $message\n";

    // Отправляем письмо
    $headers = 'From: ' . $_POST['email'] . "\r\n" .
        'Reply-To: admin@studiweb0x.ru' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    $mailResult = mail($to, $subject, $body, $headers);

    if ($mailResult) {
        echo 'Данные успешно отправлены на почту';
    } else {
        echo 'При отправке данных произошла ошибка';
    }
}
?>
