import React,{ useEffect } from 'react';
import logo from '../logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import parth from "../images/logos/logo.png";
import ReactTypingEffect from 'react-typing-effect';
// import './App.css';


class Tag extends React.Component{
    
    // async wai(){

    //     await setTimeout(() => {
    //        console.log('wait ho gya') 
    //     }, 20000);
    //     return(
    //         <h1 data-aos="fade-up" data-aos-duration="3000000000000000000"><ReactTypingEffect 

    //                  staticText={"I am "}
    //                  text={["Parth Patel","a Full Stack Developer",'an Android Developer','an IT guy','a student','an ICT engineer']} 
    //                  speed={100}
    //                  eraseDelay={200}
    //                  typingDelay={2000}/> </h1>
    //     );
    // }
    render(){
        return (
            <div className="tag_bg">
                <div className="text-center tag_text"  style={{color : "white"}}>
                     <img src={parth} className=" tag_img" />
                     
                {/* {this.wai()}      */}
                       <h1 data-aos="fade-down" data-aos-duration="3000000000000000000"><ReactTypingEffect 

                 staticText={"I am "}
                 text={["Parth Patel","a Full Stack Developer",'an Android Developer','an IT guy','a student','an ICT engineer']} 
                 speed={100}
                 eraseDelay={200}
                 typingDelay={1000}/> </h1>

                     
                     {/* <h2>Developer</h2> */}
                     
                </div>
            </div>
        )
    }
};

export default Tag;