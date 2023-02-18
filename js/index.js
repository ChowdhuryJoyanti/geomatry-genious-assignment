document.getElementById('tringle-calculation').addEventListener('click' ,function(){
   const base = document.getElementById('base-input').value;
   const height = document.getElementById('height-input').value;
   const a = 0.5;
   const area = parseFloat(a) * parseFloat(base)  * parseFloat( height);
console.log( area)
//    return area.toFixed;
//    const result = parseFloat(area).toFixed(2)
  
//    console.log(result)
//    console.log(typeof result)
//    console.log ( typeof area)
//    const result =parseFloat(area).toFixed(2)
//    console.log(typeof result)
});

document.getElementById('rectangle-calculation').addEventListener('click',function(){
    const width = document.getElementById('width-input').value;
    const length = document.getElementById('length-input').value;
    const area = parseFloat(width) * parseFloat(length);
    console.log(area);
});
