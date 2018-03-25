var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s10 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form action="" class="signup-form">
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only" href="">Iniciar sesion con facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up" href=""><i class="fa fa-facebook-official"></i>Iniciar sesion</a>
                </div>
                <div class="divider"></div>
                <input type="text" name="username" placeholder="Nombre de usuario">
                <input type="password" name="password" placeholder="Contraseña">
                <button class="btn waves-effect waves-light" type="submit">Inicia Sesion</button>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            ¿No Tienes una cuenta? <a href="/signup">Regístrate</a>
        </div>
    </div>
    </div>`
module.exports = landing(signinForm);