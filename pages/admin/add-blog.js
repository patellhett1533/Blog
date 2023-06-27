import Code from "@/components/Code";
import Heading from "@/components/Heading";
import ImageShow from "@/components/ImageShow";
import Link from "@/components/Link";
import List from "@/components/List";
import Preview from "@/components/Preview";
import Text from "@/components/Text";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const addBlog = () => {
  const [option, setOption] = useState(false);
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [inputType, setInputType] = useState("text");
  const [content, setContent] = useState([]);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOption(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleBlog = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("cover", cover);
    formdata.append("content", content);

    await fetch(`/api/addBlog`, formdata)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="z-30 w-screen bg-background flex justify-center min-h-screen">
      <div className="max-w-[45rem] w-full my-10">
        <input
          className="w-full text-5xl outline-none font-heading placeholder-primary/80 bg-transparent text-primary mb-3"
          placeholder="Untitled Blog"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="cover-blog">
          <input
            className="selectImgInput"
            type="file"
            hidden
            onChange={({ target: { files } }) => {
              if (files) {
                setCover(files[0]);
              }
            }}
            accept="image/*"
          />
          {!cover ? (
            <div
              onClick={() => document.querySelector(".selectImgInput").click()}
              className="empty-img w-full h-64 mb-4 rounded-lg cursor-pointer flex flex-col items-center justify-center border border-border"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.205 3h11.59c1.114 0 1.519.116 1.926.334.407.218.727.538.945.945.218.407.334.811.334 1.926v7.51l-4.391-4.053a1.5 1.5 0 0 0-2.265.27l-3.13 4.695-2.303-1.48a1.5 1.5 0 0 0-1.96.298L3.005 18.15A12.98 12.98 0 0 1 3 17.795V6.205c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945C4.686 3.116 5.09 3 6.205 3zm9.477 8.53L21 16.437v1.357c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334H6.205c-1.115 0-1.519-.116-1.926-.334a2.305 2.305 0 0 1-.485-.345L8.2 15.067l2.346 1.508a1.5 1.5 0 0 0 2.059-.43l3.077-4.616zM7.988 6C6.878 6 6 6.832 6 7.988 6 9.145 6.879 10 7.988 10 9.121 10 10 9.145 10 7.988 10 6.832 9.121 6 7.988 6z"
                  className="fill-muted-foreground"
                />
              </svg>
              <p className="font-sans text-muted-foreground text-lg">
                Click To Add Cover Image
              </p>
            </div>
          ) : (
            <Image
              onClick={() => document.querySelector(".selectImgInput").click()}
              src={URL.createObjectURL(cover)}
              width={100}
              height={100}
              className="rounded-lg mb-4 w-full border h-auto max-h-[27rem] object-fit bg-cover"
            />
          )}
        </div>
        <Preview content={content} set={setContent} />
        <div className="add-section flex relative">
          <div className="add-option absolute -left-12" ref={ref}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-background hover:bg-muted p-0.5 rounded-md cursor-pointer text-primary me-2 mb-1"
              onClick={() => setOption(!option)}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                className="fill-primary"
              />
            </svg>

            <div
              className={`z-50 option-list transition-all absolute bg-background border border-border  px-4 py-4 w-40 rounded-lg drop-shadow-md ${
                !option ? "hidden" : ""
              }`}
            >
              <li
                className="flex items-center mb-2 cursor-pointer hover:bg-muted p-0.5 rounded"
                onClick={() => {
                  setInputType("text");
                  setOption(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-background border border-border  p-0.5 rounded text-primary me-3"
                >
                  <g id="Edit / Text">
                    <path
                      id="Vector"
                      d="M10 19H12M12 19H14M12 19V5M12 5H6V6M12 5H18V6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <p className="text-primary font-sans">Text</p>
              </li>
              <li
                className="flex items-center mb-2 cursor-pointer hover:bg-muted p-0.5 rounded"
                onClick={() => {
                  setInputType("heading");
                  setOption(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-background border border-border  p-0.5 rounded text-primary me-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 5C7.55228 5 8 5.44772 8 6V11.5H16V6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6V12.5V19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V13.5H8V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V12.5V6C6 5.44772 6.44772 5 7 5Z"
                    className="fill-primary"
                  />
                </svg>
                <p className="text-primary font-sans">Heading</p>
              </li>
              <li
                className="flex items-center mb-2 cursor-pointer hover:bg-muted p-0.5 rounded"
                onClick={() => {
                  setInputType("link");
                  setOption(false);
                }}
              >
                <svg
                  className="bg-background border border-border  p-0.5 rounded text-primary me-3 fill-primary"
                  width="24"
                  height="24"
                  viewBox="-5.5 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.52 23.72v0c-1.2 0-2.36-0.48-3.2-1.32-0.84-0.88-1.32-2-1.32-3.2s0.48-2.36 1.32-3.2l4.24-4.24c0.8-0.8 1.88-1.28 3.040-1.32 0.48 0 0.84 0.36 0.88 0.8 0 0.48-0.36 0.84-0.8 0.88-0.72 0.040-1.4 0.32-1.92 0.84l-4.24 4.2c-0.52 0.52-0.84 1.24-0.84 2s0.28 1.48 0.84 2c0.52 0.52 1.24 0.84 2 0.84s1.48-0.28 2-0.84l4.24-4.24c0.52-0.52 0.84-1.24 0.84-2 0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84c0 1.2-0.48 2.36-1.32 3.2l-4.24 4.24c-0.88 0.88-2 1.36-3.2 1.36zM12 21.56c-0.44 0-0.8-0.36-0.84-0.8 0-0.48 0.32-0.84 0.8-0.88 0.72-0.040 1.4-0.32 1.88-0.84l4.28-4.24c1.12-1.12 1.12-2.92 0-4-1.12-1.12-2.92-1.12-4 0l-4.28 4.24c-0.52 0.52-0.8 1.2-0.84 1.92 0 0.48-0.4 0.8-0.88 0.8s-0.84-0.4-0.8-0.88c0.040-1.16 0.52-2.24 1.32-3.040l4.28-4.24c1.76-1.76 4.64-1.76 6.4 0s1.76 4.64 0 6.4l-4.28 4.24c-0.8 0.8-1.84 1.28-3.040 1.32 0.040 0 0 0 0 0z"></path>
                </svg>
                <p className="text-primary font-sans">Link</p>
              </li>
              <li
                className="flex items-center mb-2 cursor-pointer hover:bg-muted p-0.5 rounded"
                onClick={() => {
                  setInputType("list");
                  setOption(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-background border border-border  p-0.5 rounded text-primary me-3"
                >
                  <g id="Edit / List_Unordered">
                    <path
                      id="Vector"
                      d="M9 17H19M9 12H19M9 7H19M5.00195 17V17.002L5 17.002V17H5.00195ZM5.00195 12V12.002L5 12.002V12H5.00195ZM5.00195 7V7.002L5 7.00195V7H5.00195Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <p className="text-primary font-sans">List</p>
              </li>
              <li
                className="flex items-center mb-2 cursor-pointer hover:bg-muted p-0.5 rounded"
                onClick={() => {
                  setInputType("code");
                  setOption(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-background border border-border  p-0.5 rounded text-primary me-3"
                >
                  <path
                    d="M17 15L19.6462 12.3538V12.3538C19.8416 12.1584 19.8416 11.8416 19.6462 11.6462V11.6462L17 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 9L4.35151 11.6485V11.6485C4.15738 11.8426 4.15738 12.1574 4.35151 12.3515V12.3515L7 15"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-primary font-sans">Code</p>
              </li>
              <li
                className="flex items-center cursor-pointer hover:bg-muted p-0.5 rounded"
                onClick={() => {
                  setInputType("image");
                  setOption(false);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-background border border-border  p-0.5 rounded text-primary me-3"
                >
                  <path
                    d="M21.6799 16.9599L18.5499 9.64988C17.4899 7.16988 15.5399 7.06988 14.2299 9.42988L12.3399 12.8399C11.3799 14.5699 9.58993 14.7199 8.34993 13.1699L8.12993 12.8899C6.83993 11.2699 5.01993 11.4699 4.08993 13.3199L2.36993 16.7699C1.15993 19.1699 2.90993 21.9999 5.58993 21.9999H18.3499C20.9499 21.9999 22.6999 19.3499 21.6799 16.9599Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.96997 8C8.62682 8 9.96997 6.65685 9.96997 5C9.96997 3.34315 8.62682 2 6.96997 2C5.31312 2 3.96997 3.34315 3.96997 5C3.96997 6.65685 5.31312 8 6.96997 8Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-primary font-sans">Image</p>
              </li>
            </div>
          </div>
          <div className="input-text w-full">
            {inputType == "text" && (
              <Text content={content} setContent={setContent} />
            )}
            {inputType == "heading" && (
              <Heading content={content} setContent={setContent} />
            )}
            {inputType == "link" && (
              <Link content={content} setContent={setContent} />
            )}
            {inputType == "list" && (
              <List content={content} setContent={setContent} />
            )}
            {inputType == "code" && (
              <Code content={content} setContent={setContent} />
            )}
            {inputType == "image" && (
              <ImageShow content={content} setContent={setContent} />
            )}
          </div>
        </div>
        {content.length > 0 && (
          <button
            onClick={handleBlog}
            className="float-right border px-8 py-2.5 rounded bg-primary text-muted text-lg font-sans font-medium hover:bg-primary/90"
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default addBlog;
