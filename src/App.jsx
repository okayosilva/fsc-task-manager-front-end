import { useState } from "react";
import { TaskItem } from "./components/taskItem";

export const App = () => {
    const [taskList] = useState([
        {
            id: 1,
            message: "Hello World",
            isCompleted: false,
        },
        {
            id: 2,
            message: "Hi",
            isCompleted: true,
        },
        {
            id: 3,
            message: "How are you?",
            isCompleted: false,
        },
    ]);
    return (
        <div className="flex h-screen flex-col gap-4 bg-zinc-900 p-8 text-2xl text-white">
            {taskList.map((task) => (
                <TaskItem task={task} key={task.id} />
            ))}
            {/* <button
                onClick={handleChangeMessage}
                className="rounded-md bg-green-500 p-2 text-xl font-semibold text-white"
            >
                Change Message
            </button> */}
        </div>
    );
};
