;(function(){
	document.getElementsByClassName('wrap')[0].addEventListener('click', function(){
		document.getElementsByClassName('modal')[0].classList.add('open');
	})

	document.getElementsByClassName('modal__btn')[0].addEventListener('click', function(){
		document.getElementsByClassName('modal')[0].classList.remove('open');
	})
})();
