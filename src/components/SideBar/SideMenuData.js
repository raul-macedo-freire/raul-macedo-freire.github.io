import home from '../../images/MenuIcons/LabelsIcons/home_full.png';
import atom from '../../images/MenuIcons/LabelsIcons/atom_icon.png';
import code from '../../images/MenuIcons/LabelsIcons/icon_code.png';
import effects from '../../images/MenuIcons/LabelsIcons/icon_effects.png';
import envelope from '../../images/MenuIcons/LabelsIcons/icon_envelope_close.png';

let SideMenuData = [
  {
    title: 'General Information',
    id: 'general_information',
    path: '/',
    cName: 'nav-text',
    image: home,
  },
  {
    title: 'Chemical Engineering',
    id: 'chemical_engineering',
    path: '/chemicalEngineering',
    cName: 'nav-text',
    image: atom,
  },
  {
    title: 'Coding',
    id: 'Coding',
    path: '/coding',
    cName: 'nav-text',
    image: code,
  },
  {
    title: 'Experiences',
    id: 'Experiences',
    path: '/experiences',
    cName: 'nav-text',
    image: effects,
  },
  {
    title: 'Contacts',
    id: 'Contacts',
    path: '/contacts',
    cName: 'nav-text',
    image: envelope,
  },
];


export default SideMenuData;