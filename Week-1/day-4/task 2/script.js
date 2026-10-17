
const sayHeelo = () =>{
    let label = document.getElementById("value");
    let user = prompt("Enter Your name");
    label.innerText = `Hello ${user||"USER"}...👋👋`;
}
sayHeelo();