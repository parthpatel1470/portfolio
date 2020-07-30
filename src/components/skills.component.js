import React from 'react';
// import images from '../images/';


class Skill extends React.Component{
    constructor(props){
    super(props)
        this.state={
                          
              languages:["Python","Java","JavaScript","C","C++","html","Dart","Latex"],
              databases:['mySql','oracle','firebase','mongodb'],
              frameWorks:['react.js','express.js','flutter','Bootstrap'],
              os:['windows','linux']
        }
    }
    languages_list(){
    const listItems = this.state.languages.map((number) =>
    <li >      {number}
    </li>
    );
    return (
       <ul>{listItems}</ul>
       );
    }

    db_list(){
        const listItems = this.state.databases.map((number) =>
        <li >      {number}
        </li>
        );
        return (
           <ul>{listItems}</ul>
           );
        }

        framework_list(){
            const listItems = this.state.frameWorks.map((number) =>
            <li >      {number}
            </li>
            );
            return (
               <ul>{listItems}</ul>
               );
            }
    render(){
        return(

            <div className="about_bg"  id="Skills">
            <div className="container project_bg">
                <hr />
                <h1 className="text-center"> Skills</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                           <h2 className="bold">Languages</h2>

                           <h3 className="lead grey_color">{this.languages_list()}</h3>
                 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                           <h2 className="bold">DataBases</h2>

                           <h3 className="lead grey_color">{this.db_list()}</h3>
                 
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                           <h2 className="bold">FrameWorKs</h2>

                           <h3 className="lead grey_color">{this.framework_list()}</h3>
                 
                        </div>
                    </div>
               </div>
                <br />
            </div>
            </div>
        );
    }
}

export default Skill;