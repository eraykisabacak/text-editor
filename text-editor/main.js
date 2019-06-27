let b = document.getElementById("b")
let i = document.getElementById("i")
let underline = document.getElementById("underline")
let highlighter = document.getElementById("highlighter")
let highlighterFalse = document.getElementById("highlighterFalse")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")


function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

b.onclick = function() {
    document.execCommand("bold")
    clearSelection()
 }

i.onclick = function() {
   document.execCommand("italic")
   clearSelection()
}
underline.onclick = function() {
   document.execCommand("underline")
   clearSelection()
}
highlighter.onclick = function() {
   document.execCommand("backColor",false,"yellow")
   clearSelection()
}
highlighterFalse.onclick = function() {
   document.execCommand("backColor",false,"white")
   clearSelection()
}
increase.onclick = function(){
   document.execCommand("fontSize",false,"7")
   clearSelection()
}
decrease.onclick = function(){
   document.execCommand("fontSize",false,"2")
   clearSelection()
}
