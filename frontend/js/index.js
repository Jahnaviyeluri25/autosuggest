//alert("Hello from JS");
console.log("Hello from JS !");

const profiles = {
    male : {img: "../images/john.png", name: "John Watson", gender: "Male"},
    female : {img: "../images/jane.png", name: "Jane William", gender: "Female"}
};

let currgen = "male";

const togglebtn = document.getElementById("user-card");

if(togglebtn){
    togglebtn.addEventListener("click", () =>{
        currgen = currgen === "male" ? "female" : "male";
        const selected = profiles[currgen];

        document.getElementById("user-img").src = selected.img;
        document.getElementById("user-name").textContent = selected.name;
        document.getElementById("user-gender").textContent = selected.gender;
    });
}