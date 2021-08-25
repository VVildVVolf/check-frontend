import React from 'react';

function NumbersPage(){
    return (<div>
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Purchase Numbers</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">My numbers</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Hosted messaging</a>
            </li>
        </ul>
        <hr />
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked />
            <label className="btn btn-outline-primary" >10 DLC</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
            <label className="btn btn-outline-primary" >Toll free</label>
        </div>
    </div>);
}

export default NumbersPage;