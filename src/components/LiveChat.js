import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-[500px] h-[400px] m-5 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-[500px] h-[40px]  p-1 mx-5 rounded-lg border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "@divyanshy46",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      > 
        <input
          className="px-2 mx-2 h-[30px] w-[430px]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="p-1 rounded-lg bg-green-100">Send</button>
      </form>
    </>
  );
};
export default LiveChat;