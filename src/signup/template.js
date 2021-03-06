var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

var signupForm = yo`<div class="col s10 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form action="/signup" method="POST" class="signup-form">
                <h2>${translate.message('signup.subheading')}</h2>
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only" href="">${translate.message('signup.facebook')}</a>
                    <a class="btn btn-fb hide-on-med-and-up" href=""><i class="fa fa-facebook-official"></i>${translate.message('signup.text')}</a>
                </div>
                <div class="divider"></div>
                <input type="email" name="email" placeholder="${translate.message('email')}">
                <input type="text" name="name" placeholder="${translate.message('fullname')}">
                <input type="text" name="username" placeholder="${translate.message('username')}">
                <input type="password" name="password" placeholder="${translate.message('password')}">
                <button class="btn waves-effect waves-light" type="submit">${translate.message('signup.call-to-action')}</button>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
            ${translate.message('signup.have-account')} <a href="/signin">${translate.message('signin')}</a>
        </div>
    </div>
    </div>`
module.exports = landing(signupForm);