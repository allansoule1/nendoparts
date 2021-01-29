import React  from "react";
import styles from './style.module.css'

class Footer extends React.Component{

    render() {
        return (
            <footer className={styles.footer}>
                <p>Contact</p>
                <div>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                    <span>TikTok</span>
                </div>
                <p>Mentions légales</p>
            </footer>
        );
    }
}

export default Footer