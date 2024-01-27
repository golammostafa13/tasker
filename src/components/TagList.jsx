import PropTypes from "prop-types";

const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
};

const TagList = (props) => {
  const { tags } = props;
  const tagArray = tags.split(",").map((tag) => tag.trim());

  return (
    <td>
      <ul className="flex justify-center gap-1.5 flex-wrap">
        {tagArray.map((tag, index) => (
          <li key={index}>
            <span
              className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}
              style={{ backgroundColor: getRandomColor() }}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </td>
  );
};

TagList.propTypes = {
  tags: PropTypes.string.isRequired,
};

export default TagList;
