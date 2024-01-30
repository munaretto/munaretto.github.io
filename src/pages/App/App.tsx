import Header from "../../components/Header/Header";
import Projects from "../Projects/Projects";
import About from "./../About/About";
import ThemeProvider from "../../contexts/ThemeContext";

export default function App() {
	return (
		<ThemeProvider>
			<Header />
			<About />
		</ThemeProvider>
	);
}
