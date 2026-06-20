
/*     * MY CODE *

const profiles = {
    male : {img: "../images/john.png", name: "John Watson", gender: "Male"},
    female : {img: "../images/jane.png", name: "Jane William", gender: "Female"}
};

let currgen = "male";

const togglebtn = document.getElementById("toggle-btn");

if(togglebtn){
    togglebtn.addEventListener("click", () =>{
        currgen = currgen === "male" ? "female" : "male";
        const selected = profiles[currgen];

        document.getElementById("user-img").src = selected.img;
        document.getElementById("user-name").textContent = selected.name;
        document.getElementById("user-gender").textContent = selected.gender;
    });
} */

var users = [          
    {
        "name" : "John Watson",
        "gender" : "Male",
        "img" : "/images/john.png"
    },
    {
        "name" : "Jane William",
        "gender" : "Female",
        "img" : "/images/jane.png"
    }
]

var currid = 0;
function toggle(){
    currid = (currid+1) % 2;
    var user = users[currid];
    document.getElementById("user-img").src = user.img;
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;

}