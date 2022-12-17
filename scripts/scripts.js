/*
Name: Cristina Duran
File: scripts.js
Date: December 15, 2022
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function

function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color =  "#f6eee4";
    }
}


//Function to display links to assignments
function week1() {
    var x = document.getElementById("div1");

    if(x.style.display === "none") {
       x.style.display = "block";
    }

    else {
       x.style.display = "none";
    }
}

function week2() {
    var x = document.getElementById("div2");

    if(x.style.display === "none") {
       x.style.display = "block";
    }

    else {
       x.style.display = "none";
    }
}

function week3() {
    var x = document.getElementById("div3");

    if(x.style.display === "none") {
       x.style.display = "block";
    }

    else {
       x.style.display = "none";
    }
}

function week4() {
    var x = document.getElementById("div4");

    if(x.style.display === "none") {
       x.style.display = "block";
    }

    else {
       x.style.display = "none";
    }
}

function week5() {
    var x = document.getElementById("div5");

    if(x.style.display === "none") {
       x.style.display = "block";
    }

    else {
       x.style.display = "none";
    }
}

function week6() {
    var x = document.getElementById("div6");

    if(x.style.display === "none") {
       x.style.display = "block";
    }

    else {
       x.style.display = "none";
    }
}

function week7() {
    var x = document.getElementById("div7");

    if(x.style.display === "none") {
       x.style.display = "block";
    }

    else {
        x.style.display = "none";
     }

}