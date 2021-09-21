export default function themeSwitch(elRef, Theme) {
  elRef.classList.toggle(Theme.LIGHT);
  elRef.classList.toggle(Theme.DARK);
}
