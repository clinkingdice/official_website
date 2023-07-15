function set_to_page_event() {
  document.querySelectorAll('[to_page]').forEach(el => {
    el.addEventListener('click', () => {
      let hash = el.getAttribute('to_page');
      to_page(hash);
    });
  });
}