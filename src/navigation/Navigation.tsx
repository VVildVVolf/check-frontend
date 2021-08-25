import { Link, useLocation } from 'react-router-dom';

import {routes} from '../routes';

import './Navigation.css';

function Navigation(props: any){
    const location = useLocation();
    const elements = routes.map(r =>{
        const classname = "nav-link" + (location.pathname === r.Path ? " active" : "");
        console.log(location.pathname);
        console.log(location.pathname === r.Path);
        return (<li key={r.Path} className="nav-item"><Link to={r.Path} className={classname}><i className={r.flaticonClass}></i> {r.VisiblePhrase}</Link></li>);})
    return (
    <div className="navigation">
        <label>PLATFORM</label>
        <nav>
            <ul className="nav flex-column">{elements}</ul>
        </nav>
    </div>);
}

export default Navigation;