import React, {Component} from 'react';
import Link from 'next/link';

const Sell = (props) => {
    return (
        <div>
            <p>Sell!</p>
            <Link href="/">
                <a>Hey!</a>
            </Link>
        </div>
    );
}

export default Sell;