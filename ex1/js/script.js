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

for (let key in b) {
	console.log(`свойство ${key} имеет значение ${b[key]}`);
}