let serial = 0;
document.getElementById('tringle-calculation').addEventListener('click' ,function(){
   serial += 1
   const firstTringle = document.getElementById('first-tringle').innerText ;  
   const base = document.getElementById('base-input').value;
   const height = document.getElementById('height-input').value;
   const a = 0.5;

   if( base == '' || height == ''|| base <0 || height < 0  ){
      return alert('Please enter any valid number');
  }
  else{

  }


   const area = parseFloat(a) * parseFloat(base)  * parseFloat( height);
   const areaTotal  = area.toFixed(2);

   geomatryCalculation( firstTringle ,areaTotal )
   console.log(firstTringle , areaTotal)


});
         // 2nd
document.getElementById('rectangle-calculation').addEventListener('click',function(){
   serial += 1

   const secondRectanagle = document.getElementById('second-rectangle').innerText;
    const width = document.getElementById('width-input').value;
    const length = document.getElementById('length-input').value;

    if( width == '' || length == ''|| width <0 || length < 0  ){
      return alert('Please enter any valid number');
  }
  else{

  }

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
};








//  function generateRandomColor(){
//    let maxVal = 0xFFFFFF; // 16777215
//    let randomNumber = Math.random() * maxVal; 
//    randomNumber = Math.floor(randomNumber);
//    randomNumber = randomNumber.toString(16);
//    let randColor = randomNumber.padStart(6, 0);   
//    return `#${randColor.toUpperCase()}`
// }
 
//    document.getElementById('tringle-first').addEventListener('mouseover',
   
//       generateRandomColor
//    )
   
// console.log(generateRandomColor()); 

function random_bg_color() {
   var x = Math.floor(Math.random() * 256);
   var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);
   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);
 
   document. getElementById('tringle-first').style.background = bgColor;
   }

random_bg_color();






