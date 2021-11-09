import s from './LoginScreen.module.css'
import SwiftSlider from 'react-swift-slider'
import {Link} from "react-router-dom";

// import { fa-brands fa-google } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LoginScreen = () => {

    const data = [
        {'id': '1', 'src': 'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg'},
        {'id': '2', 'src': 'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg'},
        {'id': '3', 'src': 'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg'},
        {'id': '4', 'src': 'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
        {'id': '5', 'src': 'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
    ];

    return (
        <div className={s.main}>
            <p className={s.title}>Lin Keeper</p>
            {/*<div className={s.block}></div>*/}
            <SwiftSlider className={s.slider} data={data} height={264} activeDotColor={'black'}/>
            <p className={s.text}>(Текст про то, что это за приложение)</p>
            <Link to={{pathname: '/main'}} className={s.link}>
            <button className={s.btnLogin}>Вход с помощью Google
                <img src="/images/google.png" alt="google"/>
            </button>
            </Link>
            <Link to={{pathname: '/main'}} className={s.link}>
            <button className={s.btnLogin}>Вход с помощью Facebook
                <img src="/images/facebook.png" alt="facebook"/>
            </button>
            </Link>
            <Link to={{pathname: '/main'}} className={s.link}>
            <button className={s.btnLogin}>Вход с помощью VK
                <img src="/images/VK.png" alt="VK"/>
            </button>
            </Link>
            <Link to={{pathname: '/main'}} className={s.link}>
            <button className={s.btnLogin}>Вход с помощью Yandex
                <img src="/images/yandex.png" alt="yandex"/>
            </button>
            </Link>
        </div>
    )
}

export default LoginScreen;