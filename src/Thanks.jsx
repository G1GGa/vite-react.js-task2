import thanks from "../images/thank-you.svg";

const Thanks = ({ active }) => {
  return (
    <div className="thanksContent">
      <img className="thankU" src={thanks} alt="thank-you" />
      <div className="selectNum">
        <p>You Selected {active} out of 5</p>
      </div>
      <h2 className="thankTitle">Thank you!</h2>
      <p className="thankText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thanks;
