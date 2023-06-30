(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', handleBackdropClick);
  document.addEventListener('keydown', handleEscKey);

  function toggleModal() {
    const isModalHidden = refs.modal.classList.contains('is-hidden');

    if (isModalHidden) {
      refs.modal.classList.remove('is-hidden');
      document.body.style.overflow = 'hidden';
    } else {
      refs.modal.classList.add('is-hidden');
      document.body.style.overflow = '';
    }
  }

  function handleBackdropClick(event) {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  }

  function handleEscKey(event) {
    if (event.key === 'Escape') {
      toggleModal();
    }
  }
})();
