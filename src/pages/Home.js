import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../sass/main.scss";



// Components
import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import Loader from "../components/Loader.js";
import CustomCursor from "../components/CustomCursor.js";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type='crossfade'>
      <CustomCursor />
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img src={process.env.PUBLIC_URL + `/images/models.jpg`} alt="boo" layoutId="main-image-1" transition= {{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6}} />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
    
  );
}

export default Home;
