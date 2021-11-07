import s from './LoginScreen.module.css'
import {Swiper} from 'swiper'
import SwiperSlide from 'react'


const LoginScreen = () => {
    return(
        <div className={s.main}>
            <h1 className={s.title}>Lin Keeper</h1>
            {/*<div className={s.block}></div>*/}
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
            <p className={s.text}>(Текст про то, что это за приложение)</p>
            <button className={s.btnLogin}>Вход с помощью Google</button>
            <button className={s.btnLogin}>Вход с помощью Facebook</button>
            <button className={s.btnLogin}>Вход с помощью VK</button>
            <button className={s.btnLogin}>Вход с помощью Yandex</button>
        </div>
    )
}

export default LoginScreen;