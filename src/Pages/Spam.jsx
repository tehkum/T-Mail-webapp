import { useContext } from "react";
import { useMailer } from "..";

export default function SpamPage() {
  const { state, dispatch } = useContext(useMailer);

  return (
    <div className="trash">
      <h2 style={{ textAlign: "center" }}>Spam Mails</h2>
      <div className="mainCard">
        {!state.spamData.length && <h3>Spam is empty...</h3>}
        <ul className="mail-data-box">
          {state.spamData.map((item) => {
            const { mId, unread, subject, content } = item;
            return (
              <li
                key={mId}
                className="mail-list-box"
                style={{ backgroundColor: unread ? "#f1f6fc" : null }}
              >
                <h4>subject: {subject}</h4>

                <p>{content}</p>
                <ul className="button-mail-list">
                  <li>
                    <button
                      className="button-mail button-mail1"
                      onClick={() =>
                        dispatch({ type: "markTrashFromSpam", item: item })
                      }
                    >
                      Delete
                    </button>
                  </li>
                  <li>
                    <button
                      className="button-mail button-mail2"
                      onClick={() =>
                        dispatch({ type: "markReadFromSpam", item: mId })
                      }
                    >
                      Mark as {unread ? "read" : "unread"}
                    </button>
                  </li>
                  <li>
                    <button
                      className="button-mail button-mail3"
                      onClick={() => dispatch({ type: "unSpam", item: item })}
                    >
                      Unspam
                    </button>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
