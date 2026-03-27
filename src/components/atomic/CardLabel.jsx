import "./CardLabel.css";

function CardLabel(props) {
  const { className, children } = props;
  return <span className={className}>{children}</span>;
}
export default CardLabel;
