import React, {Fragment} from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const top = 0;
        const pageTop = window.scrollY;

        const newtop_clouds = (top - (pageTop * 0.2));
        const newtop_sergei = (top - (pageTop * 0.1));

        document.getElementById('background-clouds').style.top = `${newtop_clouds}px`;
        document.getElementById('sergei_meerkat').style.top = `${newtop_sergei}px`;
    }


    render() {
        return (
            <Fragment>
                <div className="jumbotron" id="jumbotron">
                    <h1>
                        Simples Chat
                    </h1>
                    <div id="background-clouds" ref={this.cloud_parallax}></div>
                    <div id="sergei_meerkat"></div>
                </div>
            </Fragment>
        )
    }
};


export default Jumbotron;
