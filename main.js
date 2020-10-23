const colors=['red','black','orange'];
const figures=['square','rectangle','circle'];

let selectFigure=document.querySelector('select')
let selectedColor=document.querySelectorAll('input')
let renderFigure=document.querySelector('.figure')

selectFigure.addEventListener('change',selectFigures)

selectedColor.forEach(el=>{
	el.addEventListener('change',selectColors)
})

// Добавляем класс с цветом
function selectColors(e){
	removeClass(renderFigure,colors);

	colors.forEach(item=>{
		if(item==e.target.value){
			renderFigure.classList.add(`${e.target.value}`)
		}
	})
}

// Добавляем класс с фигурой
function selectFigures(e){
	removeClass(renderFigure,figures)
	
	figures.forEach(item=>{
		if(item==e.target.value){
			renderFigure.classList.add(`${e.target.value}`)
		}
	})
}



// Удаляем классы,если они уже есть у элемента (сверяем с массивом)
function removeClass(renderFig,arrStyles){
	renderFig.classList.forEach(item=>{
		arrStyles.forEach(el =>{
			if(item==el){
				renderFig&&renderFig.classList.remove(`${item}`)
			}
		})
	})
}

