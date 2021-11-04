import styles from './HeaderHashtag.module.css'
import React from "react";

function Hashtag (props) {
    const tags = props.data
    const render = tags.map(el => {
        return(
            <div className={styles.hashtagBlock}>
                <div className={styles.hashtagName}>
                    <p className={styles.hashtagHeader}>#<span className={styles.span}>{el.title}</span></p>

                </div>
            </div>
        )
    })
        return(
            <>
                {render}
            </>
        )
    }




export default React.memo(Hashtag);



