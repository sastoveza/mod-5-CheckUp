import React from 'react';
import { filteredDoctors } from '../../actions/FilterActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Header, Icon, Popup, Form, Button } from 'semantic-ui-react';
import { receiveAppointment } from '../../actions/AppointmentActions';


class SearchForm extends React.Component {
	constructor() {
		super()

		// const today = new Date()
		// const dayAfter = new Date()
		// dayAfter.setDate(dayAfter.getDate() + 2)

		this.state = {
			speciality: '',
			address: ''
		}
	}

	handleAddressChange = (event) => {
		event.preventDefault()
		this.setState ({
			address: event.target.value,
			
		})
	}

	handleSpecialtyChange = (event) => {
		event.preventDefault()
		this.setState ({
			specialty: event.target.value,
			
		})
	}

	handleSearch = (event) => {
		// console.log("inside Search From", this.state)
		event.preventDefault()
		if (this.state.specialty  !== "" && this.state.address !== "") {
			this.props.filteredDoctors(this.state.specialty, this.state.address)
		}
		console.log("hitting the search")
		this.props.receiveAppointment()

		
		this.setState ({
			specialty: "",
			address: ""
		})

		this.props.history.push("/results")
	}

	render() {

		// const searchClass = this.isHomepage()

		return (
			<div>	
				<Form onSubmit={this.handleSearch}>
					<Form.Field inline>
						<input type="text" 
							value={this.state.specialty} 
							onChange={this.handleSpecialtyChange} 
							placeholder="Search for Doctors" />

						<input type="text"
							value={this.state.address}
							onChange={this.handleAddressChange}
							placeholder="Search with Address" />
					
					 	<Button>Search</Button>
				 	</Form.Field>
			 	</Form>
			 	<br />
		 	</div>
	 	)

	}
}

function mapDispatchToProps(dispatch) {
	return {
			filteredDoctors: (specialty, address) => 
				dispatch(filteredDoctors(specialty, address)),
			
			receiveAppointment: () => 
				dispatch(receiveAppointment())
	}
}

export default connect(null, mapDispatchToProps)(SearchForm)