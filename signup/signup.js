window.onload = function () {
    document.getElementById("firstHeadId").style.backgroundColor = "grey";
 // document.getElementsByClassName("firstHeadClass").style.backgroundColor = "grey";
 let firstHead = document.getElementsByClassName("firstHeadClass");
 Array.from(firstHead).forEach(element => {
    element.style.backgroundColor = 'grey';
});
};


function newBalajiFunction() {
    alert("new repo");
}
    