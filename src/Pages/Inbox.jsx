import "../styles.css";
import { useContext } from "react";
import { useMailer } from "..";
import FilterBox from "../Components/FilterBox";
import { Link } from "react-router-dom";
import deleteIcon from "../images/trash.png";
import mailIcon from "../images/envelop.png";
import openMailIcon from "../images/openenv.png";

export default function InboxPage() {
  const { state, dispatch } = useContext(useMailer);

  const filterer = state.isRead
    ? state.data.filter((item) => item.unread)
    : state.data;
  const starFilterer = state.isStar
    ? filterer.filter((item) => item.isStarred)
    : filterer;

  // const starFilterer =
  //   state.isRead && state.isStar
  //     ? state.data.filter((item) => item.isStarred && item.isStarred)
  //     : state.isStar
  //     ? state.data.filter((item) => item.isStarred)
  //     : state.isRead
  //     ? state.data.filter((item) => item.unread)
  //     : state.data;

  // console.log(state);

  return (
    <div className="inbox">
      <FilterBox />
      <div className="mainCard">
        <h3>Emails</h3>
        <ul className="mail-data-box">
          {starFilterer.map((item) => {
            const { mId, unread, subject, isStarred } = item;
            return (
              <li
                key={mId}
                className="mail-list-box"
                style={{ backgroundColor: unread ? "#f1f6fc" : null }}
              >
                <h4>
                  {unread ? (
                    <img src={mailIcon} alt="mail" width="20px" />
                  ) : (
                    <img src={openMailIcon} alt="mail" width="20px" />
                  )}
                  <Link
                    className="Mail-link"
                    to={`/mail/${mId}`}
                    onClick={() =>
                      dispatch({ type: "markReadLink", item: mId })
                    }
                  >
                    {subject}
                  </Link>
                </h4>

                <button
                  className="star-button"
                  onClick={() => dispatch({ type: "markStar", item: mId })}
                >
                  {isStarred ? "unstar" : "star"}
                </button>

                {/* <p>{content}</p> */}
                <ul className="button-mail-list">
                  <li>
                    <button
                      className="button-mail button-mail1"
                      onClick={() =>
                        dispatch({ type: "markTrash", item: item })
                      }
                    >
                      <img src={deleteIcon} alt="delete" width="20px" />
                    </button>
                  </li>
                  <li>
                    <button
                      className="button-mail button-mail2"
                      onClick={() => dispatch({ type: "markRead", item: mId })}
                    >
                      Mark as {unread ? "read" : "unread"}
                    </button>
                  </li>
                  <li>
                    <button
                      className="button-mail button-mail3"
                      onClick={() => dispatch({ type: "markSpam", item: item })}
                    >
                      Report spam
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
