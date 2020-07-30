import React from 'react';
// import images from '../images/';

const Experience_box= props =>(
<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
  <div class="card">
    <div class="card-body ">
<small class="float-right" style={{color: 'darkgray'}}>{props.experience.startDate} to {props.experience.endDate}</small>
        <h3 class="bold card-title">{props.experience.designation} </h3>
        <h4 class="card-title"><a href={"https://"+props.experience.link} target="_blank">{props.experience.firm}</a> </h4>
        <p class="card-text">{props.experience.description}</p>
        
        {/* <button class="btn-primary ">Read more</button> */}

    </div>
  </div>
</div>



);

class Experience extends React.Component{
    constructor(props){
    super(props)
        this.state={
                          
              experiences:[{designation:'Front-end Developer',description:'Worked on designing one of their project ( service) called as Dolphyn',firm:'Null Innovation',startDate:'11th, May, 2020',endDate:'19th, July, 2020',link:'www.nulliot.com'},
              {designation:'name',description:'name',firm:' Innovation',startDate:'',endDate:'',link:'www.nulliot.com'}]
        }
    }
    
    experience_list(){
        return this.state.experiences.map(current =>{
            return <Experience_box experience={current}  />;
        })
    }
    render(){
        return(
            <div className="container project_bg" id="Experience">
                <hr />
                <h1 className="text-center">Experience</h1>
                <div className="row">
                { this.experience_list() }
                </div>
                <br />
            </div>
        );
    }
}

export default Experience;