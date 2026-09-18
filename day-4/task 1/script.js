const CheckIsVoter = () =>{
    let age = Number(prompt("Enter your age"));
    let label = document.getElementById("value");
    if(age>18){
        label.innerText = "Are you eligibal for vote";
    }
    else{
        label.innerText = "You are not eligibal for vote";
    }
}
const AreaOfRectangle = () =>{
    let length = Number(prompt("Enter your length"));
    let width = Number(prompt("Enter your width"));
    let label = document.getElementById("value");
    label.innerText = `Area of rectangle = ${length * width}`;
}   

// console.log(CheckIsVoter(25));