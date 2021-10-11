"use strict"

const b = {
	name: 'test',
	width: 1024,
	height: 1024,
	color: {
		border: 'black',
		bg: 'red'
	}
};

console.log(Object.keys(b).length);
//for (let key in b) {
//	if (typeof (b[key]) === 'object') {
//		for (let i in b[key]) {
//			console.log(`свойство ${i} имеет значение ${b[key][i]}`);
//		}
//	} else {
//		console.log(`свойство ${key} имеет значение ${b[key]}`);
//	}	
//}