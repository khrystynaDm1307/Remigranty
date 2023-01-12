import React from 'react'
import {Link} from 'react-router-dom';

import hospitalIcon from './hospital.svg'
import hospitalWhiteIcon from './hospital-white.svg'

import bgLeftImg from './bg-left.svg'
import bgRightImg from './bg-right.svg'


export function Progress() {

    return (
        <div className="hp-progress">
            <h3 className="hp-progress__title">Наші досягнення</h3>
            <ul className="hp-progress__list">
                <li>
                    <div className="hp-progress__icon">
                        <img src={hospitalIcon} alt=""/>
                    </div>
                    <div className="hp-progress__price">809 357 $</div>
                    <div className="hp-progress__info">
                        Зібрано для
                        Запорізької Обласної Лікарні
                    </div>
                </li>
                <li>
                    <div className="hp-progress__icon" style={{background: '#0A17B7'}}>
                        <img src={hospitalWhiteIcon} alt=""/>
                    </div>
                    <div className="hp-progress__price">743 305 ₴</div>
                    <div className="hp-progress__info">
                        Зібрано для
                        Харківської Обласної Лікарні
                    </div>
                </li>
                <li>
                    <div className="hp-progress__icon" style={{background: '#F7981A'}}>
                        <img src={hospitalIcon} alt=""/>
                    </div>
                    <div className="hp-progress__price">691 082 ₴</div>
                    <div className="hp-progress__info">
                        Зібрано для
                        Харківської клінічної лікарні на залізничному транспорті N1
                    </div>
                </li>
            </ul>
            <div className="hp-progress__btn">
                <Link to="#" className="help-page__btn">Пітримати збір</Link>
            </div>
            <img src={bgLeftImg} class="hp-progress__bg-left" alt=""/>
            <img src={bgRightImg} class="hp-progress__bg-right" alt=""/>
        </div>
    )
}
