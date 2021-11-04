import styles from './Header.module.css'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHashtag, faSearch} from "@fortawesome/free-solid-svg-icons";
import Hashtag from "./Hashtag/HeaderHashtag";

let Header = (props) => {

    return(
        <div className={styles.mainHeader}>
            <div className={styles.headerTop}>
                <div className={styles.form}>
                    <div className={styles.grid}>
                        <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <div className={styles.input}>
                        <input className={styles.headerInput} type="text" placeholder='Поиск по тегу'/>
                    </div>
                    <div className={styles.search}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <FontAwesomeIcon className={styles.userIcon} icon={faUser} />
            </div>
            <div className={styles.headerHashtag}>
                <Hashtag data={props.data} />
            </div>
        </div>
    )
}

export default Header;

