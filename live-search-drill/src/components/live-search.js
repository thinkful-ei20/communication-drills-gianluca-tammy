import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm:'',
		};
	}

	render() {

		const searchTerm = this.state.searchTerm;
		const fields = ['name', 'actor', 'description'];
		const filtered = this.props.characters.filter( item => {
			for(let field of fields) {
				if( item[field].toLowerCase().includes(searchTerm) )
					return true;
			}
			return false;
		});

		return (
			<div className="live-search">
				<SearchForm onChange={(searchTerm) => this.setState({searchTerm: searchTerm.toLowerCase()})}/>
				<CharacterCount count={filtered.length} />
				<CharacterList characters={filtered} />
			</div>
		);
	}
}
