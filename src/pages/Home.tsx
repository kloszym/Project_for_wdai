import styles from "./main_div.module.css";
import title from "./text4.png"
import family from "./family.png"


const Home = () => {
    
    return <div className={styles.base}>
        <img src={title} style={{width:"80%"}}/>
        <div className={styles.twoColumns}>
            <div style={{width:"50%", height:"auto" , fontSize:"1.3vw"}}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed elit eu dolor dictum cursus.Morbi nec sagittis risus. </p><p>Sed vehicula sagittis nibh, vitae lobortis ligula elementum et. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p> Pellentesque laoreet sapien at turpis viverra tincidunt. Morbi purus massa, efficitur vel imperdiet nec, dictum non dui. Etiam semper maximus dui, in efficitur libero fringilla sed. Nunc a nulla in nunc volutpat dapibus vel eu arcu.</p><p> Curabitur vitae nisl justo. Integer lobortis quam laoreet nibh tincidunt, sed pharetra felis consectetur. Nullam ac sem non risus hendrerit commodo in sit amet quam. Aliquam auctor commodo turpis.</p></div>
            <img src={family} style={{width:"auto", height:"50vh"}}/>
        </div>
    </div>
  };
  
  export default Home;