import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const Footer = () => {
    const newPostHandler = () => {
        console.log('work')
    }

    return (
        <div className={styles.footer}>
            <Link className={styles.home_icon} to='/'>
                <FontAwesomeIcon icon={faHome}/>
            </Link>
            <Link className={styles.newPost} to='/main/addlink'>
                <FontAwesomeIcon className={styles.newPostIcon} icon={faPlus}/>
            </Link>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    );
}

export default Footer;