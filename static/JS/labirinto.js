let l = 50
let w = 400
let h=400
let x
let y
x = 0 
y = 0

function clear() {
    background("black")
    x=0
    y = 0
}

function setup(){
createCanvas(w , h)
background("black")
stroke("white")
}

function draw(){
let r = random()

    if (r>0.5) {
        
        line(x + l, y, x, y + l)
    } 
    else 
    {
        line(x,y, x+l, y+l)
    }
    x=x+l

    if (x >= 400) {
        x = 0
        y = y+l
    }
}

let lInput = document.querySelector("[name = l]")
lInput.addEventListener("input" , function (e){
    clear()
})