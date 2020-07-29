import React from 'react';
// import images from '../images/';

const Project_box= props =>(<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
<div class="card shadow_box" data-aos="fade-up">
    <div class="card-body " >
        <small class="float-right" style={{color: 'darkgray'}}>TeamSize: {props.project.teamSize}</small>
        <br/>
        <h3 class="text-center card-title">{props.project.title} </h3>
        <p class="card-text">{props.project.description}</p>
        
        {/* <button class="btn-primary ">Read more</button> */}

    </div>
</div>
</div>



);

class Project extends React.Component{
    constructor(props){
    super(props)
        this.state={
                          
              projects:[{title:'Metal Segregating DUSTBIN',description:'We developed a Metal Segregating Dustbin with Arduino as a project in our first year, its main features are segregates metals and non metals on its own and it is useful in helping us segregate metals and recycling and reusing them later.',teamSize:7},
              {title:'Multiuser Chat application and Voice Recognition',description:'Using java and mySql as our DBMS ,we developed a multi user chatting desktop application which was supported Windows  and linux.We also provided user voice recognition system for user to login',teamSize:3},
              {title:'nma',description:'name',teamSize:0},
              {title:'name',description:'name',teamSize:0}]
        }
    }
    
    project_list(){
        return this.state.projects.map(current =>{
            return <Project_box project={current}  />;
        })
    }
    render(){
        return(
            <div className="project_bg" id="Project">
             <div className="container project_bg">
                <hr />
                <h1 className="text-center"> Projects</h1>
                <div className="row">
                {this.project_list() }
                </div>
                <br />
             </div>
            </div>
        );
    }
}

export default Project;