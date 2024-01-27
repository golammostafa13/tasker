import { PropTypes } from "prop-types";

const TextInput = (props) => {
  const { label, isRequired, name, placeholder, value, setData } = props;
  return (
    <div className="space-y-2 lg:space-y-3">
      <label htmlFor="title">{label}</label>
      <input
        className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
        type="text"
        name={name}
        value={value}
        id={name}
        onChange={(e) => setData(name, e.target.value)}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setData: PropTypes.func.isRequired,
};

export default TextInput;
