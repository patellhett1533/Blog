import * as React from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isToggle, setIsToggle] = React.useState(false);
  return (
    <>
      <div
        class={`z-50 flex md:sticky md:top-0 md:left-0 transition-all ease-in fixed flex-col h-screen max-w-64 w-fit  bg-primary-foreground dark:bg-background border-r border-border ${
          !isToggle ? "-left-64" : "left-0"
        }`}
      >
        <div class="flex items-center justify-center h-14 border-b border-border">
          <div className="text-primary">Dashboard For CMS</div>
        </div>
        <div class="overflow-y-auto overflow-x-hidden flex-grow">
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-primary">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/admin/new-blog"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Edit / Add_Plus_Circle">
                      <path
                        id="Vector"
                        d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  New Blog
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/inquery-request"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Inquiery Request
                </span>
                <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                  New
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 6.5H16"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g opacity="0.4">
                      <path
                        d="M6 6.5H2"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <path
                      d="M8 17.5H2"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g opacity="0.4">
                      <path
                        d="M22 17.5H18"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Appearence & Theme
                </span>
              </Link>
            </li>
            <li class="px-5">
              <div class="flex flex-row items-center h-8">
                <div class="text-sm font-light tracking-wide text-primary">
                  Pages
                </div>
              </div>
            </li>
            <li className="nav-footer">
              <Link
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21M3 6H21M3 18H15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Nav & Footer
                </span>
              </Link>
            </li>
            <li className="home-page">
              <Link
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="style=linear" clip-path="url(#clip0_1_129)">
                      <g id="home-door">
                        <path
                          id="vector"
                          d="M19 23H5C3.34315 23 2 21.6569 2 20V11.563C2 10.4094 2.49808 9.31192 3.36639 8.55236L10.0248 2.72784C11.1558 1.7385 12.8442 1.73851 13.9752 2.72784L20.6336 8.55236C21.5019 9.31192 22 10.4094 22 11.563V20C22 21.6569 20.6569 23 19 23Z"
                          stroke="#currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          id="vector_2"
                          d="M12 16L12 19"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_129">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 24) rotate(-90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Home Page
                </span>
                <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">
                  15
                </span>
              </Link>
            </li>
            <li className="service-page">
              <Link
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Iconly/Curved/Work">
                      <g id="Work">
                        <path
                          id="Stroke 1"
                          d="M11.9612 16.5167V13.8887"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Stroke 2"
                          d="M21.0895 11.4775L21.0605 11.4985C18.6385 12.9905 15.4405 13.8915 11.9565 13.8915C8.47252 13.8915 5.28352 12.9905 2.86252 11.4985L2.83252 11.4775"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Stroke 4"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.75024 13.3507C2.75024 7.19871 5.05324 5.14771 11.9612 5.14771C18.8702 5.14771 21.1722 7.19871 21.1722 13.3507C21.1722 19.5027 18.8702 21.5537 11.9612 21.5537C5.05324 21.5537 2.75024 19.5027 2.75024 13.3507Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Stroke 6"
                          d="M15.2239 5.3692V4.7392C15.2239 3.4752 14.3009 2.4502 13.1639 2.4502H10.7589C9.62185 2.4502 8.69885 3.4752 8.69885 4.7392V5.3692"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Service Page
                </span>
              </Link>
            </li>
            <li className="contact-page">
              <Link
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21M3 6H21M3 18H15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Contact Page
                </span>
              </Link>
            </li>
            <li className="blog-page">
              <Link
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21M3 6H21M3 18H15"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">
                  Blog Page
                </span>
              </Link>
            </li>
            <hr className="border border-border" />
            <li className="pt-5 logout-btn">
              <Link
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary-foreground text-primary hover:text-primary/80 border-l-4 border-transparent hover:border-primary pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-7 md:right-12 right-5 md:hidden z-50"
        onClick={() => setIsToggle(!isToggle)}
      >
        {!isToggle ? (
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            className="fill-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        ) : (
          <path
            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
            className="fill-primary"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        )}
      </svg>
    </>
  );
}
