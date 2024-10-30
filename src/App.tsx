import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import './App.css';
interface Employee {
	firstName: string;
	lastName: string;
	photo: string;
	email: string;
}

function App() {
	const [employee, setEmployee] = useState<Employee | null>(null);

	const fetchEmployee = async () => {
		try {
			const response = await fetch("https://randomuser.me/api?nat=en");
			const data = await response.json();
			const user = data.results[0];

			const newEmployee: Employee = {
				firstName: user.name.first,
				lastName: user.name.last,
				photo: user.picture.large,
				email: user.email,
			};

			setEmployee(newEmployee);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	return (
		<div>
			<h1>Employee Information</h1>
			<button type="button" onClick={fetchEmployee}>
				Upload New Profile
			</button>
			{employee && <EmployeeCard {...employee} />}
		</div>
	);
}

export default App;
