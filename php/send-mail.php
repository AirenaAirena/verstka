<?php
// Получаем данные полей формы и удаляем пробелы.
	$name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$message = trim($_POST["message"]);
	$subject = trim($_POST["subject"]);
	$company = trim($_POST["company"]);
// Устанавливаем email адрес получателя.
	$recipient = "sumaykt12051981@gmail.com";
// Задаем тему письма.
// $subject = "Новая заявка от $name";
// Создаем содержимое письма.
	$email_content = "Name: $name \r\nEmail: $email \r\nSubject: $subject \r\nCompany: $company \r\nMessage: $message";
// Создаем заголовок письма.
	$email_headers = "From: $name <$email>";
// Отправляем письмо.
	mail($recipient, $subject, $email_content, $email_headers);
	?>