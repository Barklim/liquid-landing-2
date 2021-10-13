import React from "react";
import "./HomePage.css";

import logo from "../assets/logo.svg";
import { ReactComponent as Chat } from "../assets/Chat.svg";
import { ReactComponent as Notification } from "../assets/Notification.svg";
import { ReactComponent as User } from "../assets/User.svg";
import { ReactComponent as BackDrop } from "../assets/BackDrop.svg";
import backCL from "../assets/BackCL.png";
import iPhone from "../assets/iPhone12Pro.png";
import pixel from "../assets/Pixel5.png";
import phoneImg from "../assets/Phone.png";
import phoneImg2 from "../assets/Phone.png";
import { ReactComponent as MFO } from "../assets/MFO.svg";
import { ReactComponent as MFO_M } from "../assets/MFO_m.svg";
import { ReactComponent as DKH } from "../assets/ReasonDKH.svg";
import { ReactComponent as Fraud } from "../assets/Fraud.svg";
import { ReactComponent as PerAnnum } from "../assets/PerAnnum.svg";
import { ReactComponent as Deadlines } from "../assets/Deadlines.svg";
import { ReactComponent as Month } from "../assets/Month.svg";
import { ReactComponent as FlexibleTerms } from "../assets/FlexibleTerms.svg";
import { ReactComponent as Four } from "../assets/Four.svg";
import { ReactComponent as CreditImp } from "../assets/CreditImp.svg";
import { ReactComponent as Group } from "../assets/Group.svg";
import { ReactComponent as BarGreen } from "../assets/BarGreen.svg";
import { ReactComponent as BarRed } from "../assets/BarRed.svg";
import { ReactComponent as BarBlue } from "../assets/BarBlue.svg";
import { ReactComponent as Drop } from "../assets/Drop.svg";
import { ReactComponent as Card } from "../assets/BenefitCard.svg";
import { ReactComponent as Rating } from "../assets/BenefitRating.svg";
import { ReactComponent as Money } from "../assets/BenefitMoney.svg";
import { ReactComponent as PhoneBack } from "../assets/PhoneBack.svg";
// import { ReactComponent as Phone } from "../assets/Phone.svg";
// import { ReactComponent as Phone2 } from "../assets/Phone2.svg";
import { ReactComponent as BSign } from "../assets/BlockSign.svg";
import { ReactComponent as BSign2 } from "../assets/BlockSign2.svg";
import { ReactComponent as Issue } from "../assets/Issue.svg";
import ModalHomePage from "../components/Modal";
import PdfModal from "../components/Pdf";

function HomePage() {
  return (
    <div className="liquidLanding">
      <div>
        {/* <Document
          file={pdfFile}
          // onLoadSuccess={onDocumentLoadSuccess}
          // options={options}
        >
          <Page pageNumber={1} />
          <Page pageNumber={2} />
          <Page pageNumber={3} />
        </Document> */}
      </div>

      <div className="backCL">
        <img alt="BackCL" className="backCL__img" src={backCL} />
      </div>
      <div className="pageWrap">
        <div className="header">
          <a href="#">
            <img alt="liquid logo" className="logo" src={logo} />
          </a>
          <div className="header__right">
            <Chat className="chat" />
            <Notification className="notification" />
            <User className="user" />
          </div>
        </div>
        <div className="mainView">
          <div className="mainView__left">
            <div className="mainView__text">
              Первый&nbsp;честный <br />
              микрокредит <br />в России
            </div>
            <div className="mainView__text_Mobile">
              Первый
              <br />
              честный
              <br />
              микро-
              <br />
              кредит
              <br />
              в&nbsp;России
            </div>
            <div className="mainView__bottomText">
              Возьми&nbsp;до&nbsp;30&nbsp;000&nbsp;рублей&nbsp;за&nbsp;несколько
              минут&nbsp;даже&nbsp;с&nbsp;плохой&nbsp;кредитной&nbsp;историей
            </div>
            {/* <div className="button_primary">Получить</div> */}
            <div className="modalHomePage">
              <ModalHomePage />
            </div>
          </div>
          <div className="mainView__right">
            <BackDrop className="backDrop" />
            <div className="backDropImages">
              <img alt="Phone" className="imgPhone" src={iPhone} />
              <img alt="Pixel" className="imgPixel" src={pixel} />
            </div>
          </div>
        </div>
        <div className="group">
          <Group className="group__img" />
        </div>
        <div className="mainView__subText_Mobile">
          Возьми&nbsp;до&nbsp;30&nbsp;000&nbsp;рублей&nbsp;за&nbsp;несколько
          <br />
          минут&nbsp;даже&nbsp;с&nbsp;плохой&nbsp;кредитной&nbsp;историей
        </div>
        {/* <div className="button_primary_Mobile">Получить</div> */}
        <div className="modalHomePage_Mobile">
          <ModalHomePage />
        </div>
        <div className="reason">
          <div className="reason__header">
            Почему&nbsp;Ликвид,&nbsp;лучше&nbsp;чем
            <br />
            другие&nbsp;микрозаймы?
          </div>
          <div className="reason__header_Mobile">
            Почему&nbsp;Ликвид,&nbsp;лучше
            <br />
            чем&nbsp;другие&nbsp;микрозаймы?
          </div>
          <div className="reason__upper">
            <div className="upper__left">
              <div className="ulHeader">
                <div className="ulHeader__upper">
                  <MFO />
                </div>
                <div className="ulHeader__sub">Работают против вас</div>
                <div className="ulHeader__bottom">
                  <div className="ulHeader__bottom1">
                    <DKH />
                    <span>Ухудшение кредитной истории</span>
                  </div>
                  <div className="ulHeader__bottom2">
                    <Fraud />
                    <span>Мошенничество</span>
                  </div>
                  <div className="ulHeader__bottom1">
                    <PerAnnum />
                    <span>365% годовых</span>
                  </div>
                  <div className="ulHeader__bottom2">
                    <Deadlines />
                    <span>
                      Жесткие&nbsp;сроки&nbsp;выплат
                      <br /> с&nbsp;губительными&nbsp;штрафами
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="upper__right">
              <div className="urHeader">
                <div className="urHeader__upper">
                  <img alt="liquid logo" src={logo} />
                </div>
                <div className="urHeader__sub">Работает на вас</div>
                <div className="urHeader__bottom">
                  <div className="urHeader__bottomC urHeader__bottomC_top">
                    <div className="urHeader__bottom1">
                      <Month />
                      <span>
                        Фиксированный
                        <br />
                        срок&nbsp;2&nbsp;месяца
                      </span>
                    </div>
                    <div className="urHeader__bottom1">
                      <FlexibleTerms />
                      <span>
                        Гибкие&nbsp;условия
                        <br />
                        кредитования
                      </span>
                    </div>
                  </div>
                  <div className="urHeader__bottomC">
                    <div className="urHeader__bottom1">
                      <Four />
                      <span>
                        Всего
                        <br />
                        4&nbsp;платежа
                      </span>
                    </div>
                    <div className="urHeader__bottom1">
                      <CreditImp />
                      <span>
                        Улучшение
                        <br />
                        кредитной&nbsp;истории
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reason__upper_Mobile">
            <div className="rum__header">
              <div className="rum__mfo">
                <MFO_M />
              </div>
              <div className="rum__sub">
                Работают
                <br />
                против&nbsp;вас
              </div>
            </div>
            <div className="rumc">
              <div className="rumc__first">
                <DKH />
                <span>
                  Ухудшение
                  <br />
                  кредитной&nbsp;истории
                </span>
              </div>
              <div className="rumc__second">
                <Fraud />
                <span>Мошенничество</span>
              </div>
              <div className="rumc__third">
                <PerAnnum />
                <span>
                  365%
                  <br />
                  годовых
                </span>
              </div>
              <div className="rumc__forth">
                <Deadlines />
                <span>
                  Жесткие&nbsp;сроки&nbsp;выплат
                  <br />
                  с&nbsp;губительными&nbsp;штрафами
                </span>
              </div>
            </div>
            <div className="rumc2">
              <div className="rumc2__header">
                <img alt="liquid logo" className="rumc2__logo" src={logo} />
                <div className="rumc2__headerText">Работает на вас</div>
              </div>
              <div className="rumc2__body">
                <div className="rumc2__first">
                  <Month />
                  <span>
                    Фиксированный
                    <br />
                    срок&nbsp;2&nbsp;месяца
                  </span>
                </div>
                <div className="rumc2__second">
                  <FlexibleTerms />
                  <span>
                    Гибкие&nbsp;условия
                    <br />
                    кредитования
                  </span>
                </div>

                <div className="rumc2__third">
                  <Four />
                  <span>
                    Всего
                    <br />
                    4&nbsp;платежа
                  </span>
                </div>
                <div className="rumc2__forth">
                  <CreditImp />
                  <span>
                    Улучшение
                    <br />
                    кредитной&nbsp;истории
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reason__bottom">
          <div className="ruLeft">
            <div className="ruLeft__top">
              <BarGreen className="barGreen" />
              <span className="barGreenText">Займи 20 000 рублей</span>
            </div>
            <div className="barRedContainer">
              <BarRed className="barRed" />
              <span className="barRedText">
                Возвращай
                <br />
                всю&nbsp;сумму&nbsp;разом
              </span>
            </div>
          </div>
          <div className="reason__sub_Mobile  ">Традиционные МФО</div>
          <div className="ruRight">
            <div className="ruLeft__top">
              <BarGreen className="barGreen" />
              <span className="barGreenText">Займи 20 000 рублей</span>
            </div>
            <div className="barBlueContainer">
              <div className="barBlueWrap">
                <BarBlue className="barBlue1" />2
              </div>
              <div className="barBlueWrap">
                <BarBlue className="barBlue1" />4
              </div>
              <div className="barBlueWrap">
                <BarBlue className="barBlue1" />6
              </div>
              <div className="barBlueWrap">
                <BarBlue className="barBlue1" />8
              </div>
              <div className="barBlueWeek">нед.</div>
            </div>
            <div className="barBlueBottom">
              Выплачивай&nbsp;поэтапно
              <br />
              с&nbsp;течением&nbsp;времени
            </div>
          </div>
          <div className="reason__sub_Mobile  ">Ликвид микрозайм</div>
        </div>

        <div className="reason__sub">
          <div className="reason__subText">Традиционные МФО</div>
          <div className="reason__subText">Ликвид микрозайм</div>
        </div>

        <div className="benefits">
          <div className="benefits__header">
            <div className="benefits__headerUpper">
              Ликвид&nbsp;Кредит&nbsp;лучше,&nbsp;чем&nbsp;традиционное <br />
              микрокредитование
            </div>
            <div className="benefits__headerUpper_Mobile">
              Ликвид&nbsp;Кредит&nbsp;лучше,
              <br />
              &nbsp;чем&nbsp;традиционное <br />
              микрокредитование
            </div>
            <div className="benefits__headerBottom">
              Мы&nbsp;за&nbsp;финансовую&nbsp;справедливость
              <br />
              и&nbsp;ваше&nbsp;благополучие!
            </div>
          </div>

          <div className="bs1">
            <Card className="bs1__card" />
            <div className="bs1__text">
              <div className="bs1__header">
                Мы&nbsp;не&nbsp;проверяем&nbsp;ваш&nbsp;кредитный&nbsp;рейтинг,
                <br />
                эти&nbsp;цифры&nbsp;не&nbsp;отображают&nbsp;действительность!
              </div>
              <div className="bs1__header_Mobile">
                Мы&nbsp;не&nbsp;проверяем&nbsp;ваш&nbsp;кредитный
                <br />
                &nbsp;рейтинг, эти&nbsp;цифры&nbsp;не&nbsp;отображают
                <br />
                действительность!
              </div>
              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Занимайте&nbsp;до&nbsp;30&nbsp;000&nbsp;рублей&nbsp;даже
                  <br />
                  с&nbsp;плохим&nbsp;кредитным&nbsp;рейтингом
                </div>
              </div>

              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Подавайте&nbsp;заявку&nbsp;и&nbsp;получайте
                  <br />
                  деньги&nbsp;за&nbsp;3&nbsp;минуты.
                </div>
              </div>

              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Кредитная&nbsp;история&nbsp;не&nbsp;важна&nbsp;-&nbsp;мы
                  <br />
                  используем&nbsp;искусственный&nbsp;интеллект
                </div>
              </div>
            </div>
          </div>

          <div className="bs2">
            <Rating className="bs2__card_Mobile" />
            <div className="bs1__text">
              <div className="bs1__header">
                Всегда&nbsp;низкая&nbsp;процентная&nbsp;ставка
                <br />
                и&nbsp;отсутсвие&nbsp;скрытых&nbsp;комиссий
              </div>
              <div className="bs1__header_Mobile">
                Всегда&nbsp;низкая&nbsp;процентная&nbsp;ставка
                <br />
                и&nbsp;отсутсвие&nbsp;скрытых&nbsp;комиссий
              </div>
              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Фиксированная&nbsp;цена,&nbsp;никаких&nbsp;переплат
                  <br />
                  и&nbsp;скрытых&nbsp;платежей
                </div>
              </div>

              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Вы&nbsp;знаете&nbsp;заранее&nbsp;сколько&nbsp;заплатите
                  <br />
                  и&nbsp;это&nbsp;будет&nbsp;дешевле,&nbsp;чем&nbsp;в&nbsp;существующих
                  <br />
                  микрокредитах
                </div>
              </div>
            </div>
            <Rating className="bs2__card" />
          </div>

          <div className="bs3">
            <Money className="bs1__card" />
            <div className="bs1__text">
              <div className="bs1__header">
                Погашайте кредит, когда вам удобно
              </div>
              <div className="bs1__header_Mobile">
                Погашайте кредит,
                <br />
                когда вам удобно
              </div>
              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Выплачивайте&nbsp;кредит&nbsp;на&nbsp;протяжении
                  <br />
                  2&nbsp;месяцев
                </div>
              </div>

              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Изменяйте&nbsp;свой&nbsp;график&nbsp;платежей
                  <br />
                  под&nbsp;ваш&nbsp;стиль&nbsp;жизни
                </div>
              </div>
              <div className="bs1__sub">
                <Drop className="bs1__drop" />
                <div className="bs1__subText">
                  Получайте&nbsp;29-дней&nbsp;бесплатной
                  <br />
                  отсрочки&nbsp;в&nbsp;экстренных&nbsp;случаях
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="phone">
          <PhoneBack className="phone__imgBack" />
          <div className="phone__header">
            Получите&nbsp;до&nbsp;30&nbsp;000&nbsp;рублей
            <br />
            в&nbsp;Ликвид&nbsp;кредит
          </div>
          <div className="button_phone">
            {/* <div className="button_primary button_white">Получить</div> */}
            <div className="modalHomePage modalHomePage_white">
              <ModalHomePage />
            </div>
          </div>
          {/* <Phone className="phone__img" /> */}
          <img alt="Phone" className="phone__img" src={phoneImg} />
        </div>
        <div className="phone_Mobile">
          <PhoneBack className="phone__imgBack_Mobile" />
          <div className="phone__header_Mobile">
            Получите&nbsp;до
            <br />
            30&nbsp;000&nbsp;рублей
            <br />
            в&nbsp;Ликвид&nbsp;кредит
          </div>
          <div className="button_phone">
            {/* <div className="button_primary_Moblie button_white">Получить</div> */}
            <div className="modalHomePage_Mobile modalHomePage2_Mobile modalHomePage_white">
              <ModalHomePage />
            </div>
          </div>
          {/* <Phone2 className="phone__img_Mobile" /> */}
          <img alt="Phone" className="phone__img_Mobile" src={phoneImg2} />
        </div>
        <div className="postInfo">
          <div className="postInfo__header">
            Существующие&nbsp;микрофинансовые&nbsp;организации
            <br />
            работают&nbsp;против&nbsp;людей
          </div>
          <div className="postInfo__sub">
            Микрокредит&nbsp;один&nbsp;из&nbsp;самых&nbsp;востребованных&nbsp;финансовых
            <br />
            инструментов&nbsp;в&nbsp;стране,но&nbsp;в&nbsp;тоже&nbsp;время,&nbsp;самый&nbsp;опасный
          </div>
          <div className="postInfo__issue">
            <div className="postInfo__left">
              <BSign />
              <Issue className="pii_img" />
              <span>
                Полное отсутствие стимулов к инновациям привело к тому, что
                микрокредитные организации взимают максимально возможный процент
                и пытаются заработать на финансовой безграмотности людей
              </span>
            </div>
            <div className="postInfo__right">
              <Drop />
              <div className="postInfo__h1">Решение</div>
              <div className="postInfo__content">
                Мы появились, чтобы это исправить и дать нуждающимся людям
                качественный кредит. Мы хотим помочь вам, а не обмануть.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="postInfo_Mobile">
        <div className="postInfo__header postInfo__header_Mobile">
          Существующие
          <br />
          микрофинансовые
          <br />
          организации
          <br />
          работают&nbsp;против&nbsp;людей
        </div>
        <div className="postInfo__sub postInfo__sub_Mobile">
          Микрокредит&nbsp;один&nbsp;из&nbsp;самых
          <br />
          востребованных&nbsp; финансовых
          <br />
          инструментов&nbsp;в&nbsp;стране,&nbsp;но&nbsp;в&nbsp;тоже&nbsp;время,
          <br />
          самый опасный
        </div>
        <div className="postInfo__issue postInfo__issue_Mobile">
          <div className="postInfo__left postInfo__left_Mobile">
            <BSign2 className="postInfo__bsign2" />
            <Issue className="pii_img pii_img_Mobile" />
            <span>
              Полное отсутствие стимулов к инновациям привело к тому, что
              микрокредитные организации взимают максимально возможный процент и
              пытаются заработать на финансовой безграмотности людей
            </span>
          </div>
          <div className="postInfo__right postInfo__right_Mobile">
            <Drop />
            <div className="postInfo__h1 postInfo__h1_Mobile">Решение</div>
            <div className="postInfo__content postInfo__content_Mobile">
              Мы появились, чтобы это
              <br />
              исправить и дать нуждающимся
              <br />
              людям качественный кредит.
              <br />
              Мы хотим помочь вам,
              <br />а не обмануть.
            </div>
          </div>
        </div>
      </div>

      <div className="preFooter1"></div>
      <div className="preFooter2"></div>

      <div className="footer">
        <div className="footer__upper">
          <div className="footerWrapper">
            <div className="footer__left">
              <div className="footer__left1">
                <a href="#">
                  <img alt="liquid logo" className="footer__logo" src={logo} />
                </a>
                <div className="footer__leftSub">
                  <div>ИНН: 7736332618</div>
                  <div>ОГРН: 1217700023793</div>
                  <div>Email: info@liquidwage.com</div>
                </div>
              </div>
              <div className="footer__left2">
                Адрес: г. Москва, вн.тер.г. муниципальный округ Ломоносовский,
                пр-кт Вернадского, д. 29, э/ком 5/20, офис A7Ю
              </div>
            </div>
            <div className="footer__right">
              <div className="footer__license">
                <PdfModal>
                  <span>
                    Соглашение&nbsp;об&nbsp;обработке&nbsp;
                    <br />
                    персональных&nbsp;данных
                  </span>
                </PdfModal>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerWrapper">
            <div className="footer__left">
              <div className="footerBottom__copyright">
                © 2021 Сайт принадлежит ООО “ЛИКВИДЭЙДЖ”
              </div>
            </div>
            <div className="footerBottom__right">
              <div className="footerBottom__about">
                Сайт не является представительством МФО или банком, не
                осуществляет выдачу займов и кредитов. Все материалы,
                размещенные на сайте имеют информационный характер. Оставляя
                контактные данные, вы соглашаетесь с{" "}
                <PdfModal>
                  <span className="footer_politic">
                    {" "}
                    политикой об обработке персональных данных
                  </span>
                </PdfModal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_Mobile">
        <div className="footer__upper_Mobile">
          <a href="#">
            <img alt="liquid logo" className="footer__logo_Mobile" src={logo} />
          </a>
          <div className="footer__innOgrn_Mobile">
            <div className="footer__inn_Mobile">ИНН: 7736332618</div>
            <div className="footer__ogrn_Mobile">ОГРН: 1217700023793</div>
          </div>
          <div className="footer__mail_Mobile">Email: info@liquidwage.com</div>
          <div className="footer__adress_Mobile">
            Адрес: г. Москва, вн.тер.г. муниципальный округ Ломоносовский, пр-кт
            Вернадского, д. 29, э/ком 5/20, офис A7Ю
          </div>
          <div className="footer__agreement_Mobile">
            <PdfModal>
              <div>
                Соглашение&nbsp;об&nbsp;обработке&nbsp;персональных&nbsp;данных
                <br />
              </div>
            </PdfModal>
          </div>
        </div>

        <div className="footerBottom_Mobile">
          <div className="footerBottom__copyright_Mobile">
            © 2021 Сайт принадлежит ООО “ЛИКВИДЭЙДЖ”
          </div>
          <div className="footerBottom__about_Mobile">
            Сайт не является представительством МФО или банком, не осуществляет
            выдачу займов и кредитов. Все материалы, размещенные на сайте имеют
            информационный характер. Оставляя контактные данные, вы соглашаетесь
            с{" "}
            <PdfModal>
              <span className="footer_politic_Mobile">
                политикой об обработке персональных данных
                <div></div>
              </span>
            </PdfModal>
          </div>
        </div>
      </div>
      {/* <div className="preFooter1"></div>
      <div className="preFooter2"></div> */}
    </div>
  );
}

export default HomePage;
