import React,{Component} from 'react';
import { connect } from 'react-redux';

import UserInfo from './UserInfo'
import thunk_action_creator from '../middleware/index'

class Form extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e =>{
        e.preventDefault();
        const userName = this.getUsername.value;
        this.props.dispatch(thunk_action_creator(userName));
        this.getUsername.value = "";
    }

    render() {
        
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="form">
              <h2 className="title">Enter the Github Username</h2>
              <input
                type="text"
                placeholder="Enter Github Username"
                required
                ref={input => (this.getUsername = input)}
              />
              <button className="button">Submit</button>
            </form>
            {this.props.data.isFetching ? <h3>Loading...</h3> : null}
            {this.props.data.isError ? (
              <h3 className="error">No such User exists.</h3>
            ) : null}
            {Object.keys(this.props.data.userData).length > 0 ? (
              <UserInfo user={this.props.data.userData} />
            ) : null}
          </div>
        );
      }
}


const mapStateToProps = state => {
    return {
        data: state 
    };
};


export default connect(mapStateToProps)(Form)