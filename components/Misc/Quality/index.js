import React  from "react";
import styles from './style.module.css'

class Quality extends React.Component{



    render() {

        const note = this.props.note;
        const quality_color = ["#F55600", "#D48E0B", "#EBCF00", "#84D40B", "#0CF731"];

        return (
            <ul className={styles.note}>

                {Array(note).fill().map(() => {
                    return (<li style={{backgroundColor: quality_color[note-1]}} className={styles.notum}/>)
                })}
            </ul>
        );
    }
}

export default Quality