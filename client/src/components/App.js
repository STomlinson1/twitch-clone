import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/main.scss';
import StreamList from './stream/StreamList';
import StreamCreate from './stream/StreamCreate';
import StreamEdit from './stream/StreamEdit';
import StreamDelete from './stream/StreamDelete';
import StreamShow from './stream/StreamShow';
import Header from './Header';

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/new" exact component={StreamCreate} />
				<Route path="/streams/edit" exact component={StreamEdit} />
				<Route path="/streams/delete" exact component={StreamDelete} />
				<Route path="/streams/show" exact component={StreamShow} />
			</BrowserRouter>
		</div>
	);
}
