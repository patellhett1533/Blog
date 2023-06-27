import React, { useState } from "react";

const Heading = (props) => {
  const [value, setValue] = useState("");

  const onchange = (e) => {
    setValue(e.target.value);
  };

  const saveData = () => {
    if (value) {
      props.setContent([...props.content, { type: "heading", data: value }]);
      setValue("");
    }
  };

  return (
    <div className="mb-2">
      <input
        onBlur={saveData}
        onChange={(element) => {
          onchange(element);
        }}
        value={value}
        type="text"
        className="w-full text-primary font-sansBold border-none outline-none text-2xl placeholder-primary/80 bg-transparent"
        placeholder="Type Heading Here"
      />
    </div>
  );
};

export default Heading;
