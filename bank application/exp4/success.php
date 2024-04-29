<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank Application Form - Success</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url("bankimg1.avif");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: 100% 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
        }

        .container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 600px;
            width: 100%;
        }

        h1 {
            color: #3996ec;
        }

        p {
            margin: 10px 0;
        }

        strong {
            color: #333;
        }

        .back-link {
            display: block;
            margin-top: 20px;
            text-decoration: none;
            color: #3996ec;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Bank Application Form - Submitted Data</h1>

    <?php
    echo "<p><strong>First Name:</strong> " . $_GET["firstName"] . "</p>";
    echo "<p><strong>Last Name:</strong> " . $_GET["lastName"] . "</p>";
    echo "<p><strong>Account Number:</strong> " . $_GET["accountNumber"] . "</p>";
    echo "<p><strong>Balance:</strong> " . $_GET["balance"] . "</p>";
    echo "<p><strong>PIN:</strong> " . $_GET["pin"] . "</p>";
    echo "<p><strong>Confirm PIN:</strong> " . $_GET["confirmPin"] . "</p>";
    ?>

    <a href="exp4.html" class="back-link">Back to Form</a>
</div>

</body>
</html>
