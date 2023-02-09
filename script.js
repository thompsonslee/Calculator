const fourbyfour = document.getElementById("fourbyfour")
const numgen = [7,8,9,"/",4,5,6,"x",1,2,3,"-",".",0,"=","+"]
const classset = [7,8,9,"divide",4,5,6,"multi",1,2,3,"subtract","dot",0,"equals","addition"]
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
            storingNumbers.push(datavalue)
        })

        rowdivs.setAttribute("class", "row")

        columndivs.appendChild(rowdivs)
        numgenindex ++
    }
    fourbyfour.appendChild(columndivs)
}