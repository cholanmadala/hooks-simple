import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
	const [resources, setResources] = useState([]);
	const fetchResources = async (resource) => {
		const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
		setResources(response.data)
	}
	useEffect(() => {
		fetchResources(resource);
	}, [resource]);

	return (
		<div>
			<h3>{resource.toUpperCase()}</h3>
			<ol>{resources.map((item) => <li key={item.id}> {item.title}</li>)}</ol>
		</div>
	);
}

export default ResourceList;
