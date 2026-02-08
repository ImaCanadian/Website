//hiiiiiiiiiiipt
//main bit
function displaynone() {
    document.getElementById('Hello').style.display='none';
    document.getElementById('button1').innerText='ta da!!';
}
//swears at you bit
function displayblock() {
    document.getElementById('button1').innerText='asshole.';
    document.getElementById('slur').style.display='block';
    document.getElementById('slur').style.fontSize='300px';
    document.getElementById('button2').innerText='damn';//damn
}
//fucked up here man
function changetoh2() {
    document.getElementById('small').innerHTML='<h2>wait, why I small?<h2>';
}


//trying to make it so that I can clcik 100 times and get sent to another web page
const display = document.getElementById('Clickcount')
const clickeded = document.getElementById('button')
let Clicked = 0

clickeded.addEventListener("click", Dontclick)

function Dontclick() {
    Clicked++
    display.innerText = clickeded
}

/*
help
me
please
my
legs
are
both
broken
now
because
of
....
*/