import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import parth from '../images/parth1.jpeg';
class About extends React.Component{
    render(){
        return(
            <div className="about_bg">
            <div className="container about_bg" id="About">
                <h1 className="text-center">About ME</h1>
                <div className="row">
                
                    <div className="col-lg-5" data-aos="fade-up">
                        <img src={parth} className="img-fluid img_about" />
                    </div>
                    <div className="col-lg-6 text_about" data-aos="fade-down">
                        <h5 className="text_about">My name is Parth Patel. I am an undergraduate in Information and Communication Technology at School of Engineering and Applied Sciences,Ahmedabad University. I make websites and mobile applications for fun and try to learn concepts of software development through it. I believe that the more you code whether it be competitive or development you will learn something new and interesting about that language with each line. I usually keep track of trends in programming through github and stackoverflow to be aware of what is the next big thing.Currently, trying to learn Flutter and improve my skills as a MERN stack developer. By the way, I love to play table tennis and that is the only reason I go to recreation room at my university.</h5>
                    </div>
                </div>
                <br/>
            </div>
            </div>
        )
    }
}

export default About;