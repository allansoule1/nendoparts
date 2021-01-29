import React  from "react";
import styles from './style.module.css'

class Content extends React.Component{

    render() {
        return (
            <article className={styles.content}>
                <div>
                    {
                        this.props.text.map(line => <p>{line}</p>)
                    }
                </div>

                <img src="/hp_1.jpg" alt="Une figurine Nendoroid custom clignant de l'oeil à la caméra est entourée de boîtes"/>
            </article>
        );
    }
}

export default Content