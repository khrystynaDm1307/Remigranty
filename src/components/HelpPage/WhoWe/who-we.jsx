import React from 'react'
import {Link} from 'react-router-dom';

import LogoImg from './why-we-logo.svg';
import iconRight from './icon-right.svg';

export function WhoWe() {

    return (
        <div className="help-page__who-we">
            <div className="container">
                <h3 className="help-page__who-we--title">Хто ми</h3>
                <div className="help-page__who-we--wrap">
                    <p>
                        Засновники фонду - люди, які побудували великі, успішні та якісні бізнеси за кордоном й повернулись до України, щоб застосовувати знання та навички вдома.
                        Ми - команда фахівців з різних галузей, обʼєднаних однією метою - покращувати країну та міста, давати нові можливості підліткам й допомогати лікарням, які дислокуються в прифронтових містах.
                    </p>
                    <img src={LogoImg} alt=""/>
                </div>

                <div className="help-page__who-we--quote">
                <span>
                    <Link to="https://cepa.org/article/charity-begins-with-drones-funding-ukraines-resistance/">https://cepa.org/article/charity-begins-with-drones-funding-ukraines-resistance/</Link> читайте більше про наших керівників та заснування фонду.
                </span>
                </div>

                <div className="hp-mission">
                    <div className="hp-mission__wrap">
                        <div className="hp-mission__icon-left"></div>
                        <img src={iconRight} className="hp-mission__icon-right" alt=""/>
                        <div className="hp-mission__item">
                            <h3 className="hp-mission__title">Наша місія</h3>
                            <p className="hp-mission__info">Надати українськім лікарням обладнання для порятунку життя</p>
                        </div>
                        <div className="hp-mission__item">
                            <h3 className="hp-mission__title">Наша візія</h3>
                            <p className="hp-mission__info">Об’єднати українців, які після довгого життя за кордоном хочуть інвестувати свої гроші, час та досвід, щоб Україна процвітала.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
