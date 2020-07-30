import React from 'react';
import axios from 'axios';

class Footer extends React.Component {
    constructor(props){
        super(props);

        this.onChangename=this.onChangename.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);


        this.state ={
            name :'',
            email :'',
            description :''
        }
    }
    onChangename(e){
        this.setState({
            name : e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }onChangeDescription(e){
        this.setState({
            description : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const getInTouch={
            name:this.state.name,
            email:this.state.email,
            description:this.state.description
        }

        // console.log(user);
        axios.post('http://localhost:5000/getInTouch/add',getInTouch)
                .then (res =>console.log(res.data));
                
        this.setState({
            name :'',
            email :'',
            description :''
        });
    }
    render() {
        return (
            <footer className="footer text-muted bg-dark" id="GetInTouch">
                <br />
                <div className="container">
                    <h1 className="text-center">Get In Touch</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="bd-footer-links">
                                <li><a href="https://github.com/parthpatel1470"> <i class="fa fa fa-github-square" aria-hidden="true"></i> GitHub</a></li>
                                <li><a href="https://twitter.com/parthpatel1470"> <i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                <li><a href="https://www.instagram.com/parthpatel1470"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                                <li><a href=""><i class="fa fa-linkedin" aria-hidden="true"></i> linkedin</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-7">
                            <form>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="your name" value={this.state.name} onChange={this.onChangename}/>
                                </div>

                                <div className="form-group">
                                        <label for="exampleFormControlInput1">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  value={this.state.email} onChange={this.onChangeEmail}/>
                                </div>

                                <div className="form-group">
                                            <label for="exampleFormControlTextarea1">How can I help?</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" value={this.state.description} onChange={this.onChangeDescription}></textarea>
                                </div>
                                <div className="form-group">

                                    <input type="submit" class="btn btn-primary" value="Submit"  onClick={this.onSubmit}/>
                                </div>
                            </form>
                        </div>
                    </div>

                    <hr />

                    <p class="text-center">Developed with  <i class="fa fa fa-heart" aria-hidden="true"></i> by Parth Patel</p>
                </div>
<br />
            </footer>
        )
    }
}

export default Footer;