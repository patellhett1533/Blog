import React, { useEffect } from "react";
import Image from "next/image";

const Preview = (props) => {
  const data = props.content;

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((textarea) => {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }, [data]);

  const handleInputChange = (event, index, i) => {
    const updatedItems = [...props.content];
    updatedItems[index].data[i] = event.target.value;
    props.set(updatedItems);
  };

  const editExistedData = (e, index) => {
    const updatedItems = [...props.content];
    updatedItems[index].data = e.target.value;
    props.set(updatedItems);
  };

  const updateImg = (e, index) => {
    const updatedItems = [...props.content];
    updatedItems[index].data = e.target.files[0];
    props.set(updatedItems);
  };

  const deleteItem = (index) => {
    const updatedItems = [...props.content];
    updatedItems.splice(index, 1);
    props.set(updatedItems);
  };

  return (
    <div className="relative">
      {data &&
        data.map((item, index) => {
          if (item.type === "text") {
            return (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer absolute -left-12"
                  onClick={() => deleteItem(index)}
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <textarea
                  value={item.data}
                  onChange={(e) => {
                    editExistedData(e, index);
                  }}
                  className="border-none outline-none w-full resize-none h-auto text-lg text-primary font-sans bg-transparent"
                ></textarea>
              </>
            );
          } else if (item.type === "heading") {
            return (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer absolute -left-12"
                  onClick={() => deleteItem(index)}
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  onChange={(e) => editExistedData(e, index)}
                  value={item.data}
                  type="text"
                  className="mb-3 w-full text-primary font-sansBold border-none outline-none text-2xl placeholder-primary/80 bg-transparent"
                />
              </>
            );
          } else if (item.type === "link") {
            return (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer absolute -left-12"
                  onClick={() => deleteItem(index)}
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  onChange={(e) => editExistedData(e, index)}
                  value={item.data}
                  type="text"
                  className="mb-3 border-none w-full outline-none bg-transparent text-primary text-lg"
                />
              </>
            );
          } else if (item.type === "list") {
            return (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer absolute -left-12"
                  onClick={() => deleteItem(index)}
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <ul className="mb-4 marker:text-primary list-disc">
                  {item.data.map((info, i) => (
                    <li>
                      <input
                        key={i}
                        value={info}
                        className="w-full outline-none text-lg text-primary bg-transparent"
                        onChange={(e) => handleInputChange(e, index, i)}
                      />
                    </li>
                  ))}
                </ul>
              </>
            );
          } else if (item.type === "code") {
            return (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer absolute -left-12"
                  onClick={() => deleteItem(index)}
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <textarea
                  onChange={(e) => editExistedData(e, index)}
                  value={item.data}
                  rows="10"
                  className="mb-4 w-full bg-accent drop-shadow text-primary outline-none resize-none px-2 py-1 rounded"
                ></textarea>
              </>
            );
          } else if (item.type === "image") {
            return (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer absolute -left-12"
                  onClick={() => deleteItem(index)}
                >
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div className="flex justify-center">
                  <input
                    className="imgInput"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => updateImg(e, index)}
                  />
                  <Image
                    onClick={() => {
                      document.querySelector(".imgInput").click();
                    }}
                    src={URL.createObjectURL(item.data)}
                    width="500"
                    height="500"
                    alt="no image"
                    className="mb-4 border border-border rounded"
                  />
                </div>
              </>
            );
          }
        })}
    </div>
  );
};

export default Preview;
