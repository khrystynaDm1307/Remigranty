import React from 'react'
import {Link} from 'react-router-dom';

import headImg from './help.png'
import headBg from './bg-svg.svg'
import headMobile from './head-mobile.png';

export function HelpHead() {

    return (
        <div style={{position: "relative"}}>
        <div className="container">
            <div className="help-page__head">
                <div className="help-page__head--info">
                    <img src={headMobile} className="help-page__head--mobile" alt=""/>
                    <h1 className="help-page__head--title">Допоможіть нам забезпечити
                        українські лікарні всім необхідним обладнанням для порятунку життя</h1>
                    <div className="help-page__hashtags">#supportUkraine #savelives</div>
                    <Link to="#" className="help-page__btn">Підтримати нас</Link>
                </div>
                <div className="help-page__head--image">
                    <img src={headImg} alt=""/>
                </div>

            </div>
        </div>
            <img src={headBg} className="help-page__head--bg" alt=""/>
        </div>
    )
}
