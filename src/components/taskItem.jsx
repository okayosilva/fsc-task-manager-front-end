/* eslint-disable react/prop-types */
export const TaskItem = ({ task }) => {
    const { message, isCompleted } = task;
    const bgColorStatus = isCompleted ? "bg-green-500" : "bg-red-500";
    return (
        <div className="flex items-center gap-4">
            <p>{message}</p>
            <div
                className={`rounded-md px-2 py-1 text-base text-white ${bgColorStatus}`}
            >
                {isCompleted ? "Completed" : "Incomplete"}
            </div>
        </div>
    );
};
