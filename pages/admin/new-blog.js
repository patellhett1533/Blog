import React from "react";
import ModalSide from "@/components/Modal";

const newBlog = () => {
  return (
    <div className="w-screen bg-background">
      <div class="overflow-hidden border-border  mx-5 md:my-8 my-12">
        <div className="action-btn flex items-center justify-end mb-5">
          <a
            href=""
            className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium h-11 px-8"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="me-3"
            >
              <path
                d="M4 12H20M12 4V20"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            ADD BLOG
          </a>
        </div>
        <table class="w-full border border-border rounded-lg bg-background text-left text-sm text-muted-foreground">
          <thead>
            <tr class="w-full">
              <th scope="col" class="px-6 py-4 font-medium text-primary/90">
                Content
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border border-t border-border">
            <tr class="hover:bg-primary-foreground">
              <th class="flex gap-3 px-6 py-4 font-normal text-primary">
                <div class="text-sm">
                  <div class="font-medium text-lg text-primary">
                    Preview Mode Of Headless CMS
                  </div>
                </div>
              </th>

              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  <ModalSide />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody class="divide-y divide-border border-t border-border">
            <tr class="hover:bg-primary-foreground">
              <th class="flex gap-3 px-6 py-4 font-normal text-primary">
                <div class="text-sm">
                  <div class="font-medium text-lg text-primary">
                    Frustration Of A Failure As A Freelancer
                  </div>
                </div>
              </th>

              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <ModalSide />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody class="divide-y divide-border border-t border-border">
            <tr class="hover:bg-primary-foreground">
              <th class="flex gap-3 px-6 py-4 font-normal text-primary">
                <div class="text-sm">
                  <div class="font-medium text-lg text-primary">
                    Connect People To Grow More
                  </div>
                </div>
              </th>

              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <ModalSide />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody class="divide-y divide-border border-t border-border">
            <tr class="hover:bg-primary-foreground">
              <th class="flex gap-3 px-6 py-4 font-normal text-primary">
                <div class="text-sm">
                  <div class="font-medium text-lg text-primary">
                    Always Stay Creative With Your Mind
                  </div>
                </div>
              </th>

              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <ModalSide />
                </div>
              </td>
            </tr>
          </tbody>
          <tbody class="divide-y divide-border border-t border-border">
            <tr class="hover:bg-primary-foreground">
              <th class="flex gap-3 px-6 py-4 font-normal text-primary">
                <div class="text-sm">
                  <div class="font-medium text-lg text-primary">
                    Whenever You Have Time, Tutoring
                  </div>
                </div>
              </th>

              <td class="px-6 py-4">
                <div class="flex justify-end gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <ModalSide />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default newBlog;
