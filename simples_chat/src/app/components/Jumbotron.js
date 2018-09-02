import React from 'react';
import './Jumbotron.css';
import sergei_img from '../../images/sergei.png'


// TODO: Make a cool jumbotron with a meerkat type thing


class Jumbotron extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <h1>
                    Simples Chat
                </h1>
                {/*<img src={sergei_img} alt=""/>*/}
            </div>
        )
    }
};


export default Jumbotron;
