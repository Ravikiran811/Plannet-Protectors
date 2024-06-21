import styles from'./problem.module.css';
import airPollution from './images/air_pollution.jpeg';
import plastic from'./images/plastic.jpg';
import global from './images/globalwarming.jpg';
import deforest from './images/deforest.jpg'
import water from './images/water.jpg';
import waste from './images/wate.jpeg';
import chemical from './images/chemical.jpg';
import desert from './images/desert.jpg';
import ocean from './images/ocean.jpg';
import ozone from './images/ozone.jpg';
import {NavLink,Outlet,Link} from 'react-router-dom';
function Problems(){

    return(
        <>
            <header className={styles.header1}>
                <h1>Global Environmental Challenges</h1>
            </header>
            <h3 className={styles.message}>Your voice matters! Share your ideas to help create a better, greener world for us all.</h3>
            <main className={styles.main1}>
                <Link style={{textDecoration:'none'}} to={`airpollution/AirPollution` }>
                    <div className={styles.main2}>
                        <div className={styles.list_p}>
                            <img src={airPollution}/>
                            <h3>Air Pollution</h3>
                            <p>Join the fight against air pollution: breathe cleaner, live healthier.</p>
                        </div>
                    </div>
                </Link>
                <NavLink style={{textDecoration:'none'}} to="airpollution/PlasticPollution" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={plastic}/>
                        <h3>Plastic Pollution</h3>
                        <p>Reduce plastic use to protect our oceans and wildlife from pollution.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/GlobalWarming" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={global}/>
                        <h3>Global Warming</h3>
                        <p>Act now to combat global warming and protect our planet.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/Deforestation" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={deforest}/>
                        <h3>Deforestation</h3>
                        <p>Earth's lungs disappearing with every tree</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/WaterPollution" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={water}/>
                        <h3>Water Pollution</h3>
                        <p>Every drop counts: prevent water pollution, protect life.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/WasteManagement" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={waste}/>
                        <h3>Waste Management Issues</h3>
                        <p>Effective waste management: keeping our planet clean, one step at a time.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/ChemicalPollution" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={chemical}/>
                        <h3>Chemical Pollution</h3>
                        <p>Chemical pollution: Know what you're releasing, it affects us all.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/Desertification" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={desert}/>
                        <h3>Desertification</h3>
                        <p>hen fertile land becomes desert, impacting ecosystems and livelihoods.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/OceanAcidification" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={ocean}/>
                        <h3>Ocean Acidification</h3>
                        <p>Ocean acidification: ocean heartburn from too much CO2.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/OzoneLayerDepletion" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={ozone}/>
                        <h3>Ozone Layer Depletion</h3>
                        <p>Protect the ozone layer, to shield life from harmful UV rays.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/WaterPollution" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={water}/>
                        <h3>Water Pollution</h3>
                        <p>Every drop counts: prevent water pollution, protect life.</p>
                    </div>
                </div>
                </NavLink>
                <NavLink style={{textDecoration:'none'}} to="airpollution/PlasticPollution" >
                <div className={styles.main2}>
                    <div className={styles.list_p}>
                        <img src={plastic}/>
                        <h3>Plastic Pollution</h3>
                        <p>Reduce plastic use to protect our oceans and wildlife from pollution.</p>
                    </div>
                </div>
                </NavLink>
            </main>
            <footer className={styles.footer1}>
                Footer
            </footer>
            <Outlet />
        </>
    )   ;
}

export default Problems;