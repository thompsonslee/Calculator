const fourbyfour = document.getElementById("fourbyfour")
const thescreen = document.getElementById("screen")
const thetopscreen = document.getElementById("topscreen")
const clearbutton = document.getElementById("clear")
const deletebutton = document.getElementById("delete")

clearbutton.innerText = "Clear"
clearbutton.addEventListener("click",function(){
    thetopscreen.innerHTML = ""
    thescreen.innerHTML = ""
    storingNumbers = []
    storingArray = []
})
deletebutton.innerText = "delete"
deletebutton.addEventListener("click",function(){
    if (storingNumbers.length > 0){
        storingNumbers.pop()
        thescreen.innerHTML = thescreen.innerHTML.slice(0,-1)
    }
})
const numgen = [7,8,9,"/",4,5,6,"x",1,2,3,"-",".",0,"=","+"]
let numgenindex = 0
let storingNumbers =[]
let storingArray = []

for (let i =0 ; i<4 ; i++){
    let columndivs = document.createElement("div")
    columndivs.setAttribute("class","column")
    for(let i=0 ; i<4 ; i++){

        let rowdivs = document.createElement("div")

        let thenumber = document.createTextNode(numgen[numgenindex])
        rowdivs.appendChild(thenumber)
        let datavalue =numgen[numgenindex]

        rowdivs.addEventListener("click", function(e){
            sendToStorage(datavalue)
        })

        rowdivs.setAttribute("class", "row")

        columndivs.appendChild(rowdivs)
        numgenindex ++
    }
    fourbyfour.appendChild(columndivs)
}

function sendToStorage(item){
    switch (item){
        case ".":
            if (storingNumbers.includes(".") === false){
                storingNumbers.push(item)
                thescreen.innerHTML += item
            }
            break
        case "+":
        case "-":
        case "x":
        case "/":
            sendToArray(item)
            break
        case "=":
            if (storingNumbers.length != 0){
                let arraytostring = storingNumbers.join("")
                let stringtofloat = parseFloat(arraytostring)
                storingNumbers = []
                storingArray.push(stringtofloat)
                console.log(storingArray)
                thetopscreen.innerHTML = storingArray.join(" ")
                equals()
            }
                break
        default:
            storingNumbers.push(item)
            thescreen.innerHTML += item
    }
}
function sendToArray(item){
    if (storingNumbers.length === 0){
        storingArray[storingArray.length - 1] = item  
        thetopscreen.innerHTML = storingArray.join (" ")
    }
    else {
        let arraytostring = storingNumbers.join("")
        let stringtofloat = parseFloat(arraytostring)
        storingNumbers = []
        thescreen.innerHTML = ""
        storingArray.push(stringtofloat)
        storingArray.push(item)
        thetopscreen.innerHTML = storingArray.join(" ")
    }
}
function equals(){
    while (storingArray.includes ("/") === true){
        addingtogether("/")
    }
    while (storingArray.includes ("x") === true){
        addingtogether("x")
    }
    while (storingArray.includes ("+") || storingArray.includes("-") === true){
        for (let i = 0 ; i < storingArray.length ; i++){
            if (storingArray[i] === "+" || storingArray[i] === "-"){
                addingtogether(storingArray[i])
                break
            }
        }
    }
  
    function addingtogether(operation){
        let whereX = storingArray.indexOf(operation)

        let before = storingArray[whereX-1]
        let beforeind = whereX-1
        storingArray[beforeind] = "removed"

        let after = storingArray[whereX+1]
        let afterind = whereX+1
        storingArray[afterind] = "removed"
        let together
        switch(operation){
            case "x":
                together = before * after
                break
            case "/":
                together = before / after
                break
            case "+":
                together = before + after
                break
            case "-":
                together = before - after
            break
        }
        storingArray[whereX] = together

        storingArray.splice(afterind,1)
        storingArray.splice(beforeind,1)
    }
    let result = storingArray.toString()
    storingArray = []
    thescreen.innerHTML = result
    storingNumbers = (Array.from(result))
    console.log(result)
}