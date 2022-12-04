import React, {Component} from 'react';
import RatesList from './components/rates-list';
import OrdersList from './components/orders-list';
import OrderForm from './components/order-form';
import './App.css';

export default class App extends Component {
	render(){
		return (<div className='container'>
				<h1>React Trading App <span>(logo)</span></h1>	

			<div className="row">
				<div className="col-xs-12 col-sm-5 col-lg-4">
					<RatesList />
				</div>
				<div className="col-xs-12 col-sm-7 col-lg-4">
					<OrdersList />
				</div>
				<div className="col-xs-12 col-lg-4">
					<OrderForm />
				</div>
			</div>
			
		</div>);
	}
}
