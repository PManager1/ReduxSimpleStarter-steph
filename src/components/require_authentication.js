import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    componentWillMount() {
      if(!this.props.authenticated){
      this.context.router.push('/')
      }
    }
// gets called whenever a component isgoing to be handled a new set of props. or rerendered
    componentWillUpdate(nextProps) {
      console.log('   componentWillUpdate  called');
      if(!nextProps.authenticated){
      this.context.router.push('/')
      }
    }

    render() {
      console.log(this.context);
      return <ComposedComponent {...this.props} />
    }
  }

function mapStateToProps(state) {
    return { authenticated: state.authenticated };
}
return connect(mapStateToProps)(Authentication);

}

















//
