import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	const [purple, setPurple] = useState(false);
	const [intervalId, setIntervalId] = useState(null);
	const onPurpleChange = () => {
		setPurple(!purple)
	}
	const changeColor = () => {
		setSelectedColor(currentColor => {
			if (currentColor === "red") return "yellow"
			if (currentColor === "yellow") return "green"
			if (currentColor === "green") return purple ? "purple" : "red"
			if (currentColor === "purple") return "red"
			return "red"

		})
	}
	const toggleInterval = () => {
		if (intervalId) {
			clearIntervalId(intervalId)
			setIntervalId(null)

		} else {
			const id = setInterval(changeColor, 1000)
			setIntervalId(id)
		}
	}


	return (

		<div className="fondo">
			<div className="text-center mt-5">
				<div className={purple ? "contenedorSemaforoPurple" : "contenedorSemaforo"}>

					<div onClick={() => setSelectedColor("red")}
						className={"lightRed" + (selectedColor === "red" ? " glow" : "")}>

					</div>
					<div onClick={() => setSelectedColor("yellow")}
						className={"lightYellow" + (selectedColor === "yellow" ? " glow" : "")}>

					</div>
					<div onClick={() => setSelectedColor("green")}
						className={"lightGreen" + (selectedColor === "green" ? " glow" : "")}>

					</div>
					{/* <div onClick={() => setSelectedColor("purple")}
						className={"lightPurple" + (selectedColor === "purple" ? " glow" : "")}>

					</div> */}

					{purple && (
						<div onClick={() => setSelectedColor("purple")}
							className={"lightPurple" + (selectedColor === "purple" ? " glow" : "")}>

						</div>

					)}
				</div>
				<button onClick={(onPurpleChange)}>{purple ? "Quitar color" : "Agregar color"}</button>
				<button onClick={(toggleInterval)}>Encender semáforo</button>
			</div>
		</div>

	);
};

export default Home;
