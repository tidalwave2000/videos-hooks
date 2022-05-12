import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState("");

    	const onSubmit = (event) => {
				//event handler for form onFormSubmit
				//evoke the arrow function to prevent an error and bind this to onSubmit

				event.preventDefault(); //prevents a re-render when form is submitted
				onFormSubmit(term); //allowed the child to call the parent
        };
    return (
			<div className="search-bar ui segment">
				<form onSubmit={onSubmit} className="ui-form">
					<div className="field">
						<label>Video Search </label>
						<input
							type="text"
							value={term}
							onChange={(event) => setTerm(event.target.value)}
						/>
					</div>
				</form>
				<br />
			</div>
		);
};



export default SearchBar;