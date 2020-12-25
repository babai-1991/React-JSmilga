//4-useState-object.js
import React, { useState } from 'react';

const UseStateObject = () => {
	/*
  *****************
  multiple useState
  *****************
  */
	let [ name, setName ] = useState('Babai');
	let [ jobProfile, setJobProfile ] = useState('Software Developer');
	let [ skills, setSkills ] = useState('C#,Asp.NET MVC,Javscript');

	const changeProperty = () => {
		setName('Suvankar Das');
		setJobProfile('Senior Software Engineer');
		setSkills((skills += ',ReactJS'));
	};

	return (
		<React.Fragment>
			<h3>{name}</h3>
			<h3>{jobProfile}</h3>
			<div>
				<ul>
					{skills.split(',').map((skill, index) => {
						return <li key={index}>{skill}</li>;
					})}
				</ul>
			</div>
			<button type="button" className="btn" onClick={changeProperty}>
				Change Status
			</button>
		</React.Fragment>
	);
};

export default UseStateObject;
