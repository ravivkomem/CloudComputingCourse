import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../HOC/background.jpg';
import '../../App.css';




class Header extends Component {
	componentDidMount() {
	
	}

	render() {
		const { title } = this.props;

		return (
            <div>
              
                <img className="img1" src={ bgImage } />
                

            
			<header className="site-header">
				<div className="container">
					<div className="site-header-large-bg">
						<span />
					</div>
					<div className="site-header-inner">
						<div className="brand header-brand">
							<h1 className="m-0">
								
							</h1>
						</div>
					</div>
				</div>
			</header>
            </div>

		);
	}
}

export default Header;