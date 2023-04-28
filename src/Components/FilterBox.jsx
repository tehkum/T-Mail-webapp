import "../styles.css";
import { useContext } from "react";
import { useMailer } from "..";
import "./FilterBox.css";
export default function FilterBox() {
  const { state, dispatch } = useContext(useMailer);
  const unreadMails = state.data.filter((item) => item.unread).length;

  return (
    <div className="filter-top">
      <div className="input-filter">
        <label htmlFor="filter-input1">
          <input
            onChange={() => dispatch({ type: "read" })}
            type="checkBox"
            id="filter-input1"
          />
          Show unread mails
        </label>
        <label htmlFor="filter-input2">
          <input
            onChange={() => dispatch({ type: "star" })}
            type="checkBox"
            id="filter-input2"
          />
          Show starred mails
        </label>
      </div>
      <h3>Unread: {unreadMails}</h3>
    </div>
  );
}
