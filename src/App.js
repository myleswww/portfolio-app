
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Particles from "react-particles-js";

import Footer from "./components/Footer";
import icon from "./outrun-sun-icon.ico";

function App() {
  return (
    <>
    <Particles 
      options={{
        interactivity:{
          detectsOn: "window",
          events:{
            onHover:{
              enable:true,
              mode: "repulse"
            }

        }}
        
      }}  
      params={{
        polygon:{
          scale: 5,
          type: "inside",
          draw:{
            stroke:{
              color: "#F9C80E",
              width: 0
            }
          }
        },
        particles:{
          collisions:{
            enable: true
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          color:{
            value: "#FF4365"
          },
          shape:{
            type: "circle"
          },
          size:{
            random: true,
            value: 8
          },
          links:{
            color: "#F9C80E",
            width: 0,
            distance: 150 
          },
          line_linked:{
            shadow:{
              enable: true,
              color: "#FF4365",
              blur: 10
            }
          }
        },
        number:{
          value: 80,
          density: {
            enable: true, 
            value_area: 800
          }
          
        }
      }}
    
    />
    <Navbar />
    <Header />
    <Footer />
    </>
  );
}

export default App;
