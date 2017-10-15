var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s10 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form action="" class="signup-form">
                <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only" href="">Iniciar sesion con facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up" href="">Iniciar sesion</a>
                </div>
                <div class="divider"></div>
                <input type="email" name="email" placeholder="Correo electronico">
                <input type="text" name="name" placeholder="Nombre completo">
                <input type="text" name="username" placeholder="Nombre de usuario">
                <input type="password" name="password" placeholder="Contraseña">
                <button class="btn waves-effect waves-light" type="submit">Registrarte</button>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            ¿Tienes una cuenta? <a href="/signin">Entrar</a>
        </div>
    </div>
    </div>`
module.exports = landing(signupForm);