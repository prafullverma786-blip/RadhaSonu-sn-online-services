// Smooth, lightweight site. WhatsApp/Call links work directly on mobile.
document.querySelectorAll('a[href^="http"]').forEach(a => a.setAttribute('rel','noopener'));
