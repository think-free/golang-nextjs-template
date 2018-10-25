import React from 'react'
import { connect } from 'react-redux'
import { setValue } from '../../redux/store.js'

const mapStateToProps = (state) => {
    return {
        Header: state.Header
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.buttonClick=this.buttonClick.bind(this);
    }

    buttonClick(e) {
        this.props.dispatch(setValue("Header", "clicked"));
    }

    render() {
        return (
          <div>
            <h1 onClick={this.buttonClick}>Header Component {this.props.Header}</h1>
          </div>
        );
    }
}

export default connect(mapStateToProps)(Header);
