import React, {Component} from "react";
import ReactDOM from "react-dom";
import logo from "../../logo.svg";
import decoration from '../../assets/Decoration.svg';



class HomeHeader extends Component {
    render() {
        return (
                <header className='flex-box' id='HomeHeader'>
                    <div className='headerImg'> </div>
                    <div className='flex-box'>
                        <div className='intro flex-box'>
                            <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <img src={decoration}></img>
                            <div className='organise flex-box'>
                                <div>Oddaj <br/> rzeczy</div>
                                <div>Zorganizuj <br/> zbiórkę</div>
                            </div>
                        </div>
                    </div>
                </header>
        )
    }

}

export default HomeHeader;
