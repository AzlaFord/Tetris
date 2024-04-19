const gridContainer = document.querySelector('.grid-container');


var gamebox = ['', '', '', '', '', '', '', '','', '', '', '', '', '', '', '','', '', '', '', '', '', '', '','', '', '', '', '', '', '', '',];
var gameactive = true

const clear_lines = [
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [16,17,18,19],
    [20,21,22,23],
    [24,25,26,27]
]

const boxes = Array.from(document.querySelectorAll('.box'));



function figuresFallBlock(selected){
    for(let i=0; i<35; i+=5){
        selected = [boxes[1+i], boxes[2+i],boxes[6+i], boxes[7+i]]
        figuredelete(selected)
        function figuredelete(selected){
            selected = [boxes[1+i-5], boxes[2+i-5],boxes[6+i-5], boxes[7+i-5]]
            selected.forEach(box => {
                
                setTimeout(function(){box.style.backgroundColor = 'white'},300 *i)
                })
        }
        selected.forEach(box => {
            box.style.backgroundColor = 'white'
            setTimeout(function(){box.style.backgroundColor = 'red'},300 *i)
            }
            
        )

    }
    
}

var selectedBlock = [boxes[1], boxes[2],boxes[6], boxes[7]];
var selectedHome = [boxes[2], boxes[6],boxes[7], boxes[8]];
var selectedBar = [boxes[0], boxes[1],boxes[2], boxes[3]];
var selectedLbar = [boxes[0], boxes[1],boxes[2], boxes[3],boxes[5]];




figuresFallBlock(selectedBlock)


