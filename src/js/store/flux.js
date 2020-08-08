const URL = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			//displaying a contact
			loadContact() {
				fetch(URL + "agenda/Johan_Uribe")
					.then(res => res.json())
					.then(data => {
						console.log("getContacts:", data),
							setStore({
								contacts: data
							});
					})
					.catch(e => console.error(e));
			},

			addContact: data => {
				//will take and objs as input and the onj will retrun it as a string to the server
				console.log("add contact", data);
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data)
				})
					.then(res => res.json())
					.then(data => {
						getActions().loadContact(); //fetches the contact from the server, reloading (refetch) the data after new contact
					})

					.catch(e => console.error(e));
			},

			//Deleting a Contact
			deleteContact(id) {
				console.log(URL + id);
				fetch(URL + id, {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log("response", data);
						getActions().loadContact();
					})
					.catch(e => console.error(e));
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
