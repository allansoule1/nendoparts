import React  from "react";
import styles from './style.module.css'

class Content extends React.Component{

    render() {
        return (
            <article className={styles.content}>
                {this.props.imgLeft ? "" : <div>{this.props.text.map(line => <p>{line}</p>)}</div>}


                <img src="/hp_1.jpg" alt="Une figurine Nendoroid custom clignant de l'oeil à la caméra est entourée de boîtes"/>
                {this.props.imgLeft ? <div>{this.props.text.map(line => <p>{line}</p>)}</div> : ""}
            </article>
        );
    }
}

export default Content