import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Home } from "react-router-dom";

export default function AddContact() {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = e => {
		e.preventDefault(); // dont summit the way you usually submit
		actions.addContact({
			full_name: fullName,
			email: email,
			phone: phone,
			address: address,
			agenda_slug: "Johan_Uribe" //?
		});
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={e => handleSubmit(e)}>
					{" "}
					{/**/}
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={fullName}
							onChange={e => setFullName(e.target.value)} // whenever theres an event we pass that event to the fullname function
							className="form-control"
							placeholder="Full Name"
						/>{" "}
						{/*add value, add onChange*/}
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={phone}
							onChange={e => setPhone(e.target.value)}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={address}
							onChange={e => setAddress(e.target.value)}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						{" "}
						{/*change type to submit asdasd*/}
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
}
