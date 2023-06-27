import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import CodeShow from "@/components/CodeShow";

const blogName = () => {
  const router = useRouter();
  const blogName = router.query.blogName;
  return (
    <div className=" md:px-36 px-12 py-20 flex justify-center bg-background">
      <section className="max-w-[45rem] w-full">
        <div className="blog-title mb-8">
          <h1 className="text-start text-4xl font-extra mb-3 text-primary">
            Preview Mode for Headless CMS
          </h1>
          <span className="text-md text-muted-foreground">
            Published On 5 June 2023
          </span>
        </div>
        <div className="blog-cover mb-8">
          <Image
            className="rounded-lg  w-full border h-auto max-h-[27rem]"
            src={require("../../blog-cover/coding.png")}
          />
        </div>
        <div className="blog-intro">
          <p className="text-lg mb-4 text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
            vero explicabo, reprehenderit ratione a nesciunt?
          </p>
          <p className="text-lg mb-4 text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptatum esse qui, odit incidunt dignissimos obcaecati doloremque
            suscipit laudantium perspiciatis aliquid saepe alias ullam, ab
            architecto vitae ut quia? Quisquam aspernatur dolore distinctio sed!
            Sequi facere, ab maiores quaerat alias, voluptatem illo est neque
            suscipit quam rerum soluta! Totam, dolorem.
          </p>
          <p className="text-lg mb-4 text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
            vero explicabo, reprehenderit ratione a nesciunt?
          </p>
          <p className="text-lg mb-4 text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
            vero explicabo, reprehenderit ratione a nesciunt?
          </p>
          <p className="text-lg mb-4 text-primary">
            Below i mentioned a small starter code, you can easily use this
            template in your project
          </p>
        </div>
        <div className="blog-code whitespace-pre-line">
          <CodeShow />
        </div>
        <div className="blog-semi-title mt-12 mb-4">
          <h2 className="text-3xl font-extra text-primary">
            What to expect from here
          </h2>
        </div>
        <p className="text-lg mb-4 text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          voluptatum esse qui, odit incidunt dignissimos obcaecati doloremque
          suscipit laudantium perspiciatis aliquid saepe alias ullam, ab
          architecto vitae ut quia? Quisquam aspernatur dolore distinctio sed!
          Sequi facere, ab maiores quaerat alias, voluptatem illo est neque
          suscipit quam rerum soluta! Totam, dolorem.
          <a
            href="http://www.google.com"
            className="underline underline-offset-4"
          >
            Click to More info
          </a>
        </p>
        <p className="text-lg mb-4 text-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
          vero explicabo, reprehenderit ratione a nesciunt?
        </p>
        <p className="text-lg mb-4 text-primary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id commodi
          vero explicabo, reprehenderit ratione a nesciunt?
        </p>
        <p className="text-lg mb-4 text-primary">
          Below i mentioned a small starter code, you can easily use this
          template in your project
        </p>
        <ul className="list-disc ms-5 mb-4 text-primary">
          <li className="text-lg">Lorem ipsum dolor sit amet.</li>
          <li className="text-lg">Lorem ipsum dolor sit amet.</li>
          <li className="text-lg">Lorem ipsum dolor sit amet.</li>
        </ul>
        <p className="text-lg mb-4 text-primary">
          Below i mentioned a small starter code, you can easily use this
          template in your project
        </p>
      </section>
    </div>
  );
};

export default blogName;
