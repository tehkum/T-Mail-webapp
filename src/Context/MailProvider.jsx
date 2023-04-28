import { createContext, useEffect, useReducer } from "react";
import { mails } from "../Api/api";

export const useMailer = createContext();

export function MailProvider({ children }) {
  // const [mailData, setMail] = useState([]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "insert":
        return { ...state, data: mails };
      case "read":
        return { ...state, isRead: !state.isRead };
      case "star":
        return { ...state, isStar: !state.isStar };
      case "markRead":
        return {
          ...state,
          data: state.data.map((item) =>
            item.mId === action.item
              ? { ...item, unread: !item.unread }
              : { ...item }
          )
        };
      case "markReadLink":
        return {
          ...state,
          data: state.data.map((item) =>
            item.mId === action.item ? { ...item, unread: false } : { ...item }
          )
        };
      case "markStar":
        return {
          ...state,
          data: state.data.map((item) =>
            item.mId === action.item
              ? { ...item, isStarred: !item.isStarred }
              : { ...item }
          )
        };
      case "markSpam":
        state = { ...state, spamData: [...state.spamData, action.item] };
        return {
          ...state,
          data: state.data.filter((item) => item.mId !== action.item.mId)
        };

      case "markTrash":
        state = { ...state, trashData: [...state.trashData, action.item] };
        return {
          ...state,
          data: state.data.filter((item) => item.mId !== action.item.mId)
        };

      case "markReadFromSpam":
        return {
          ...state,
          spamData: state.spamData.map((item) =>
            item.mId === action.item
              ? { ...item, unread: !item.unread }
              : { ...item }
          )
        };

      case "unSpam":
        state = { ...state, data: [...state.data, action.item] };
        return {
          ...state,
          spamData: state.spamData.filter(
            (item) => item.mId !== action.item.mId
          )
        };

      case "markTrashFromSpam":
        state = { ...state, trashData: [...state.trashData, action.item] };
        return {
          ...state,
          spamData: state.spamData.filter(
            (item) => item.mId !== action.item.mId
          )
        };

      case "recover":
        state = { ...state, data: [...state.data, action.item] };
        return {
          ...state,
          trashData: state.trashData.filter(
            (item) => item.mId !== action.item.mId
          )
        };

      default:
        return { ...state, data: [...state.mailData] };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    data: [...mails],
    isStar: false,
    isRead: false,
    spamData: [],
    trashData: []
  });

  useEffect(() => dispatch({ type: "insert" }), []);

  return (
    <useMailer.Provider value={{ state, dispatch }}>
      {children}
    </useMailer.Provider>
  );
}
