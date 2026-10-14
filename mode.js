/* Switching views never resets ekOS history, filesystem position or output. */
const classicView = document.getElementById('classicView');
const terminalView = document.getElementById('terminalView');
const modeControls = document.querySelectorAll('[data-mode]');
let terminalStarted = false;
let classicScroll = 0;
const portfolioSections = ['about', 'experience', 'skills', 'projects', 'cv', 'contact'];

function setPortfolioMode(mode, moveFocus = false, updateUrl = true) {
  if (!['classic', 'terminal'].includes(mode)) return;
  const previous = document.documentElement.dataset.mode;
  if (previous === 'classic' && mode === 'terminal') classicScroll = window.scrollY;
  document.documentElement.dataset.mode = mode;
  classicView.hidden = mode !== 'classic';
  terminalView.hidden = mode !== 'terminal';
  document.getElementById('terminalInvitation').hidden = mode !== 'terminal';
  document.getElementById('skipLink').href = mode === 'classic' ? '#classicView' : '#terminalView';
  modeControls.forEach(button => {
    if (button.hasAttribute('aria-pressed')) button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
  });
  try { localStorage.setItem('harunerkam.view.v1', mode); } catch (_) { /* The site works without storage. */ }
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('mode', mode);
    // An anchor from the other view must not cause a later scroll jump.
    if (mode === 'terminal') url.hash = '';
    try { window.history.replaceState(null, '', url); } catch (_) { /* Also usable as a local file. */ }
  }
  if (mode === 'terminal' && !terminalStarted) {
    terminalStarted = true;
    bootSequence();
  }
  if (moveFocus) {
    const focusTarget = mode === 'classic' ? classicView : input.disabled ? terminalView : input;
    focusTarget.focus({preventScroll: true});
    window.scrollTo({top: mode === 'classic' ? classicScroll : 0, behavior: 'instant'});
    document.getElementById('modeAnnouncement').textContent = mode === 'classic' ? 'Classic portfolio mode. Browse using the section navigation.' : 'ekOS terminal mode. Type help for available commands.';
  }
}

modeControls.forEach(button => button.addEventListener('click', () => setPortfolioMode(button.dataset.mode, true)));
function handlePortfolioLocation() {
  const requested = new URLSearchParams(location.search).get('mode');
  const section = location.hash.slice(1);
  if (portfolioSections.includes(section)) {
    setPortfolioMode('classic', false, false);
    document.getElementById(section).scrollIntoView();
  } else if (['terminal', 'classic'].includes(requested)) setPortfolioMode(requested, false, false);
}
window.addEventListener('popstate', handlePortfolioLocation);
window.addEventListener('hashchange', handlePortfolioLocation);
setPortfolioMode(document.documentElement.dataset.mode || 'terminal', false, false);
if (portfolioSections.includes(location.hash.slice(1))) handlePortfolioLocation();
