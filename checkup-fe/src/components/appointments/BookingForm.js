import React from 'react'
import moment from 'moment'
import { updateAppointment } from '../../actions/AppointmentActions'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Form, Button, TextArea, Input } from 'semantic-ui-react'

class BookingForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			reason: '',
			user_id: ''
		}
	}

	// componentDidMount() {
	
	// 	this.props.receiveAppointment()
	

	handleChange = (event) => {
		event.preventDefault()
		this.setState ({
			reason: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const appId = this.props.match.params.id;
		if (this.state.reason !== "") {
		    this.props.updateAppointment(appId, this.state.reason, this.props.user_id)
	    }
	
		this.setState ({
			reason: '',
			user_id: ''
		})

		this.props.history.push("/profile")

	}

	render() {
		// console.log(this.props)
		// const { appointment , user } = this.props
	// if (appointment) {
		return (
			<div>
				<ul>
					<h2>Book Appointment</h2>
					<br />
					<Form onSubmit={this.handleSubmit} size='big'>
						<Form.Group>
							<Form.Field control={Input} label='Name' placeholder='Username' width={6}/>
							<br />
						</Form.Group>
						<Form.Group>
							<Form.Field control={Input} label='Time' width={6}/>	
							<br />
						</Form.Group>
						<Form.Group>
							<Form.Field control={Input} label='Doctor' width={6}/>
							<br />
						</Form.Group>
						<Form.Group inline width={6}>
							<Form.Field control={TextArea} 
								label='Reason for Visit'
								onChange={this.handleChange}
								value={this.state.reason}
								/>
								<br />
						</Form.Group>
						<Form.Group>
							<Form.Field control={Button} size='big' width={8} color='yellow'>Book Appointment</Form.Field>
						</Form.Group>
					</Form>
				</ul>
			</div>

		)
	
	}
}

const mapStateToProps = (state, ownProps) => {
	// debugger;
	return {
		appointment: state.appointments[ownProps.match.params.id],
		user_id: state.users.currentUser.user.id
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateAppointment: (appId, bookingParams, user_id) => dispatch(updateAppointment(appId, bookingParams, user_id))
	}
}

        


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm))
