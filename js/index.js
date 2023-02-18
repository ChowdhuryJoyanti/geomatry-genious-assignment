let serial = 0;
document.getElementById('tringle-calculation').addEventListener('click' ,function(){
   const firstTringle = document.getElementById('first-tringle').innerText ;  
   const base = document.getElementById('base-input').value;
   const height = document.getElementById('height-input').value;
   const a = 0.5;
   const area = parseFloat(a) * parseFloat(base)  * parseFloat( height);
   serial = serial+1

   geomatryCalculation( firstTringle ,area )
   // console.log(firstTringle , area)


   
   // const a = 0.5;
   // const area = parseFloat(a) * parseFloat(base)  * parseFloat( height);
   // serial = serial+1

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
         // 2nd
document.getElementById('rectangle-calculation').addEventListener('click',function(){
   const secondRectanagle = document.getElementById('second-rectangle').innerText;
    const width = document.getElementById('width-input').value;
    const length = document.getElementById('length-input').value;
    const area = parseFloat(width) * parseFloat(length);

    geomatryCalculation(secondRectanagle ,area )
    console.log(area);
});
   // 3rd
document.getElementById('parallelogram-calculation').addEventListener('click',function(){
   const thirdParallogram = document.getElementById('third-parallogram').innerText;
   const baseInput =  document.getElementById('parallal-input-base').value;
   const heightInput =  document.getElementById('parallal-input-height').value;
   const totalArea = parseFloat( baseInput) * parseFloat(heightInput) ;
   geomatryCalculation(thirdParallogram ,totalArea )
   console.log(totalArea);
});

// 4th
document.getElementById('rombus-calculation').addEventListener('click',function(){
      const forthRhombus = document.getElementById('forth-rhombus').innerText;
      const d1 = document.getElementById('input-length-d1').value;
      const d2 = document.getElementById('input-width-d2').value;
      const roumbusMeasure = 0.5;
      const rombusTotalArea = parseFloat(roumbusMeasure) * parseFloat(d1) * parseFloat(d2);

      geomatryCalculation(forthRhombus ,rombusTotalArea )

   console.log(rombusTotalArea);
});

// 5th
document.getElementById('pentagon-calculation').addEventListener('click',function(){
   const fifthPentagon = document.getElementById('fifth-pentagon').innerText;
   const p = document.getElementById('pentagon-p').value;
   const b = document.getElementById('pentagon-b').value;
   const pentagonMeasure = 0.5;
   const pentagonArea =  parseFloat(pentagonMeasure) * parseFloat(p) * parseFloat(b);

   geomatryCalculation(fifthPentagon ,pentagonArea)
   console.log(pentagonArea);
});

// 6th
document.getElementById('ellipse-calculation').addEventListener('click',function(){
   const sixthEllipse = document.getElementById('sixth-ellipse').innerText;
   const a = document.getElementById('ellipse-a').value;
   const b  = document.getElementById('ellipse-b').value;
   const ellipseMeasure = 3.14;
   const ellipseArea = parseFloat(ellipseMeasure) * parseFloat(a) * parseFloat(b);

   geomatryCalculation(sixthEllipse ,ellipseArea);
   // return ellipseArea.toFixed(2)
   console.log(ellipseArea.toFixed(2));

});





// common function
function geomatryCalculation(firstTringle ,area){
  
   const table = document.getElementById('table-container');
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td>${1}</td>
   <td>${firstTringle}</td>
   <td>${area} cm<sup>2</sup> </td>
   <td>
   <button class="bg-sky-500 text-white rounded-lg px-2 py-2">Convrt to m<sup>2</sup></button>

   </td>
   
   `;
   table.appendChild(tr);
}