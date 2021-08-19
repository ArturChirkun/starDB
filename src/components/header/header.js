import React from 'react';

import './header.css';

const Header = ({onContextChange}) => {
    return (
        <div className='header d-flex'>
            <h1> Star DB</h1>
                <ul className='d-flex'>
                    <li>
                        <a href='#'>
                         People 
                        </a>
                    </li>
                    <li>
                         <a href='#'> 
                         Planets 
                         </a>
                    </li>
                    <li>
                        <a href='#'>
                         Starship
                        </a>
                    </li>
                </ul>

                <button className='btn btn-primary btn-sm'
                onClick = {onContextChange}> change context</button>
        </div>

) ;

};

export default Header;