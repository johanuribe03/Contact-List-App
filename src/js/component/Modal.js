import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = props => {
	// const [state, setState] = useState({
	// 	//initialize state here
	// });
	const { onDelete, id } = props;
	const handleDelete = () => {
		onDelete(id);
	};
	// comment "const [state, setState] = useState({" and added const handleDelete = () => {};
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button onClick={() => onClose(false)} type="button" className="btn btn-primary">
							Oh no!
						</button>{" "}
						{/*//added "onClick={()=> onClose(false)}"*/}
						<button
							onClick={() => handleDelete()}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Do it!
						</button>{" "}
						{/*//added "onClick={()=> handleDelete()}"*/}
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	onDelete: PropTypes.func,
	id: PropTypes.string
}; // added " onDelete: PropTypes.func and id: PropTypes.string"

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
