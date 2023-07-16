function set_to_page_event(target_window, target_doc) {
  target_doc.querySelectorAll('[to_page]').forEach(el => {
    el.addEventListener('click', () => {
      let hash = el.getAttribute('to_page');
      target_window.location.hash = hash;
    });
  });
}