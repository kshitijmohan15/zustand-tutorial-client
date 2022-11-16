import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useStore } from "../store/store";
import { useEffect, useState } from "react";
import { useGetFromStore } from "../hooks/zustandHooks";

export default function Home() {
	const [increasePopulation, decreasePopulation] = useStore((state) => [
		state.increasePopulation,
		state.decreasePopulation,
	]);

	const bears = useGetFromStore(useStore, (state) => state.bears);
	return (
		<>
			<div>Bears: {bears}</div>
			<button onClick={increasePopulation}>Increase Population</button>
			<button onClick={decreasePopulation}>Decrease Population</button>
		</>
	);
}
