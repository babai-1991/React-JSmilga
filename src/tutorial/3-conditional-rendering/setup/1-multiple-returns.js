//1-multiple-returns.js
import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
//error in  url for testing error,uncomment this and comment previous line
//const url = 'https://api.github.com/users/QuincyLarson1';
const MultipleReturns = () => {
	const [ loading, setLoading ] = useState(true);
	const [ isError, setIsError ] = useState(false);
	const [ user, setUser ] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((resp) => {
					if (resp.status >= 200 && resp.status <= 299) {
						//must must must user return keyword
						return resp.json();
					} else {
						setLoading(false);
						setIsError(true);
					}
				})
				.then((user) => {
					const { login } = user;
					//as we get user back , we can then hide loading.
					setLoading(false);
					setUser(login);
				})
				.catch(function(error) {
					console.log(error);
				});
		}, 2000);
	}, []);

	if (loading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	}
	if (isError) {
		return (
			<div>
				<h2>There was an error...</h2>
			</div>
		);
	}
	return (
		<div>
			<h2>{user}</h2>
		</div>
	);
};

export default MultipleReturns;
