<!DOCTYPE html>
<html lang="pt-Ao">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Cadastro | Portal de Turismo de Angola</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <style>
        /* Reutiliza o estilo form-card de login.php */
        .form-card {
            max-width: 400px;
            margin: 50px auto;
            padding: 30px;
            background: var(--card);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            text-align: center;
        }
        .form-card input {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
        .form-card .btn-primary {
            width: 100%;
            height: 45px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <main role="main">
        <section class="section alt">
            <div class="container">
                <div class="section-header">
                    <h2>Crie a sua Conta</h2>
                    <p>Junte-se ao Portal de Turismo de Angola e comece a planear.</p>
                </div>
                <div class="form-card">
                    <form action="login.php" method="POST">
                        <input type="text" name="name" placeholder="Nome Completo" required>
                        <input type="email" name="email" placeholder="Seu Email" required>
                        <input type="password" name="password" placeholder="Definir Senha" required>
                        <button type="submit" class="btn btn-primary">Registar</button>
                    </form>
                    <p style="margin-top: 20px;">Já tem conta? <a href="login.php">Entre aqui</a>.</p>
                </div>
            </div>
        </section>
    </main>
     
    </body>
</html>