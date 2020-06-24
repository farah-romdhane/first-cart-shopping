var total = document.querySelector("#total")

var buttonDelete = document.getElementsByClassName("fa-times")

Array.from(buttonDelete).map((el) => {
    el.addEventListener("click" , ()=> {
        el.parentElement.remove()
    })
})
var plus = document.getElementsByClassName("fa-plus")
Array.from(plus).map((el) => {
    el.addEventListener("click" , () => {
        el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1
        var price = el.parentElement.nextElementSibling.innerHTML.replace("$" , "")
        total.innerHTML = parseInt(total.innerHTML)+ parseInt(price)
        console.log(price)
        
    })
} )
var minus = document.getElementsByClassName("fa-minus")
Array.from(minus).map((el) => {
    el.addEventListener("click" , () => {
        if(el.previousElementSibling.innerHTML != 0){
        el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) - 1
        var price = el.parentElement.nextElementSibling.innerHTML.replace("$" , "")
        total.innerHTML = parseInt(total.innerHTML) - parseInt(price)

    }
        
        
    })
} )
var heart = document.getElementsByClassName("fa-heart")
Array.from(heart).map((el) => {
    el.addEventListener("click", ()=> {
        // if(el.style.color === "red"){el.style.color = "black"}
        // else {el.style.color = "red"}
   
        el.classList.toggle("red")
    })

})

// function multiplication(,)


// console.log(buttonDelete)

// function add(){

// }
// //arrow function
// () => {
    
// }

// [1 , 2 , 3]
// arr[2]