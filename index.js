

const colorcode = () => {
    const rand = Math.floor(Math.random()* 16772125);
    const colrandom = rand.toString(16);
    var colorcode ="#" + colrandom;
     colorcode =colorcode.toUpperCase(); 
    document.getElementById('color').innerHTML= colorcode;
    document.body.style.backgroundColor = colorcode;
    document.getElementById('btn').style.color = colorcode;
    navigator.clipboard.writeText(colorcode);
    
}
colorcode();

