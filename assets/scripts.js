//Forms
const formularioSk8 = document.querySelector("#formulario-sk8");

//inputs
const ruedas = document.querySelector("#ruedas");
const seleccionTabla = document.querySelector("#tabla");
const lijaSk8 = document.querySelector("#lija");
const elevadoreSk8 = document.querySelector("#elev");
const ejeSk8 = document.querySelector ("#eje");
const txtTabla = document.querySelector("#txt-t");
const colorTab = document.querySelector("#coltab");


//section
const list = document.querySelector("#lista");


formularioSk8.addEventListener("submit",function(event){
	event.preventDefault();

	// console.log("Hemos definido el submit");
	const tipoRueda = ruedas.value;
	const seleccionTabla = tabla.value;
	const lijaSelc = lijaSk8.checked; //se agrega checked para habilitar la casilla de check desde html
	const elevadoreSelc = elevadoreSk8.checked;//se agrega checked para habilitar la casilla de check desde html
	const ejeSelc = ejeSk8.checked;
	const txtImp = txtTabla.value;
	const colorFlavor = colorTab.value;

	
	//Se complementa con una función para hacer la acción (por elemento)
	let lija;
	if(lijaSelc == true) {
		lija = "<b>Agregaste</b> Lija"
	} else {
		lija = "<b>No</b> Agregaste Lija"
	};

	let elev;
	if(elevadoreSelc == true) {
		elev = "<b>Agregaste</b> Elevadores"
	} else {
		elev = "<b>No</b> Agregaste Elevadores"
	};

	let eje;
	if(ejeSelc == true){
		eje = "<b>Agregaste</b> eje";
	} else {
		eje = "<b>No</b> agregaste eje";
	};

	let coltab;
	if(colorFlavor == "rojo"){
		coltab = "tabla-txt.png";
	} else if (colorFlavor == "verde"){
		coltab = "tabla-verde.png";
	} else {
		coltab = "tabla-x.png";
	};



	list.innerHTML += 	
	`<div class="cont-bx">
	<h1>Gracias por tu selcción</h1>
	<p> 
	Te recordamos que has escogido las siguientes caracteristicas:<br>
	Elegiste tipo de ruedas <span class="bold">${tipoRueda}</span><br>
	En tipo de tabla seleccionaste <span class="bold">${seleccionTabla}</span><br> 
	Las caracteristicas que has seleccionado son las siguientes: <br>
	${lija} <br> 
	${elev} <br>
	${eje}	<br>

	<div class="txt-sk8">
	<div class="imp-txt"> ${txtImp} </div>
	<img src="assets/img/${coltab}" alt="Así Lusiria tu Skate">
	</div>
	</div>

	</p>
	`

});









