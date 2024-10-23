import img01 from "./assets/img/img01.jpg"
import img02 from "./assets/img/img02.jpg"
import videoSample from "./assets/video/video.mp4"
import styles from "./App.module.css"

const App = () =>{
     return (
       <div className={styles.container}>
         <h1 className={styles.title}>Nature</h1>

         <img src={img01} alt="arvores" />
         <p className={styles.label}>Arvores</p>

         <img src={img02} alt="arvores com montanha" />
         <p className={styles.label}>Árvores com montanha</p>

         <video autoPlay={true} loop={true} controls={true}>
           <source src={videoSample} type="video/mp4" />
         </video>
         <p className={styles.label}> Um vídeo da natureza</p>
       </div>
     );
};
 export default App;
