document.getElementById('tringle-calculation').addEventListener('click' ,function(){
   const base = document.getElementById('base-input').value;
   const height = document.getElementById('height-input').value;
   const a = 0.5;
   const area = parseFloat(a) * parseFloat(base)  * parseFloat( height);


//    if(base == 'string' || height == 'string'){
//     return alert('please give a number')
//    }
//    else if(base = 'negative number' || height == 'negative number'){
//     return alert('please give me a positive number');
//    }
//    else{
            
//    }
// console.log( area)
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

document.getElementById('parallelogram-calculation').addEventListener('click',function(){

   const baseInput =  document.getElementById('parallal-input-base').value;
   const heightInput =  document.getElementById('parallal-input-height').value;
   const totalArea = parseFloat( baseInput) * parseFloat(heightInput) ;
   
   console.log(totalArea);
});


document.getElementById('rombus-calculation').addEventListener('click',function(){
      const d1 = document.getElementById('input-length-d1').value;
      const d2 = document.getElementById('input-width-d2').value;
      const roumbusMeasure = 0.5;
      const rombusTotalArea = parseFloat(roumbusMeasure) * parseFloat(d1) * parseFloat(d2);

   console.log(rombusTotalArea);
})

document.getElementById('pentagon-calculation').addEventListener('click',function(){
   const p = document.getElementById('pentagon-p').value;
   const b = document.getElementById('pentagon-b').value;
   const pentagonMeasure = 0.5;
   const pentagonArea =  parseFloat(pentagonMeasure) * parseFloat(p) * parseFloat(b);
   console.log(pentagonArea);
});

document.getElementById('ellipse-calculation').addEventListener('click',function(){
   const a = document.getElementById('ellipse-a').value;
   const b  = document.getElementById('ellipse-b').value;
   const ellipseMeasure = 3.14;
   const ellipseArea = parseFloat(ellipseMeasure) * parseFloat(a) * parseFloat(b);
   // return ellipseArea.toFixed(2)
   console.log(ellipseArea.toFixed(2));

});
