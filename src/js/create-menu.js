import menuItems from '../menu.json';
import menuTemplate from '../menu-item.hbs';

export default menuItems
  .map(elem => {
    return menuTemplate(elem);
  })
  .join('');
