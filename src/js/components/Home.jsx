import React from "react";

//include images into your bundle
import { ToDoList } from "./todolist";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            < ToDoList />

			<hr />
			<p>
				Made by Alice [ with <i class="fa-solid fa-hand-holding-heart"></i> ]
				
			</p>
		</div>
	);
};

export default Home;