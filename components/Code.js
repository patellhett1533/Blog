import React, { useState } from "react";

const Code = (props) => {
  const [value, setValue] = useState("");

  const onchange = (e) => {
    setValue(e.target.value);
  };

  const saveData = () => {
    if (value) {
      props.setContent([...props.content, { type: "code", data: value }]);
      setValue("");
    }
  };

  const autoResize = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  return (
    <div className="mb-2">
      <textarea
        onBlur={saveData}
        onChange={(element) => {
          {
            autoResize(element, "20px"), onchange(element);
          }
        }}
        value={value}
        rows="10"
        className="w-full bg-accent drop-shadow text-primary outline-none resize-none px-2 py-1 rounded"
      ></textarea>
    </div>
  );
};

export default Code;
