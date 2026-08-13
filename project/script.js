console.log("javascript is connected");

let year=new Date().getFullYear();
document.querySelector(".site-footer p").innerHTML=
`&copy; ${year}A yeshwanth all rights are reserved `

function getgreeting(){
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    return greeting;
}
let hero=document.querySelector(".hero-section h1");
if(hero){
    hero.textContent=getgreeting()},i'm a yeshwanth✌️
}