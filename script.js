window.onload = function () {

    const email = document.getElementById('e_mail');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('repeat_password');
    const agreeTerms = document.getElementById('checkbox_option');
    let popupBtn = document.getElementById('popupBtn');
    let btn = document.getElementById('btn');
    let fullName = document.getElementById('full_name');
    let link = document.getElementById('link');
    const form = document.getElementById('form');

    fullName.addEventListener('input', function () {
        this.value = this.value.replace(/\d/g, '');
    });

    let userName = document.getElementById('username');

    userName.addEventListener('input', function () {
        this.value = this.value.replace(/[.,]/g, '');
    });

    let checkbox = document.getElementById('checkbox_option');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });

    function registration(event) {
        event.preventDefault();

        if (!fullName.value) {
            alert('Заполните поле Full Name');
            return;
        }

        if (!userName.value) {
            alert('Заполните поле User Name');
            return;
        }

        if (!email.value) {
            alert('Заполните поле E-mail');
            return;
        }

        if (!validateEmail(email.value)) {
            alert('Введите корректный E-mail');
            return;
        }

        if (!password.value || password.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (password.value !== confirmPassword.value) {
            alert('Пароли не совпадают');
            return;
        }

        if (!document.getElementById('checkbox_option').checked) {
            alert('Необходимо согласиться с условиями использования');
            return;
        }

        document.getElementById('popup').style.display = 'block';
    }

    btn.addEventListener('click', registration);

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function changeForm() {
        popup.style.display = 'none';

        form.reset();

        userName.parentElement.remove();
        email.parentElement.remove();
        confirmPassword.parentElement.remove();
        agreeTerms.parentElement.remove();
        link.remove();

        document.getElementsByTagName('h2')[0].innerText = 'Войдите в систему';
        btn.innerText = 'Sing In';

        btn.removeEventListener('click', registration);
        btn.addEventListener('click', login);

    }

    popupBtn.addEventListener('click', changeForm);
    link.addEventListener('click', changeForm);

    function login(event) {
        event.preventDefault();

        if (!fullName.value) {
            alert('Заполните поле Full name');
            return false;
        }

        if (!password.value || password.value.length < 8) {
            alert('Пароль должен быть не менее 8 символов');
            return false;
        }
        alert('Добро пожаловать ' + fullName.value);
    }

}console.log('Hello from dev-2 branch');
