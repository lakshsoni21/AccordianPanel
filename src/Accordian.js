const { useState } = require("react");

const Accordian = (props) => {
  const title = props.data.title;
  const content = props.data.content;
  const Show = props.show;
  const change = props.change;
  const index = props.data.index;
  const multiple = props.multipleButton;
  const [ShowMultiple, setShowMultiple] = useState(multiple);
  return (
    <>
      <div
        className="accordian bg-gray-300 p-2 w-1/2 hover:cursor-pointer flex justify-between"
        onClick={() => {
            multiple ? (setShowMultiple(!ShowMultiple)) : (Show ? change(null) : change(index));
        }}
      >
        <h1>{title}</h1>
        <h2>{(Show || ShowMultiple) ? <span> &#x25B2; </span> : <span> &#x25BC; </span>}</h2>
      </div>

      {
        ((multiple && ShowMultiple) || Show) ? (
            <div className="panel p-2 w-1/2 ">
            <h1>{content}</h1>
          </div>
        ) : (
            undefined
        )
      }
    </>
  );
};

module.exports = Accordian;
