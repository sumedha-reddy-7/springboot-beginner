var currentUserIndex=1;
var userArray = [
    {"name": "John Doe", "gender": "Male", "image": "img/john_doe.png"},
    {"name": "Jane Doe", "gender": "Female", "image": "img/jane_doe.png"}
];

function toggleUser(){
    currentUserIndex=1-currentUserIndex;
    var nextUser= userArray[currentUserIndex];
    displayUser(nextUser);
}

function displayUser(user){
    document.getElementById("userImage").src=user.image;
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userGender").textContent = user.gender;
}