const fourbyfour = document.getElementById("fourbyfour")

for (let i =0 ; i<4 ; i++){
    let columndivs = document.createElement("div")
    columndivs.setAttribute("class","column")
    for(let i=0 ; i<4 ; i++){
        let rowdivs = document.createElement("div")
        rowdivs.setAttribute("class", "row")
        columndivs.appendChild(rowdivs)
    }
    fourbyfour.appendChild(columndivs)
}