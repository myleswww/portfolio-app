
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/AboutMe";
import Particles from "react-particles-js";

function App() {
  return (
    <>
    <Particles 
        
      params={{
        polygon:{
          scale: 5,
          type: "inside",
          draw:{
            stroke:{
              color: "#F9C80E",
              width: 50
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
            width: 2,
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
    <About />
    </>
  );
}

export default App;
