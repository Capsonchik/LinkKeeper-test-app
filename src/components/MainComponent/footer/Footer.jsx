import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faPlus} from "@fortawesome/free-solid-svg-icons";

let Footer = () => {
    return(
        <div className={styles.footer}>
            <FontAwesomeIcon icon={faHome} />
            <div className={styles.newPost}>
                <FontAwesomeIcon className={styles.newPostIcon} icon={faPlus} />
            </div>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}

export default Footer;