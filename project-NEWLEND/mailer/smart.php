<?php 

$name = $_POST['name1'];
$phone = $_POST['phone1'];
$email = $_POST['email1'];
$messenger = $_POST['messenger1'];
$name2 = $_POST['name2'];
$phone2 = $_POST['phone2'];
$email2 = $_POST['email2'];
$messenger2 = $_POST['messenger2'];

require_once('/home/l/linesuvg/chinaopt.online/public_html/mailer/phpmailer/phpmailerautoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'zelenova.denis@yandex.ru';                 // Наш логин
$mail->Password = 'zggydrqtyiaubkoa';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('zelenova.denis@yandex.ru', 'Данные');   // От кого письмо 
$mail->addAddress('linesuccess.g@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
        Пользователь оставил данные - Доставка любых грузов <br> 
    ФИО: ' . $name . ' <br>
    Номер телефона: ' . $phone . '<br>
    E-mail: ' . $email . ' <br>
    Мессенджер: ' . $messenger . ' <br>
        Пользователь оставил данные - Бизнес поездки в Китай <br> 
    ФИО: ' . $name2 . ' <br>
    Номер телефона: ' . $phone2 . '<br>
    E-mail: ' . $email2 . ' <br>
    Мессенджер: ' . $messenger2 . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>