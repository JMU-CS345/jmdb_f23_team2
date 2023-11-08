function setup (){
    keyval = new Keyval(KEYVAL_API_KEY);
}

function draw (){
    user = localStorage.getItem(username);
    data = keyval.get(user, none, function(err){
    });
}