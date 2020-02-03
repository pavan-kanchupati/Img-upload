import React,{ Component } from 'react' 
import Home from './Home';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';



class Cards extends Component {
    render(){
        return(

            <div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Home imgsrc={img1}/>
                        </div>
                        <div className="col-md-6">
                            <Home imgsrc={img2}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Home imgsrc={img3}/>
                        </div>
                        <div className="col-md-6">
                            <Home imgsrc={img4}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Home imgsrc={img5}/>
                        </div>
                        <div className="col-md-6">
                            <Home imgsrc={img6}/>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Cards;