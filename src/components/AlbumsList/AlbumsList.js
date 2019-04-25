import React from 'react';
import useResources from '../utils/useResources';

const AlbumsList = () => {
	const albums = useResources('albums');

	return (
		<div>
			<h3>Albums</h3>
			<ol>
				{albums.map((album) => {
					return <li key={album.id}>{album.title}</li>
				})}
			</ol>
		</div>
	);
}

export default AlbumsList;