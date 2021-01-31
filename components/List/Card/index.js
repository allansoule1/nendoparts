import React  from "react";
import styles from './style.module.css'

class Card extends React.Component{

    render() {

        const part = this.props.part;
        const quality_color = ["#F55600", "#D48E0B", "#EBCF00", "#84D40B", "#0CF731"];
        return (
            <article className={styles.content}>
                <p style={{textAlign: "center", marginBottom:"0", width:"100%"}} className={styles.text}>{part.name}</p>
                <p className={styles.subtext}>{part.type}</p>
                <div
                    className={styles.image}
                    style={{backgroundImage: `url(${part.image.replace(/(\r\n|\n|\r)/gm, "")})`}}
                />
                <div className={styles.quality}>
                    <p >Quality : </p>
                    <p style={{textAlign: "right"}} className={styles.text}>{part.price}</p>
                    <ul className={styles.note}>

                        {Array(part.quality).fill().map(() => {
                            return (<li style={{backgroundColor: quality_color[part.quality-1]}} className={styles.notum}/>)
                        })}
                    </ul>

                </div>



            </article>
        );
    }
}

export default Card