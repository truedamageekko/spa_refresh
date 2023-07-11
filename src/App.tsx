import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Modal } from "antd";
import { useEffect } from "react";

function App() {
    const fetchData = async () => {
        try {
            const res = await fetch(
                "https://main--meek-panda-62a9fa.netlify.app/api/hello"
            );
            const data = await res.json();
            console.log(data);
            const resVersion = res.headers.get("app-version") ?? "0";
            if (resVersion > import.meta.env.VITE_VERSION) {
                Modal.confirm({
                    title: "New version of the BackOffice available!",
                    okText: "Refresh",
                    onOk: () => window.location.reload(),
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        console.log("load version: ", import.meta.env.VITE_VERSION);
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={fetchData}>ping</button>
            </div>
        </>
    );
}

export default App;
