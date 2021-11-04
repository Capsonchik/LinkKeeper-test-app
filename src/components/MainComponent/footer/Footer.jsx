import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Footer = () => {
    const newPostHandler = () => {
        console.log('work')
    }

    return(
        <div className={styles.footer}>
            <FontAwesomeIcon icon={faHome} />
            {/*<div  className={styles.newPost}>*/}
            {/*    <FontAwesomeIcon className={styles.newPostIcon} icon={faPlus} />*/}
            {/*</div>*/}
            <button onClick={newPostHandler} className={styles.newPost}>
                <Link to='/main/addlink'>
                    <FontAwesomeIcon className={styles.newPostIcon} icon={faPlus} />
                </Link>
            </button>
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
}

export default Footer;