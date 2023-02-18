let serial = 0;
document.getElementById('tringle-calculation').addEventListener('click' ,function(){
   serial += 1
   const firstTringle = document.getElementById('first-tringle').innerText ;  
   const base = document.getElementById('base-input').value;
   const height = document.getElementById('height-input').value;
   const a = 0.5;
   const area = parseFloat(a) * parseFloat(base)  * parseFloat( height);
   const areaTotal  = area.toFixed(2);

   geomatryCalculation( firstTringle ,areaTotal )
   console.log(firstTringle , areaTotal)


   // if(isNaN(String)){
   //    console.log('plese ')
   // }


   // if( base == 'string' || height == 'string'){
   //    console.log('please give a number')
   //    //  return alert('please give a number')
   // }
   // else if(base = 'negative number' || height == 'negative number'){
   //    console.log('please give a positive number')
   // //  return alert('please give me a positive number');
   // }
   // else{
   //      const baseInput = document.getElementById('base-input')   
   // }

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
   serial += 1

   const secondRectanagle = document.getElementById('second-rectangle').innerText;
    const width = document.getElementById('width-input').value;
    const length = document.getElementById('length-input').value;
    const area = parseFloat(width) * parseFloat(length);
    const totalArea = area.toFixed(2);

    geomatryCalculation(secondRectanagle ,totalArea )
    console.log(totalArea);
});
   // 3rd
document.getElementById('parallelogram-calculation').addEventListener('click',function(){
   serial += 1

   const thirdParallogram = document.getElementById('third-parallogram').innerText;
   const baseInput =  document.getElementById('parallal-input-base').value;
   const heightInput =  document.getElementById('parallal-input-height').value;
   const totalArea = parseFloat( baseInput) * parseFloat(heightInput) ;
   const parallelogramTotalArea = totalArea.toFixed(2);

   geomatryCalculation(thirdParallogram ,parallelogramTotalArea )
   console.log(parallelogramTotalArea);
});

// 4th
document.getElementById('rombus-calculation').addEventListener('click',function(){
   serial = serial+1

      const forthRhombus = document.getElementById('forth-rhombus').innerText;
      const d1 = document.getElementById('input-length-d1').value;
      const d2 = document.getElementById('input-width-d2').value;
      const roumbusMeasure = 0.5;
      const rombusArea = parseFloat(roumbusMeasure) * parseFloat(d1) * parseFloat(d2);
      const rohumbusTotalArea =rombusArea.toFixed(2);
      geomatryCalculation(forthRhombus ,rohumbusTotalArea )

      console.log(rohumbusTotalArea);
});

// 5th
document.getElementById('pentagon-calculation').addEventListener('click',function(){
   serial = serial+1

   const fifthPentagon = document.getElementById('fifth-pentagon').innerText;
   const p = document.getElementById('pentagon-p').value;
   const b = document.getElementById('pentagon-b').value;
   const pentagonMeasure = 0.5;
   const pentagonArea =  parseFloat(pentagonMeasure) * parseFloat(p) * parseFloat(b);
   const pentagonTotalArea = pentagonArea.toFixed(2);
   geomatryCalculation(fifthPentagon ,pentagonTotalArea)
   console.log(pentagonTotalArea);
});

// 6th
document.getElementById('ellipse-calculation').addEventListener('click',function(){
   serial = serial+1

   const sixthEllipse = document.getElementById('sixth-ellipse').innerText;
   const a = document.getElementById('ellipse-a').value;
   const b  = document.getElementById('ellipse-b').value;
   const ellipseMeasure = 3.14;
   const ellipseArea = parseFloat(ellipseMeasure) * parseFloat(a) * parseFloat(b);
   const ellipseTotalArea = ellipseArea.toFixed(2);

   geomatryCalculation(sixthEllipse ,ellipseTotalArea);
   
   console.log(ellipseTotalArea);

});





// common function
function geomatryCalculation(firstTringle ,areaTotal){
  
   const table = document.getElementById('table-container');
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td>${serial}</td>
   <td>${firstTringle}</td>
   <td>${areaTotal} cm<sup>2</sup> </td>
   <td>
   <button class="bg-sky-500 text-white rounded-lg px-2 py-2">Convrt to m<sup>2</sup></button>

   </td>
   
   `;
   table.appendChild(tr);
}