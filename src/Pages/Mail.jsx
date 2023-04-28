import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { useMailer } from "..";

export default function MailPage() {
  const { mailId } = useParams();
  const { state } = useContext(useMailer);

  const mailData = state.data.find((mail) => mail.mId === mailId);
  // console.log(mailData);

  return (
    <>
      <div className="mail-page">
        <h1>Subject: {mailData.subject}</h1>
        <p>{mailData.content}</p>
      </div>
    </>
  );
}
