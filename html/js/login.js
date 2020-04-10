
let mySelect = document.getElementsByClassName('userPw');

for (let i=0;i<mySelect.length;i++){
    mySelect[i].addEventListener ('keyup', function(e) {
        let user = document.getElementById('userName').value;
        let pw = document.getElementById('password').value;
        console.log(pw);
        console.log(user);
        console.log(e.keyCode);
        let activeColor = "rgb(0,149,246)";
        let inactiveColor = "rgba(178,223,252,90%)";
        if (e.keyCode !== 8 && user && pw) {
            document.getElementById('onlyButton').style.backgroundColor = activeColor;
        }
        else if (e.keyCode == 8 && (pw == "" || user =="")) {
            document.getElementById('onlyButton').style.backgroundColor = inactiveColor;
        }
    });
}

/*
document.getElementById('password').addEventListener ('keydown', function(e) {
    let user = document.getElementById('userName').value;
    let pw = document.getElementById('password').value;
    console.log(pw);
    console.log(user);
    console.log(e.keyCode);
    let activeColor = "rgb(0,149,246)";
    let inactiveColor = "rgba(178,223,252,90%)";
    if (e.keyCode !== 8 && user && pw) {
        document.getElementById('onlyButton').style.backgroundColor = activeColor;
    }
    else if (e.keyCode == 8 && pw == "") {
        document.getElementById('onlyButton').style.backgroundColor = inactiveColor;
    }
});

document.getElementById('userName').addEventListener('keydown', function(e){
    let user = document.getElementById('userName').value;
    let pw = document.getElementById('password').value;
    console.log(pw);
    console.log(user);
    console.log(e.keyCode);
    let activeColor = "rgb(0,149,246)";
    let inactiveColor = "rgba(178,223,252,90%)";
    if (e.keyCode !== 8 && user && pw) {
        document.getElementById('onlyButton').style.backgroundColor = activeColor;
    }
    else if (e.keyCode == 8 && user == "") {
        document.getElementById('onlyButton').style.backgroundColor = inactiveColor;
    }
})
*/