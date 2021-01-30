import React  from "react";
import styles from './style.module.css'
import Link from 'next/link';

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
                <p>
                    <Link href="/legal-notices">
                        <a>Mentions légales</a>
                    </Link>
                </p>
            </footer>
        );
    }
}

export default Footer