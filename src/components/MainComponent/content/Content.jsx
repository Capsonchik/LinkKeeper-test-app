import styles from './Content.module.css'
import Link from "./Links/Link";

let Content = (props) => {
    return(
        <div className={styles.contentBlock}>
            <Link links={props.data} />
        </div>
    )
}

export default Content;