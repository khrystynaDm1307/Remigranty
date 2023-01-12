
import './about-page.css'

import aboutDesktopImg from './about-desktop.png'
import aboutMobileImg from './about-mobile.png'
import quoteIcon from './quote.png'

export function AboutProject() {
  return (
    <div className="about-page">
        <div className="container">
            <div className="about-page__head">
                <img src={aboutMobileImg} className="about-page__mobile" alt=""/>
                <div className="about-page__wrap">
                    <div className="about-page__info">
                        <h1 className="about-page__title">Про проект</h1>
                        <p>
                            У звичайному житті, наша команда - це підприємці з різних галузей, ми забезпечуємо людей роботою, платимо податки та працюємо на благо нашої Батьківщини. На жаль, нам довелось швидко пристосуватись до нової військової реальності та, розвивати проект з цілями, відмінними від першопочаткових та робити свій внесок в боротьбу країни.
                            На рахунку фонду Ремігранти - закриті збори то комунікація з інвесторами з усього світу.
                            Люди, які проводять ризиковані операції під постійною загрозою бомбардувань потребують допомоги, яку не можна їм не надати.
                        </p>
                        <p>
                            <b>Наші збори тривають, а лікарні все ще потребують допомоги, тому наша команда пропонує гуртуватись та творити добро разом!</b>
                        </p>
                    </div>
                    <div className="about-page__img">
                        <img src={aboutDesktopImg} alt=""/>
                    </div>
                </div>
            </div>
            <div className="about-page__quote">
                <div>
                    <span>Наша мета станом на зараз – забезпечити лікарні, які знаходяться в Запорізькій, Харківській та Донецькій областях,  найнебезпечніших районах нашої країни, необхідним медичним обладнанням, допомогти нашим лікарям рятувати життя та надати кожній людині якісне лікування.</span>
                    <img src={quoteIcon} alt=""/>
                </div>
            </div>
        </div>

    </div>
  );
}

