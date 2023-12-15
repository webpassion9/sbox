export function modalInit() {
  document.addEventListener('DOMContentLoaded', function () {
    const modalTriggers = document.querySelectorAll('[data-modal-btn]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
    const modals = document.querySelectorAll('.modal-container');

    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('href').substring(1);
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add('opened');
          document.body.style.overflow = 'hidden';

          const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          if (!isMobileDevice) {
            document.body.style.paddingRight = '17px';
          }

          const wrapper = document.querySelector('.wrapper');
          if (wrapper) {
            wrapper.style.overflow = 'auto';
          }
        }
      });
    });

    modalCloseButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
        closeOpenedModals();
      });
    });

    modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeOpenedModals();
        }
      });
    });

    function closeOpenedModals() {
      const openedModals = document.querySelectorAll('.modal-container.opened');
      openedModals.forEach(openedModal => {
        openedModal.classList.remove('opened');
      });

      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';

      const wrapper = document.querySelector('.wrapper');
      if (wrapper) {
        wrapper.style.overflow = 'hidden';
      }
    }
  });
}
