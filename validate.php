<?php
header('Content-Type: application/json');

// Senha correta (armazenada no servidor)
$correctPassword = "PNWormer";

// Recebe os dados do frontend
$data = json_decode(file_get_contents('php://input'), true);
$password = $data['password'];

// Valida a senha
if ($password === $correctPassword) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>