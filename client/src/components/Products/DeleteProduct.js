import React, { Component } from 'react'
import axios from 'axios'


class DeleteProduct extends Component {
	constructor(props) {
		super(props)

		this.state = {
            _id:''
			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.delete('http://localhost:5000/products/'+this.state._id)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { _id } = this.state
		return (
			<div class="col-md-10">
                <h4>Delete a Product</h4>
				<form onSubmit={this.submitHandler}>
                <div>
						Product ID
						<input
							type="text"
							name="_id"
							value={_id}
							onChange={this.changeHandler}
						/>
					</div>
					
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default DeleteProduct