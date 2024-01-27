import PropTypes from "prop-types";

const SelectInput = (props) => {
  const { label, name, isRequired, options, placeholder, value, setData } =
    props;

  const handleSelectChange = (e) => {
    setData(name, e.target.value);
  };

  return (
    <div className="space-y-2 lg:space-y-3">
      <label htmlFor={name}>{label}</label>
      <select
        className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
        name={name}
        id={name}
        onChange={handleSelectChange}
        required={isRequired}
        value={value}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  isRequired: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  setData: PropTypes.func.isRequired,
};

export default SelectInput;
