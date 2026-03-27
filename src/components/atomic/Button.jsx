import "./Button.css";
function Button(props) {
  const { className, label, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
export default Button;
