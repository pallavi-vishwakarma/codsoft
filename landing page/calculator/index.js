let show =
document.getElementById('show');


function display(value){

    show.value += value;

}

function calculate() {
    var value = document.getElementById('show').value
    var ans = eval(value)
    document.getElementById('show').value = ans
}

function cleardisplay() {
    document.getElementById('show').value = '';
}

