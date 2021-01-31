import React  from "react";
import styles from './style.module.css'
import Link from "next/link";
import { motion } from "framer-motion";

class Footer extends React.Component{

    render() {
        return (
            <footer className={styles.footer}>
                <Link href={`/contact`}>
                <motion.div className={styles.a}
                            whileHover={{ scale: 1.2, rotate: 0 }}
                            whileTap={{ scale: 0.8, rotate: 0, borderRadius: "100%" }}
                >
                        Contact
                </motion.div>
                </Link>
                <div>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                    <span>TikTok</span>
                </div>
                <Link href={`/legal`}>
                <motion.div className={styles.a}
                            whileHover={{ scale: 1.2, rotate: 0 }}
                            whileTap={{ scale: 0.8, rotate: 0, borderRadius: "100%" }}
                >
                    Mentions légales
                </motion.div>
                        
                </Link>

            </footer>
        );
    }
}

export default Footer