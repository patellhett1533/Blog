import Image from "next/image";
import React from "react";

const blog = () => {
  return (
    <div className="bg-background">
      <section className="lg:px-48 md:px-40 px-12 md:pt-10 md:pb-12 py-32 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Blogs
          </h1>
        </div>
        <div className="about-technology mb-10">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            A blogs built by our team to help developer in creating development
            services
          </p>
        </div>
        <div className="blogs grid md:grid-cols-2 gap-10 pla">
          <div className="blog-cover max-w-[27rem] w-11/12 text-start">
            <a href="#">
              <Image
                src={require("../../blog-cover/coding.png")}
                className="bg-cover border w-full h-auto max-h-64 rounded-lg mb-4"
              />
            </a>
            <a href="#" className="text-2xl font-extra text-primary">
              Preview Mode for Headless CMS
            </a>
            <p className="text-lg text-muted-foreground my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              maiores quas
            </p>
            <span className="text-md text-muted-foreground">5 June 2023</span>
          </div>
          <div className="blog-cover max-w-[27rem] w-11/12 text-start">
            <a href="#">
              <Image
                src={require("../../blog-cover/angry.png")}
                className="bg-cover border w-full h-64 rounded-lg mb-4"
              />
            </a>
            <a href="#" className="text-2xl font-extra text-primary">
              Frustration Of Failure As A Freelancer
            </a>
            <p className="text-lg text-muted-foreground my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            </p>
            <span className="text-md text-muted-foreground">5 June 2023</span>
          </div>
          <div className="blog-cover max-w-[27rem] w-11/12 text-start">
            <a href="#">
              <Image
                src={require("../../blog-cover/society.png")}
                className="bg-cover border w-full h-64 rounded-lg mb-4"
              />
            </a>
            <a href="#" className="text-2xl font-extra text-primary">
              Connect With People To Grow More
            </a>
            <p className="text-lg text-muted-foreground my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              maiores quas
            </p>
            <span className="text-md text-muted-foreground">5 June 2023</span>
          </div>
          <div className="blog-cover max-w-[27rem] w-11/12 text-start">
            <a href="#">
              <Image
                src={require("../../blog-cover/think1.png")}
                className="border w-full h-64 rounded-lg mb-4"
              />
            </a>
            <a href="#" className="text-2xl font-extra text-primary">
              Always Stay Creative WIth Your Mind
            </a>
            <p className="text-lg text-muted-foreground my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              maiores quas
            </p>
            <span className="text-md text-muted-foreground">5 June 2023</span>
          </div>
          <div className="blog-cover max-w-[27rem] w-11/12 text-start">
            <a href="#">
              <Image
                src={require("../../blog-cover/tutor.png")}
                className="bg-cover border w-full h-64 rounded-lg mb-4"
              />
            </a>
            <a href="#" className="text-2xl font-extra text-primary">
              Whenever You Have Time, Tutoring
            </a>
            <p className="text-lg text-muted-foreground my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              maiores quas
            </p>
            <span className="text-md text-muted-foreground">5 June 2023</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default blog;
