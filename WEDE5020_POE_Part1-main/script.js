document.addEventListener('DOMContentLoaded', function() {
  // Form Validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const name = this.querySelector('input[type="text"]');
      const email = this.querySelector('input[type="email"]');
      const select = this.querySelector('select');
      const msg = this.querySelector('textarea');

      if (name && name.value.trim() === '') {
        alert('Please fill in your name.');
        name.focus();
        e.preventDefault();
        return;
      }
      if (email && !email.value.includes('@')) {
        alert('Please enter a valid email address.');
        email.focus();
        e.preventDefault();
        return;
      }
      if (select && select.value === '') {
        alert('Please select an option from the dropdown.');
        select.focus();
        e.preventDefault();
        return;
      }
      if (msg && msg.value.trim().length < 5) {
        alert('Message must be at least 5 characters long.');
        msg.focus();
        e.preventDefault();
        return;
      }
    });
  });

  // Lightbox Modal for Images
  const images = document.querySelectorAll('.product-card img');
  if (images.length > 0) {
    const modal = document.createElement('div');
    modal.style.cssText = 'display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,0.8); text-align:center; padding-top:50px;';
    const modalImg = document.createElement('img');
    modalImg.style.cssText = 'max-width:80%; max-height:80vh; border-radius:5px;';
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = 'position:absolute; top:20px; right:40px; color:#fff; font-size:40px; cursor:pointer;';
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    images.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
  }
});