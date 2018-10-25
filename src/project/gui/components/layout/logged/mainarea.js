import React from 'react'
import { connect } from 'react-redux'
import { setValue } from '../../redux/store.js'

const mapStateToProps = (state) => {
    return {
        MainArea: state.MainArea
    }
}

class MainArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.buttonClick=this.buttonClick.bind(this);
    }

    buttonClick(e) {
        this.props.dispatch(setValue("MainArea", "clicked"));
    }

    render() {
        return (
          <div>
            <h1 onClick={this.buttonClick}>MainArea Component {this.props.MainArea}</h1>
          </div>
        );
    }
}

export default connect(mapStateToProps)(MainArea);
