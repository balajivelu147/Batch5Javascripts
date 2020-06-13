// window.onload = function () {
//     document.getElementById("firstHeadId").style.backgroundColor = "grey";
//  // document.getElementsByClassName("firstHeadClass").style.backgroundColor = "grey";
//  let firstHead = document.getElementsByClassName("firstHeadClass");
//  Array.from(firstHead).forEach(element => {
//     element.style.backgroundColor = 'grey';
// });
// };


function newBalajiFunction() {
    alert("new repo");
}
    

function signup() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    var finalResult = `
{
    userName: ${userName},
    password: ${password}
}
`
    if (userName == '') {
        alert("please fill userName");
    } else if (password == '') {
        alert("please fill password");
    } else {

        alert(finalResult);
    }
}

function userName() {
    ///  console.log(document.getElementById("userName").removeEventListener());
}

function userNamedown() {
    console.log(document.getElementById("userNamedown").value);
}

function userNamepress() {
    console.log(document.getElementById("userNamepress").value);
}

// removeEventListener
















// window.onload = function () {
//     document.getElementById("firstHeadId").style.backgroundColor = "grey";
//  // document.getElementsByClassName("firstHeadClass").style.backgroundColor = "grey";
//  let firstHead = document.getElementsByClassName("firstHeadClass");
//  Array.from(firstHead).forEach(element => {
//     element.style.backgroundColor = 'grey';
// });
// };
