'use strict';
const CONSTDOM = {'h2': 'DÍA', 'init_acum': 'body > div:first-of-type', 'caption' : 'TRENES DEL DÍA ', 'ntrenes': 'NÚMERO DE TRENES'}
const CONSTSTYLE = {'textAlign_center': 'center', 'init_acum': 'body > div:first-of-type', 'section_with': '28em'}
let sectiondom;

let dom = {
	acumDOM: CONSTDOM.init_acum,

	cargarDOM: function () {
		document.addEventListener('DOMContentLoaded', () => { 
			
			this.generarDOM();	
			this.generarPropiedades();
			this.addBtnListerners();

		}, true);
	},

	generarDOM: function(){
		sectiondom = actions.appendDOM(this.acumDOM, 'section');
		this.acumDOM += (' ' + sectiondom.nodeName.toLowerCase()) ;
		actions.appendDOM(this.acumDOM, 'h2').innerHTML = CONSTDOM.h2;
	},

	generarPropiedades: function(){
		sectiondom.style.width = CONSTSTYLE.section_with;
		sectiondom.children[0].style.textAlign = CONSTSTYLE.textAlign_center;
	},

	generarBotones: function(){
		let btns = new Array();
		for (var i = 0; i < datos.length; i++) {
			let btn = actions.appendDOM(this.acumDOM, 'button');
			btn.innerHTML = (datos[i][0].id).substr(0,2);
			btns.push(btn);
		};
		return btns;
	},

	addBtnListerners: function(){
		let btns = this.generarBotones();
		let tren = null;

		btns.forEach( (elem) => {
			elem.addEventListener('click', function(){ 
				for (let i = 0; i < datos.length; i++) {
					for (let j = 0; j < datos[i].length; j++) {
						//console.log(datos[i][j].id);
						if((datos[i][j].id).substr(0,2) == this.innerText){
							tren = datos[i];
						}
					};
				};
				actions.borrarTabla();
				actions.generarTabla(tren);
			}, true);
		});
	},
}



let actions = {
	appendDOM: function (rootNode, elemNode){
		let b = document.createElement(elemNode);
		let a = document.querySelector(rootNode);
		a.appendChild(b);
		return b;
	},

	borrarTabla: function (){
		let t = document.getElementsByTagName('table')[0];
		let auxbtns = document.querySelectorAll('button');
		if(auxbtns[auxbtns.length - 1].nextElementSibling != null){
			auxbtns[auxbtns.length -1].nextElementSibling.remove();
		}
	},

	generarTabla: function (tren){
		if(tren instanceof Object && tren != null){

			let tb = this.appendDOM(CONSTDOM.init_acum + ' section', 'table');
			tb.style.width = 100 + '%';
			let acum = CONSTDOM.init_acum;

			let cap = this.appendDOM(CONSTDOM.init_acum + ' table', 'caption');
			cap.innerText = CONSTDOM.caption + ' ' + tren[0].id.substr(0,2);
			acum += ' table';

			let thead = this.appendDOM(acum, 'thead');
			acum += ' thead';
			let trthead = this.appendDOM(acum, 'tr');
			acum += ' tr';
			for (const prop in tren[0]) {
				if (tren[0].hasOwnProperty(prop)) {
					let ththead = this.appendDOM(acum, 'td');
					ththead.innerText = prop;
				} 
			}
			acum = CONSTDOM.init_acum;

			let tbody = this.appendDOM(acum + ' table', 'tbody');
			acum += ' tbody';
			for(let i = 0; i < tren.length; i++){
				let trtbody = this.appendDOM(acum, 'tr');
				for (const prop in tren[i]) {
					if (tren[i].hasOwnProperty(prop)) {
						let b = document.createElement('td');
						b.innerText = tren[i][prop];
						trtbody.append(b);
					} 
				}
			}

			let tfoot = this.appendDOM(CONSTSTYLE.init_acum + ' table', 'tfoot');
			let trfoot = this.appendDOM(CONSTSTYLE.init_acum + ' table tfoot', 'tr');
			let tdfoot = this.appendDOM(CONSTSTYLE.init_acum + ' table tfoot tr', 'td');
			tdfoot.colSpan = "5";
			tdfoot.innerHTML = CONSTDOM.ntrenes + ' ' + tren.length;
		}
	}

}













