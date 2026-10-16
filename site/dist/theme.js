// Apply the saved theme before the stylesheet loads to avoid a bright flash.
function setTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = nextTheme;
  document.querySelectorAll('[data-theme-option]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeOption === nextTheme));
  });
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextTheme === 'dark' ? '#101c17' : '#123d2d');
  try { localStorage.setItem('tamer-theme', nextTheme); } catch { /* Storage may be disabled. */ }
}
let savedTheme = 'light';
try { savedTheme = localStorage.getItem('tamer-theme') || 'light'; } catch { /* Use the light theme. */ }
setTheme(savedTheme);
