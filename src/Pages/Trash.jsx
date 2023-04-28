import { useContext } from "react";
import { useMailer } from "..";

export default function TrashPage() {
  const { state, dispatch } = useContext(useMailer);

  return (
    <div className="trash">
      <h2 style={{ textAlign: "center" }}>Bin</h2>

      <div className="mainCard">
        {!state.trashData.length && <h3>Trash is empty...</h3>}
        <ul className="mail-data-box">
          {state.trashData.map((item) => {
            const { mId, unread, subject, content } = item;
            return (
              <li
                key={mId}
                className="mail-list-box"
                style={{ backgroundColor: unread ? "#f1f6fc" : null }}
              >
                <h4>subject: {subject}</h4>
                <button
                  className="star-button"
                  onClick={() => dispatch({ type: "recover", item: item })}
                >
                  Recover
                </button>

                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
