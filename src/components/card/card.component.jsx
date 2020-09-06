import React from 'react';

import './card.styles.css';
import characterAvatar from '../../assets/images/avatar-icon.png';


class Card extends React.Component{
    constructor(props){
        super();
        this.state = {
            employee: {
                ...props.employee,
                buttonVisibility: 'card-reveal-button-block__show'
            }
        }
    }

    handleChange = () => {
        this.setState({
            employee:{
                ...this.state.employee,
                buttonVisibility: 'card-reveal-button-block__hide'
            }
        })
    }

    render(){
        console.log(this.state);
        return(
            <div className='card'>
                <div className='card-img'>
                    <img alt={this.state.employee.name} src={characterAvatar} />
                </div>
                <div className='card-body'>
                    <h1 className='card-title'>{this.state.employee.name}</h1>
                    <p>
                        <i className="fa fa-briefcase" aria-hidden="true"></i> {this.state.employee.position}
                    </p>
                    <p>
                        <i className="fa fa-envelope" aria-hidden="true"></i> {this.state.employee.email}
                    </p>
                    <p>
                        <i className="fa fa-phone" aria-hidden="true"></i> {this.state.employee.phone}
                    </p>
                    <div className={this.state.employee.buttonVisibility}>
                        <button className='card-reveal-button' onClick={this.handleChange}>
                            <i className="fa fa-unlock-alt" aria-hidden="true"></i> Reveal
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Card;