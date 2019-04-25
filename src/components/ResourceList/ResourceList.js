import React from 'react';
import useResources from '../utils/useResources';

const ResourceList = ({resource}) => {
	const resources = useResources(resource);

	return (
		<div>
			<h3>{resource.toUpperCase()}</h3>
			<ol>{resources.map((item) => <li key={item.id}> {item.title}</li>)}</ol>
		</div>
	);
}

export default ResourceList;
