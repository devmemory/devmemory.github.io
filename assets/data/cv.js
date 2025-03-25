document.querySelectorAll('a').forEach(link => {
  if (link.href && !link.href.startsWith(window.location.origin)) {
    link.setAttribute('target', '_blank');
  }
});