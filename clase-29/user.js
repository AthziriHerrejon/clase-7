import Auth from "./auth.js";

function login () {
const user= document.getElementById("user");
const password = document.getElementById("password");
const data {
    user:user,
    password: password
};
};

function getLogin(Data){
    return fetch ("localhost:3000/users" , {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
    }