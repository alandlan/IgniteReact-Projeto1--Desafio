import styles from './Header.module.css';
import logoRocket from '../assets/rocket.png';

export function Header() {
    return (
        <header className={styles.header}>
                <div>
                    <img className={styles.logoRocket} src={logoRocket} alt='' />
                </div>
                <div className={styles.todo}>
                    <span className={styles.to}>to</span>
                    <span className={styles.do}>do</span>
                </div>            
        </header>
    );
}