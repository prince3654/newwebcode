// let course = [
//     { no : 1 , naam: "prince"},
//     {no : 2 , naam: "roshan"}
// ];

// let course1 = course.find(function coursefun(course) {
//     return course.naam == 'prince'; 
// })

// console.log(course1);
let print = console.log;
let div1 = document.querySelector("#divison");
div1.addEventListener("click" ,(event)=>{
    if(event.target.nodeName === 'SPAN'){
        console.log("span is clicked"+event.target.textContent);
    }
    else{
        print("Clicked on div"+event.target.textContent);
    }
})