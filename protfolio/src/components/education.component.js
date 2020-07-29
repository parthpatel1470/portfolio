import React from 'react';
import ahduni from '../images/logos/ahduni.png';

const Education_box= props =>(
    <div className="col-lg-12" data-aos="fade-down">
        <div className="container education_box">
        <small className="float-right">{props.education.startDate} to {props.education.endDate}</small>

        
        <a href={props.education.link} target='_blank'><img src={ahduni} className="img-fluid" /></a>
        <br />
        <br />
        <h3 >{props.education.title}</h3>
        <p className="float-right">CGPA : {props.education.CPGA}</p>
        <h3 className="lead ">{props.education.program}</h3>
        
        </div>
    </div>

);

class Education extends React.Component{
    constructor(props){
    super(props)
        this.state={
                          
              educations:[{title:'UnderGraduate',program:'Bachelor of Technology in Information and Communication Technology',schoolName:'Ahmedabad University',startDate:'July,2018',endDate:'',link:'https://ahduni.edu.in/',CPGA:'2.8'},
              ]
        }
    }
    
    education_list(){
        return this.state.educations.map(current =>{
            return <Education_box education={current}  />;
        })
    }
    render(){
        return(
            <div className="container-fluid education_bg" id="Education">
                <hr />
                <h1 className="text-center"> Education</h1>
                <div className="row">
                {this.education_list() }
                </div>
                <br />
            </div>
        );
    }
}

export default Education;