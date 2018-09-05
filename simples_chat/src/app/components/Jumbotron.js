import React, {Fragment} from 'react';
import './Jumbotron.css';


// TODO: Make a cool jumbotron with a meerkat type thing


class Jumbotron extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const pageTop = window.scrollY;
        // const meerkat = document.getElementById()

        console.log(pageTop)
    }


    render() {
        return (
            <Fragment>
                <div className="jumbotron" id="jumbotron">
                    <h1>
                        Simples Chat
                    </h1>
                    <div id="background-clouds"></div>
                    <div id="sergei_meerkat"></div>
                </div>
            </Fragment>
        )
    }
};


export default Jumbotron;
