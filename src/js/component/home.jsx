import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("");
	return (
		<div className = "fondo">
			<div className="text-center mt-5">
				<div className="contenedorSemaforo">

					<div onClick= {() => setSelectedColor("red")} 
					className={"lightRed" + (selectedColor === "red" ? " glow" : "")}>

					</div>
					<div onClick= {() => setSelectedColor("yellow")} 
					className={"lightYellow" + (selectedColor === "yellow" ? " glow" : "")}>

					</div>
					<div  onClick= {() => setSelectedColor("green")} 
					className={"lightGreen"  + (selectedColor === "green" ? " glow" : "")}>

					</div>
				
				</div>
			</div>
		</div>
	);
};

export default Home;
