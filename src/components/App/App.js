import React, {useState} from 'react';
import ResourceList from '../ResourceList';
import AlbumsList from '../AlbumsList';

const App = () => {
	const [resource, setResource] = useState('posts');

	return (
		<div>
			<AlbumsList />
			<button onClick={() => setResource('posts') }>Posts</button>
			<button onClick={() => setResource('todos') }>Todos</button>
			<ResourceList resource={resource} />
		</div>
	)
}

export default App;