class Auth {
    constructoor () {
        this.authenticated= false;
}

login (data, callback) {
this.authenticated=true;
callback();
}

logout (callback) {
    this.authenticated=false;
    callback();
}
isAuth(){
    if(this.authenticated){
} else {
    this.authenticated=false;
}

return this.authenticated;
}
}