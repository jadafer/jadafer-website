document.querySelectorAll('.logo-ticker').forEach(ticker=>{
  const button=ticker.querySelector('.ticker-toggle');
  button.addEventListener('click',()=>{
    const paused=ticker.classList.toggle('is-paused');
    button.setAttribute('aria-pressed',String(paused));
    button.textContent=paused?button.dataset.resume:button.dataset.pause;
  });
});
