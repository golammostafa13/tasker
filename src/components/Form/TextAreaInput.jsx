import PropTypes from "prop-types";

const TextAreaInput = (props) => {
  const { label, name, isRequired, rows, value, setData } = props;
  return (
    <div className="space-y-2 lg:space-y-3">
      <label htmlFor="description">{label}</label>
      <textarea
        className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
        type="text"
        name={name}
        rows={rows}
        id={name}
        onChange={(e) => setData(name, e.target.value)}
        required={isRequired}
        value={value}
      ></textarea>
    </div>
  );
};

TextAreaInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  setData: PropTypes.func.isRequired,
};

export default TextAreaInput;
