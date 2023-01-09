import "./backdrop.css";
const Backdrop = ({ show, toggleHandler }) => {
  return (
    show && (
      <div className="backdrop" onClick={toggleHandler}>
        <ul className="siderdrawer_links"></ul>
      </div>
    )
  );
};
export default Backdrop;
