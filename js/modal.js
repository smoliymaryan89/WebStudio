(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

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
})();
