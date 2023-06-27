import React, { useState } from "react";

const Text = (props) => {
  const [value, setValue] = useState("");

  const onchange = (e) => {
    setValue(e.target.value);
  };

  const autoResize = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };

  const saveData = () => {
    if (value) {
      props.setContent([...props.content, { type: "text", data: value }]);
      setValue("");
    }
  };

  return (
    <div className="mb-2">
      <textarea
        onBlur={saveData}
        onChange={(element) => {
          autoResize(element, "20px"), onchange(element);
        }}
        value={value}
        className="border-none outline-none w-full resize-none text-lg text-primary font-sans bg-transparent h-auto"
        placeholder="Type here to make a blog"
      ></textarea>
    </div>
  );
};

export default Text;
