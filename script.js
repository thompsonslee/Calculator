const fourbyfour = document.getElementById("fourbyfour")
const numgen = [7,8,9,"/",4,5,6,"x",1,2,3,"-",".",0,"=","+"]
const classset = [7,8,9,"divide",4,5,6,"multi",1,2,3,"subtract",".",0,"equals","addition"]
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
        let datavalue =classset[numgenindex]

        rowdivs.addEventListener("click",
        e => e.target.classList.add("clicked",classset))

        rowdivs.addEventListener("click", function(){
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
        case "addition":
            sendToArray(item)
            break
        case "subtract":
            sendToArray(item)
            break
        case "multi":
            sendToArray(item)
            break
        case "divide":
            sendToArray(item)
            break
        case "equals":
            let arraytostring = storingNumbers.join("")
            let stringtofloat = parseFloat(arraytostring)
            storingNumbers = []
            storingArray.push(stringtofloat)
            console.log(storingArray)
            equals()
        default:
            storingNumbers.push(item)
    }
}
function sendToArray(item){
    let arraytostring = storingNumbers.join("")
    let stringtofloat = parseFloat(arraytostring)
    storingNumbers = []
    storingArray.push(stringtofloat)
    storingArray.push(item)
}
function equals(){
    while (storingArray.includes ("divide") === true){
        addingtogether("divide")
    }
    while (storingArray.includes ("multi") === true){
        addingtogether("multi")
    }
    while (storingArray.includes ("addition") || storingArray.includes("subtract") === true){
        for (let i = 0 ; i < storingArray.length ; i++){
            if (storingArray[i] === "addition" || storingArray[i] === "subtract"){
                addingtogether(storingArray[i])
                break
            }
        }
    }
  
    function addingtogether(operation){
        let whereX = storingArray.indexOf(operation)

        let before = storingArray[whereX-1]
        let beforeind = storingArray.indexOf(before)
        storingArray[beforeind] = "removed"

        let after = storingArray[whereX+1]
        let afterind = storingArray.indexOf(after)
        storingArray[afterind] = "removed"
        let together
        switch(operation){
            case "multi":
                together = before * after
                break
            case "divide":
                together = before / after
                break
            case "addition":
                together = before + after
                break
            case "subtract":
                together = before - after
            break
        }
        storingArray[whereX] = together

        storingArray.splice(afterind,1)
        storingArray.splice(beforeind,1)
    }
    console.log(storingArray)
}