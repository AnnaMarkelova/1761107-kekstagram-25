const generateModalFunctions = (modalWindow, closeBtn, onCloseFn = false) => {

  //4. закрывает модальное окно
  const closeModalWindow = () => {
    modalWindow.classList.add('hidden');
    document.body.classList.remove('modal-open');
    removeModalListeners();
    if (onCloseFn !== null) {
      onCloseFn();
    }
  };

  //3. событие срабатывает при закрытиии
  const onDocumentKeydown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closeModalWindow();
    }
  };

  //3. событие срабатывает при закрытиии
  const onCloseBtnClick = (evt) => {
    evt.preventDefault();
    closeModalWindow();
  };

  //3. нажатие на область вне модального окна
  const onOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      evt.preventDefault();
      closeModalWindow();
    }
  };

  //2. добавляет слушатели на закрытие
  const addModalListeners = () => {
    closeBtn.addEventListener('click', onCloseBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
    modalWindow.addEventListener('click', onOverlayClick);
  };

  //5. удаляет слушатели
  function removeModalListeners() {
    closeBtn.removeEventListener('click', onCloseBtnClick);
    document.removeEventListener('keydown', onDocumentKeydown);
    modalWindow.removeEventListener('click', onOverlayClick);
  }

  //1. открывает модальное окно
  const showModalWindow = () => {
    modalWindow.classList.remove('hidden');
    document.body.classList.add('modal-open');
    addModalListeners();
  };

  return { showModalWindow };
};

export { generateModalFunctions };
