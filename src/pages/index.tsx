import styles from "../../styles/Home.module.css";
import { useAuthStore } from "../store/store";
import { useEffect, useState } from "react";
import { useGetFromStore } from "../hooks/zustandHooks";
import axios from "axios";
import axiosInst from "../utils/axios";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	async function getToken() {
		return await axiosInst
			.post("/auth/login")
			.then((res) => setToken(res.data));
	}
	async function sendTest() {
		try {
			await axiosInst
				.post("http://localhost:2000/auth/test")
				.then((res) => setTestVar(res.data));
		} catch (e: any) {
			console.log(e);
			if (e.response.data === "jwt expired") {
				router.push("/login");
			}
		}
	}
	const [testVar, setTestVar] = useState<string>();
	const token = useGetFromStore(useAuthStore, (state) => state.token);
	const setToken = useAuthStore((state) => state.setToken);
	return (
		<>
			{/* <div>Bears: {bears}</div>
			<button onClick={increasePopulation}>Increase Population</button>
			<button onClick={decreasePopulation}>Decrease Population</button> */}
			<div className="p-4">
				<button onClick={getToken}>Sign Token</button>
				<div>{token}</div>
				<button onClick={sendTest}>Send Test</button>
				<div>{testVar}</div>
			</div>
		</>
	);
}
