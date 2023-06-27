import React, { useState, useRef } from "react";

const List = (props) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRefs = useRef([]);

  const saveData = () => {
    if (items) {
      props.setContent([...props.content, { type: "list", data: items }]);
      setItems([]);
    }
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");

      // Focus on the next input field
      const nextIndex = items.length;
      if (inputRefs.current[nextIndex]) {
        inputRefs.current[nextIndex].focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem();
    } else if (event.key === "Backspace" && inputValue === "") {
      event.preventDefault();
      removeItem(index);

      // Focus on the previous input field
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(-1);
    setItems(updatedItems);
  };

  const renderInputFields = () => {
    return (
      <ul className="marker:text-primary list-disc">
        {items.map((item, index) => (
          <li>
            <input
              key={index}
              value={item}
              className="w-full outline-none text-lg text-primary bg-transparent"
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          </li>
        ))}
      </ul>
    );
  };

  const handleInputChange = (event, index) => {
    const updatedItems = [...items];
    updatedItems[index] = event.target.value;
    setItems(updatedItems);
  };

  return (
    <div className="mb-2">
      {renderInputFields()}
      <input
        type="text"
        value={inputValue}
        className="w-full outline-none text-lg text-primary bg-transparent"
        placeholder="Type List Data"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onBlur={saveData}
      />
    </div>
  );
};

export default List;
