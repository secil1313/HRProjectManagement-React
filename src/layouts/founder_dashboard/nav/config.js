// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Personnel',
    path: '/founder/personnel/panel',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Manager',
    path: '/founder/panel',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Add Personnel',
    path: '/founder/add-personnel',
    icon: icon('ic_user'),
  },
  {
    title: 'Add Manager',
    path: '/founder/add-manager',
    icon: icon('ic_user'),
  },
];

export default navConfig;
