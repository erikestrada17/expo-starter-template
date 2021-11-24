import React, { createContext, useState, useEffect } from 'react';
import {auth} from '../firebase/firebaseConfig';

const AuthContext = createContext();

const AuthProvider = (props) => {
	// user null = loading
	const [user, setUser] = useState(null);

	useEffect(() => {
		checkLogin();
	}, []);

	function checkLogin() {
		auth.onAuthStateChanged(function (u) {
			if (u) {
				setUser(true);
				// getUserData();
				console.log('usuario:')
				console.log(u.email)
				
			} else {
				setUser(false);
				// setUserData(null);
			}
		});
	}

	return (
		<AuthContext.Provider
			value={{
				user,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
