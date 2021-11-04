import styles from './Link.module.css'
import React from 'react'

let Link = (props) => {
    const links = props.links
    const renderLinks = links.map(el => {
        return(
            <>
                <div className={styles.mainLink}>
                    <div className={styles.blockHeader}>
                        <h4>{el.title}</h4>
                    </div>
                    <div className={styles.blockInfo}>
                        <p className={styles.description}>{el.description}</p>
                        <p className={styles.link}>{el.url}</p>
                        <p className={styles.linkHashtag}>#{el.tags}</p>
                    </div>
                </div>
            </>
        )
    })

    return(
        // <div className={styles.mainLink}>
        //     {/*<div className={styles.blockHeader}>*/}
        //     {/*    <h4>Header Name</h4>*/}
        //     {/*</div>*/}
        //     {/*<div className={styles.blockInfo}>*/}
        //     {/*    <p className={styles.description}>Description</p>*/}
        //     {/*    <p className={styles.link}>Link Here</p>*/}
        //     {/*    <p className={styles.linkHashtag}>#HashTag here</p>*/}
        //     {/*</div>*/}
        //
        // </div>
        <>
            {renderLinks}
        </>
    )
}

export default Link;

