document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      accordionItems.forEach(otherItem => {
        otherItem.classList.remove('open');
        otherItem.querySelector('.accordion-content').style.maxHeight = null;
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
