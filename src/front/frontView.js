import styles from'./frontview.module.css';
import image1 from './images.png';
// import image2 from './nature1.jpg';
import { NavLink } from "react-router-dom";
// import EathProblems from './problems';
function FrontView(){
    return(
        <>
            <header className={styles.header1}>
            </header>
            <header className={styles.heading1}>
                <div className={styles.head1}>
                    <img src={image1} className={styles.image1} />
                    <h1 className={styles.head1h1}>EcoGuardians</h1>
                    <h1> | </h1>
                    <h1>Demo Project</h1>
                </div>
            </header>
            <footer className={styles.footer1}> 
                <header className={styles.header2}>
                    <button style={{ marginLeft: '100px' }}>Home</button>
                    <button>About</button>
                    <button>Contact</button>
                    <button>Team</button>
                    <button>News</button>
                    <button>Resources</button>
                    <button style={{ marginLeft: '700px' }}>Sign-in</button>
                    <button style={{  }}>Register</button>
                </header>
                <div className={styles.footerImg}>
                    {/* <img src={image2} /> */}
                    <div style={{marginLeft:'250px'}}>
                    <h1>Earth's Concerns Mapped Out .....</h1>
                       <NavLink to="problems"><button> Learn More</button></NavLink>
                    </div>
                </div>
                <footer className={styles.footer2}>
                <p style={{marginLeft: '100px'}}>"Earth's Concerns Mapped Out" suggests a visual
                        representation of the various issues affecting
                        the planet, providing a clear and concise<br /> overview of its challenges.</p>
                </footer>
            </footer>

        </>
    );
}
export default FrontView;