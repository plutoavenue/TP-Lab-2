import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
    return (
        <div className="navigation">
            <nav>
                <ul className="topmenu">
                    <li>
                        <Link to='/'>
                            <button className="act" >
                                Home
                             </button>
                        </Link>
                    </li>
                    <li>    <Link to='/news'>
                        <button className="act" >
                            News
                </button>
                    </Link>

                    </li>

                    <li><Link to='/profile'>
                        <button className="act" >
                            Profile
                         </button>
                    </Link>
                    </li>

                </ul>

            </nav>
        </div>

    );
}

export default Header;
