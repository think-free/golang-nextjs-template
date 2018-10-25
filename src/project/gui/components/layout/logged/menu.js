import React from 'react'
import { connect } from 'react-redux'
import { setValue } from '../../redux/store.js'

const mapStateToProps = (state) => {
    return {
        Menu: state.Menu
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.buttonClick=this.buttonClick.bind(this);
    }

    buttonClick(e) {
        this.props.dispatch(setValue("Menu", "clicked"));
    }

    render() {
        return (
          <div>
            <h1 onClick={this.buttonClick}>Menu Component {this.props.Menu}</h1>
          </div>
        );
    }
}

export default connect(mapStateToProps)(Menu);
