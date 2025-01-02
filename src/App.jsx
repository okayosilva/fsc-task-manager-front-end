import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemMessage = ({ message }) => <p className="text-white">{message}</p>;

export const App = () => {
    const [messageList] = useState(["Hello World", "Hi", "How are you?"]);
    const [currentMessage, setCurrentMessage] = useState(messageList[0]);

    const handleChangeMessage = () => {
        setCurrentMessage(
            messageList[Math.floor(Math.random() * messageList.length)],
        );
    };

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4 bg-blue-500 text-2xl text-white">
            <ItemMessage message={currentMessage} />
            <button
                onClick={handleChangeMessage}
                className="rounded-md bg-green-500 p-2 text-xl font-semibold text-white"
            >
                Change Message
            </button>
        </div>
    );
};
