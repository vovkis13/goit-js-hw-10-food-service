import refs from './refs';
import markup from './create-menu';
import themeSwitchToggle from './theme-switch';

const { menuRef, themeSwitcherRef, bodyRef } = refs;
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('DarkTheme') === 'true') {
  bodyRef.classList.toggle(Theme.DARK);
  themeSwitcherRef.checked = true;
} else {
  bodyRef.classList.toggle(Theme.LIGHT);
}

menuRef.insertAdjacentHTML('afterbegin', markup);

themeSwitcherRef.addEventListener('change', e => {
  themeSwitchToggle(bodyRef, Theme);
  localStorage.setItem('DarkTheme', themeSwitcherRef.checked);
});
