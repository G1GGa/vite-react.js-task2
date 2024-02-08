const Button = ({ click, name }) => {
  return (
    <div className="buttonContainer">
      <button onClick={click} className="button">
        {name}
      </button>
    </div>
  );
};

export default Button;
