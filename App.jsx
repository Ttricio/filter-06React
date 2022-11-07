import { Users } from "./users.js";
import { useState } from "react";
import Table from "./Table.js";

function App() {
	const [query, setQuery] = useState("");

	const keys = ["first_name", "last_name", "email"];

  console.log(Users[100]['email'])

	const search = (data) => {
		return data.filter(
			(item) =>

      // this is a method with longer code still works fine

				// item.first_name.toLowerCase().includes(query) ||
				// item.last_name.toLowerCase().includes(query) ||
				// item.email.toLowerCase().includes(query)

        keys.some(key=>item[key].toLowerCase().includes(query))
        
		);
	};

  
	return (
		<div className='app'>
			<input
				type='text'
				className='search'
				placeholder='Search...'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Table data={search(Users).splice(0,30)} />
		</div>
	);
}

export default App;
