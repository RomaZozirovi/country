'use strict';
let button1 = document.querySelector('.button1');
let card = document.querySelector('.card');
let img = document.querySelector('img');
let render = document.querySelector('.render');
let input = document.querySelector('#myInput');
let messagebox = document.querySelector('.messagebox');



let drawHtml = async function (country){

	let resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
	const data = await resp.json();
	const arrayData = data[0];
	
	let neighbour = arrayData.borders;
	if(!neighbour) return;
	let resp2 = await fetch(`https://restcountries.com/v2/alpha/${neighbour[0]}`);
	const data2 = await resp2.json();
	let arrayData2 = data2;
	
const html = `<div class="maincard">
<div class='imgdiv'>
 <img src="${arrayData.flags.svg}" alt="flag">
</div>
<div class="divcollection">
 <h1>${country.toUpperCase() === 'RUSSIA' ? 'RUSSIA IS OCUPPIER' : country.toUpperCase()}</h1>
 <h1>Region: ${arrayData.region}</h1>
 <h2>Population of people : ${(arrayData.population / 1000000).toFixed(1)} Mil</h2> 
 <h2>City: ${arrayData.capital}</h2>    
</div>           
</div> 
<div class = 'container'>
<h1 class= 'neighbour1'>Neighbour Country </h1>
<div class="neighbour">
 <div class="imgdiv">
	 <img src="${arrayData2.flags.svg}" alt="flag">
 </div>
 <div class="divcollection">
	 <h1>${data2.name.toUpperCase() === 'RUSSIA' ? 'RUSSIA IS OCUPPIER' : data2.name.toUpperCase()}</h1>
	 <h3>Region: ${data2.region}</h3>
	 <h4>Population of people : ${(data2.population / 1000000).toFixed(1)} Mil</h4>  
	 <h4>City: ${data2.capital}</h4>   
   </div>              
</div>
</div>`
	render.insertAdjacentHTML('afterbegin', html);
	console.log(country);
}

let thing = function (e) {
	render.innerHTML = '';
	e.preventDefault();
	let inpValue = input.value;
	if(inpValue == '') messagebox.textContent = 'Choose Country';
	else  drawHtml(inpValue);
	
}


button1.addEventListener('click', thing);



// const getPosition = function() {
// 	return new Promise (function (resolve, reject) {
// 		navigator.geolocation.getCurrentPosition(resolve,reject);
// 	})
// };

// const whereiam = async function (){
// const pos = await getPosition();
// console.log(pos);
// const {latitude: lat, longitude: lang} = pos.coords;

// console.log(lat, lang);

// const getLocationName = await fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`);

// const finalName = await getLocationName.json();
// console.log(finalName);

// }
// whereiam();