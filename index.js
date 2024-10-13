addEventListener('DOMContentLoaded', ()=> {
	resize()
})
const text =
	'Вот и 14 лет исполнилось самой прекрасной девушке этого.. города?    этой планеты?    этой галактики?    неа,  этой вселенной.'
const speed = 50 // Скорость печати (мс)
let i = 0

function type() {
	if (i < text.length) {
		document.getElementById('title2').textContent += text.charAt(i)
		i++
		setTimeout(type, speed)
	}
}

type()

function none(id) {
	let el = document.getElementById(id)
	el.style.display = 'none'
}

const paths = document.querySelectorAll('.st0')
let path = document.getElementById('path')
let path1 = document.getElementById('path1')

paths.forEach(path => {
	const length = path.getTotalLength() // Вычисляем длину пути
	path.style.strokeDasharray = length // Устанавливаем stroke-dasharray равным длине пути
	path.style.strokeDashoffset = length // Устанавливаем stroke-dashoffset равным длине пути
})
function dawn() {
	path.style.animation = 'draw 2s ease forwards'
	path1.style.animation = 'draw 2s ease forwards'
	console.log('fds')
}
setTimeout(dawn1, 15000)
let path2 = document.getElementById('path2')
let path3 = document.getElementById('path3')
function dawn1() {
	path3.style.animation = 'draw 2s ease forwards'
	path2.style.animation = 'draw 2s ease forwards'
	console.log('fds')
}
setTimeout(dawn, 5000)


let bigtext = document.getElementById('bigtext');
let face = document.getElementById('face');

window.addEventListener('resize', resize)

function resize() {
	face.style.height = bigtext.offsetHeight + 'px'

};
