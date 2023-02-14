const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.tab-arrov2');
const btnPrev = document.querySelector('.tab-arrov1');
const tabs = document.querySelectorAll('.projects__name')




let index = 0;

const activeSlide = s => {
	for(slide of slides) {
		slide.classList.remove('active');
	}
	slides[s].classList.add('active');
}
const activeTab = s => {
	for(tab of tabs) {
		tab.classList.remove('projects_active');
	}
	tabs[s].classList.add('projects_active');
}

const activeDot = s => {
	for(dot of dots) {
		dot.classList.remove('dot_active');
	}
	dots[s].classList.add('dot_active');
}
const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind);
	activeTab(ind);
}
const nextSlide = () => {
	if(index == slides.length - 1){
		index = 0;
		prepareCurrentSlide(index);
	} else {
		index++;
		prepareCurrentSlide(index);
	}
}

const prevSlide = () => {
	if(index == 0){
		index = slides.length - 1;
		prepareCurrentSlide(index);
	} else {
		index--;
		prepareCurrentSlide(index);
	}
}
tabs.forEach((item, indexTab) => {
	item.addEventListener('click', () => {
		index = indexTab;
		prepareCurrentSlide(index);
	})
})

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	})
})

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);