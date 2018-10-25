import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux';

import Header from './logged/header.js'
import Menu from './logged/menu.js'
import MainArea from './logged/mainarea.js'

const layoutStyle = {
    display: 'block',
    position: 'fixed',
    height: 'auto',
    bottom:0,
    top:0,
    left:0,
    right:0,
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

class Logged extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {

    }

    render() {

        return (
            <div>
                <style global jsx>{`
                  html,
                  body,
                  body > div:first-child,
                  div#__next,
                  div#__next > div,
                  div#__next > div > div {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                  }
                `}</style>

                <div style={layoutStyle}>
                    <Header />
                    <Menu />
                    <MainArea />
                </div>
            </div>
        )
    }
}

Logged = connect()(Logged)

export default connect()(Logged)
