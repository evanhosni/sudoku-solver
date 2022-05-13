
const cells = document.querySelectorAll('.cell')
console.log(cells[0].classList)

document.querySelector('#solve').addEventListener('click',()=>{
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].value) {
            let invalid = []
            Array.from(document.querySelectorAll(`.${cells[i].classList[1]}`)).map(obj=>obj.value?invalid.push(parseInt(obj.value)):null) //adds to invalid options for each cell based on box
            Array.from(document.querySelectorAll(`.${cells[i].classList[2]}`)).map(obj=>obj.value?invalid.push(parseInt(obj.value)):null) //adds to invalid options for each cell based on row
            Array.from(document.querySelectorAll(`.${cells[i].classList[3]}`)).map(obj=>obj.value?invalid.push(parseInt(obj.value)):null) //adds to invalid options for each cell based on col
            cells[i].possVals = [1,2,3,4,5,6,7,8,9].filter(obj=>!invalid.includes(obj))
            
            if(cells[i].possVals.length == 1) {
                cells[i].value = cells[i].possVals[0]
            }
        } else {
            cells[i].possVals = null
        }
    }
    console.log('------------------------')
    for (let i = 0; i < cells.length; i++) {
        if(cells[i].possVals) {
            let cellbox = [].concat(...(Array.from(document.querySelectorAll(`.${cells[i].classList[1]}`))).map(obj=>obj.possVals)).filter(obj=>obj?obj:null) //array of possible values for every cell in box
            let cellrow = [].concat(...(Array.from(document.querySelectorAll(`.${cells[i].classList[2]}`))).map(obj=>obj.possVals)).filter(obj=>obj?obj:null) //array of possible values for every cell in row
            let cellcol = [].concat(...(Array.from(document.querySelectorAll(`.${cells[i].classList[3]}`))).map(obj=>obj.possVals)).filter(obj=>obj?obj:null) //array of possible values for every cell in col

            let boxSingle = cellbox.filter(obj => cellbox.lastIndexOf(obj) == cellbox.indexOf(obj)).reduce((x,obj)=>obj,0) //only one cell in this box can possibly have this
            let rowSingle = cellrow.filter(obj => cellrow.lastIndexOf(obj) == cellrow.indexOf(obj)).reduce((x,obj)=>obj,0) //only one cell in this row can possibly have this
            let colSingle = cellcol.filter(obj => cellcol.lastIndexOf(obj) == cellcol.indexOf(obj)).reduce((x,obj)=>obj,0) //only one cell in this col can possibly have this

            console.log('------------------------')
            if (cells[i].classList[1] == 'box8') {

                console.log(cells[i].classList[1],cells[i].classList[2],cells[i].classList[3])
                console.log(cells[i].possVals)
                console.log(boxSingle,rowSingle,colSingle)
            }

            if (cells[i].possVals.includes(boxSingle)) {
                cells[i].value = boxSingle
            }

            if (cells[i].possVals.includes(rowSingle)) {
                cells[i].value = rowSingle
            }

            if (cells[i].possVals.includes(colSingle)) {
                cells[i].value = colSingle
            }
        }
    }

    console.log('------------------------')
    for (let i = 0; i < cells.length; i++) {
        
    }
})