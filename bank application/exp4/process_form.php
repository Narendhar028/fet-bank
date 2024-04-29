<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $accountNumber = $_POST["accountNumber"];
    $balance = $_POST["balance"];
    $pin = $_POST["pin"];
    $confirmPin = $_POST["confirmPin"];
    $queryString = "firstName=$firstName&lastName=$lastName&accountNumber=$accountNumber&balance=$balance&pin=$pin&confirmPin=$confirmPin";
    echo $queryString;
} else {
    echo "Invalid request";
}
?>
