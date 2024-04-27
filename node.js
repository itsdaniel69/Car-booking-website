function loginfunction(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user==null){
        result.innerHTML = 'Wrong username';
    }
    else if(username==data.username && password==data.password){
        window.location.href="./Carlist.html";
    }
    else{
        result.innerHTML = 'Wrong Password';
    }

}

function signup(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = {
        username: username,
        password: password,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    sessionStorage.setItem(username,json);
    console.log('user added');
}