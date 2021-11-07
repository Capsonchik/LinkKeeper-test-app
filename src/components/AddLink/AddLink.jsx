import s from './addLink.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons/faHashtag";
import {Link} from "react-router-dom";

const AddLink = () => {
    return(
        <div className={s.modal}>
            <div className={s.content}>
                <form className={s.form} action="#">
                    <input className={s.form_name} type="text" placeholder='Название'/>
                    <input className={s.form_url} type="url" placeholder='Ссылка'/>
                    <textarea className={s.form_text} placeholder='Описание'>

                    </textarea>
                    <div className={s.hashtag_input}>
                        <FontAwesomeIcon className={s.icon} icon={faHashtag} />
                    </div>
                    <div className={s.form_btn}>
                        <input className={s.reset_btn} type="reset" value='Отменить'/>
                        {/*<input className={s.submit_btn} type="submit" value='Отправить'/>*/}
                        <Link to='/main' className={s.submit_btn}>
                            Отправить
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddLink;