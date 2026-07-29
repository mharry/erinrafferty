document.addEventListener('DOMContentLoaded', function () {
  var trigger = document.querySelector('.easter-egg');
  var dialog = document.getElementById('easter-egg-dialog');

  if (!trigger || !dialog) {
    return;
  }

  var closeBtn = dialog.querySelector('.dialog-close');

  trigger.addEventListener('click', function () {
    dialog.showModal();
  });

  closeBtn.addEventListener('click', function () {
    dialog.close();
  });

  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
