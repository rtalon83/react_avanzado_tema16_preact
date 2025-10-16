// Fichero pages/tareas/index.page.jsx

import { signal } from "@preact/signals";
import { useState } from "preact/hooks";

const tareas = signal(["Sacar la basura", "Bajar al perro"]);

export function Page() {
    const [tarea, setTarea] = useState("");
    const addNewTarea = () => {
        tareas.value = [...tareas.value, tarea];
    };
    return (
        <div>
            <ul>
                {tareas.value.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                ))}
            </ul>
            <input
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
            />
            <button onClick={addNewTarea}>Añadir</button>
        </div>
    );
}
