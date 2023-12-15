export function popupInit() {
	document.addEventListener('DOMContentLoaded', function () {
		const buttons = document.querySelectorAll('[data-popup-target]');
		const popups = document.querySelectorAll('[data-popup]');
		const closeButtons = document.querySelectorAll('[data-popup-close]');
		let openedPopup = null;
	
		buttons.forEach(function (button) {
			button.addEventListener('click', function () {
				const target = button.getAttribute('data-popup-target');
				const popup = document.querySelector(`[data-popup="${target}"]`);
	
				if (popup) {
					if (openedPopup) {
						openedPopup.classList.remove('opened');
						
						buttons.forEach(function (btn) {
							btn.classList.remove('active');
						});
					}
					openedPopup = popup;
					popup.classList.add('opened');
					
					buttons.forEach(function (btn) {
						btn.classList.remove('active');
					});
					button.classList.add('active');
				}
			});
		});
	
		closeButtons.forEach(function (closeButton) {
			closeButton.addEventListener('click', function () {
				const popup = closeButton.closest('[data-popup]');
	
				if (popup) {
					popup.classList.remove('opened');
					openedPopup = null;
					
					buttons.forEach(function (btn) {
						btn.classList.remove('active');
					});
				}
			});
		});
	
		document.addEventListener('mousedown', function (event) {
			const isOutsidePopup = !event.target.closest('[data-popup]');
	
			if (isOutsidePopup && openedPopup) {
				openedPopup.classList.remove('opened');
				openedPopup = null;
				
				buttons.forEach(function (btn) {
					btn.classList.remove('active');
				});
			}
		});
	});
}
