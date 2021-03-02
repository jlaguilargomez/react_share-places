import ReactDOM from 'react-dom';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  // Renderizamos el contenido dentro de la etiqueta con el ID seleccionado (fuera del id="root")
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
