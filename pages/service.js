import Image from "next/image";
import React from "react";

const service = () => {
  return (
    <div className="bg-background">
      <section className="lg:px-48 md:px-32 px-8 md:pt-10 md:pb-12 py-32 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="intro-slogan">
          <h1 className="text-primary md:text-6xl lg:text-7xl sm:text-5xl text-4xl font-heading">
            An example app built using Next.js 13 server components.
          </h1>
        </div>
        <div className="intro-statement max-w-[42rem] my-6">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            I'm building a web app with Next.js 13 and open sourcing everything.
            Follow along as we figure this out together.
          </p>
        </div>
        <div className="action-btn">
          <a
            href=""
            className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium h-11 px-8"
          >
            Quick Inquiry
          </a>
        </div>
      </section>
      <section className="lg:px-48 bg-primary-foreground dark:bg-transparent py-24 md:px-32 px-8 md:pt-10 md:pb-12 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Our Main Services
          </h1>
        </div>
        <div className="about-technology mb-8">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            Our best web development services
          </p>
        </div>
        <div className="services-data grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-5">
          <ul className="text-start md:px-0 px-12 list-outside marker:content-['✓'] marker:text-primary">
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                Website Development
              </span>
            </li>
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                Website Redevelopment
              </span>
            </li>
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                100% Responsive Website
              </span>
            </li>
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                Flexible User Interface
              </span>
            </li>
            <li>
              <span className="relative left-5 text-primary">
                Admin Dashboard
              </span>
            </li>
          </ul>
          <ul className="text-start md:px-0 px-12 list-outside marker:content-['✓'] marker:text-primary">
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                Payment Gateway Integration
              </span>
            </li>
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                CMS Website Development
              </span>
            </li>
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                Dynamic Web Services
              </span>
            </li>
            <li className="mb-5 text-lg">
              <span className="relative left-5 text-primary">
                Web Applications
              </span>
            </li>
            <li>
              <span className="relative left-5 text-primary">
                Portfolio Website
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="lg:px-48 md:px-32 px-8 md:pt-10 md:pb-12 py-32 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Experties
          </h1>
        </div>
        <div className="about-technology mb-8">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            Website types which we develop
          </p>
        </div>
        <div className="type-website grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-8">
          <div className="type-card border border-border px-6 py-6 rounded-xl">
            <div className="card-img flex justify-center">
              <Image
                className="mb-3 w-52 h-40 bg-cover"
                src={require("../assets/ecommerce.png")}
                alt=""
              />
            </div>
            <div className="card-info text-start">
              <h1 className="text-xl mb-2 text-primary">Ecommerce</h1>
              <p className="text-md text-muted-foreground">
                Shopping cart, wallet and payment integration functionality
              </p>
            </div>
          </div>
          <div className="type-card border border-border px-6 py-6 rounded-xl">
            <div className="card-img flex justify-center">
              <Image
                className="mb-3 w-52 h-40 bg-cover"
                src={require("../assets/it.png")}
                alt=""
              />
            </div>
            <div className="card-info text-start">
              <h1 className="text-xl mb-2 text-primary">IT Service</h1>
              <p className="text-md text-muted-foreground">
                Show your work to world or create portfolio of your work
              </p>
            </div>
          </div>
          <div className="type-card border border-border px-6 py-6 rounded-xl">
            <div className="card-img flex justify-center">
              <Image
                className="mb-3 w-52 h-40 bg-cover"
                src={require("../assets/social.png")}
                alt=""
              />
            </div>
            <div className="card-info text-start">
              <h1 className="text-xl mb-2 text-primary">Social Media</h1>
              <p className="text-md text-muted-foreground">
                Exploring your art or talent or work to the entire world
              </p>
            </div>
          </div>
          <div className="type-card border border-border px-6 py-6 rounded-xl">
            <div className="card-img flex justify-center">
              <Image
                className="mb-3 w-52 h-40 bg-cover"
                src={require("../assets/school.png")}
                alt=""
              />
            </div>
            <div className="card-info text-start">
              <h1 className="text-xl mb-2 text-primary">School/College</h1>
              <p className="text-md text-muted-foreground">
                Addmission, Attendance, Result and fees payment task
              </p>
            </div>
          </div>
          <div className="type-card border border-border px-6 py-6 rounded-xl">
            <div className="card-img flex justify-center">
              <Image
                className="mb-3 w-52 h-40 bg-cover"
                src={require("../assets/travel.png")}
                alt=""
              />
            </div>
            <div className="card-info text-start">
              <h1 className="text-xl mb-2 text-primary">Travel</h1>
              <p className="text-md text-muted-foreground">
                platform for your agency with ticket booking
              </p>
            </div>
          </div>
          <div className="type-card border border-border px-6 py-6 rounded-xl">
            <div className="card-img flex justify-center">
              <Image
                className="mb-3 w-52 h-40 bg-cover"
                src={require("../assets/portfolio.png")}
                alt=""
              />
            </div>
            <div className="card-info text-start">
              <h1 className="text-xl mb-2 text-primary">Portfolio</h1>
              <p className="text-md text-muted-foreground">
                Showcase your work in well mannerd and systmatic way
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-48 px-8 bg-primary-foreground dark:bg-transparent py-24 md:px-32 md:pt-10 md:pb-12 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Process To Create Website
          </h1>
        </div>
        <div className="about-technology mb-10">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            Our approach to create any website
          </p>
        </div>
        <div className="relative max-w-[75rem] mx-auto process-timeline after:content-[''] after:-ms-[3px] after:w-0.5 after:bg-primary after:absolute md:after:left-1/2 after:top-0 after:h-full after:z-0 after:left-10">
          <div className="relative left-0 process-step left-step md:w-1/2 w-full md:px-10 px-14 mb-6 md:text-end text-start">
            <div className="after:top-1.5 mobile-dot md:hidden after:content-[''] after:absolute after:left-8 after:bg-primary after:h-3 after:rounded-full after:w-3"></div>
            <Image
              className="z-10 border border-primary/80 hidden md:block w-10 h-10 bg-muted p-1 rounded-xl absolute -top-2 -right-[1.15rem]"
              src={require("../assets/discovery.png")}
              alt=""
            />
            <h1 className="text-primary md:text-lg mb-2">Discovery</h1>
            <p className="text-muted-foreground">
              Our website development services cater to a global clientele.
              Before we get started, we'll dive into a scope and scope
              discussion to understand your needs and vision.
            </p>
          </div>
          <div className="relative md:left-1/2 left-0 process-step right-step md:w-1/2 w-full px-14 md:px-10 mb-6 text-start">
            <div className="after:top-1.5 mobile-dot md:hidden after:content-[''] after:absolute after:left-8 after:bg-primary after:h-3 after:rounded-full after:w-3"></div>
            <Image
              className="z-10 border border-primary/80 hidden md:block w-10 h-10 bg-muted p-1 rounded-xl absolute -top-2 -left-[1.15rem]"
              src={require("../assets/planning.png")}
              alt=""
            />
            <h1 className="text-primary md:text-lg mb-2">Planning</h1>
            <p className="text-muted-foreground">
              Our website development services cater to a global clientele.
              Before we get started, we'll dive into a scope and scope
              discussion to understand your needs and vision.
            </p>
          </div>
          <div className="relative left-0 process-step left-step md:w-1/2 w-full px-14 md:px-10 mb-6 text-start md:text-end">
            <div className="after:top-1.5 mobile-dot md:hidden after:content-[''] after:absolute after:left-8 after:bg-primary after:h-3 after:rounded-full after:w-3"></div>
            <Image
              className="z-10 border border-primary/80 hidden md:block w-10 h-10 bg-muted p-1 rounded-xl absolute -top-2 -right-[1.15rem]"
              src={require("../assets/designing.png")}
              alt=""
            />
            <h1 className="text-primary md:text-lg mb-2">Designing</h1>
            <p className="text-muted-foreground">
              Our website development services cater to a global clientele.
              Before we get started, we'll dive into a scope and scope
              discussion to understand your needs and vision.
            </p>
          </div>
          <div className="relative md:left-1/2 left-0 process-step right-step md:w-1/2 w-full px-14 md:px-10 mb-6 text-start">
            <div className="after:top-1.5 mobile-dot md:hidden after:content-[''] after:absolute after:left-8 after:bg-primary after:h-3 after:rounded-full after:w-3"></div>
            <Image
              className="z-10 border border-primary/80 hidden md:block w-10 h-10 bg-muted p-1 rounded-xl absolute -top-2 -left-[1.15rem]"
              src={require("../assets/testing.png")}
              alt=""
            />
            <h1 className="text-primary md:text-lg mb-2">Testing</h1>
            <p className="text-muted-foreground">
              Our website development services cater to a global clientele.
              Before we get started, we'll dive into a scope and scope
              discussion to understand your needs and vision.
            </p>
          </div>
          <div className="relative left-0 process-step left-step md:w-1/2 w-full px-14 md:px-10 mb-6 text-start md:text-end">
            <div className="after:top-1.5 mobile-dot md:hidden after:content-[''] after:absolute after:left-8 after:bg-primary after:h-3 after:rounded-full after:w-3"></div>
            <Image
              className="z-10 border border-primary/80 hidden md:block w-10 h-10 bg-muted p-1 rounded-xl absolute -top-2 -right-[1.15rem]"
              src={require("../assets/launch.png")}
              alt=""
            />
            <h1 className="text-primary md:text-lg mb-2">Launch</h1>
            <p className="text-muted-foreground">
              Our website development services cater to a global clientele.
              Before we get started, we'll dive into a scope and scope
              discussion to understand your needs and vision.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:px-48 md:px-32 px-8 md:pt-10 md:pb-12 py-32 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Send Inquiry
          </h1>
        </div>
        <div className="about-technology mb-10">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            Quick inquiry for your need
          </p>
        </div>
        <div className="inquiry-form grid md:grid-cols-2 place-content-center">
          <div className="form-info flex flex-col items-center justify-center">
            <h1 className="text-3xl text-primary md:text-start text-center mb-5">
              Make Your Website More Effective
            </h1>
            <p className="text-lg text-muted-foreground md:text-start text-center">
              Please fill in the form and our team will contact you as soon as
              possible to discuss your project and make schedule.
            </p>
          </div>
          <div className="form-field md:px-10 px-6 py-10">
            <form action="post">
              <div className="name-field flex flex-col items-start">
                <label htmlFor="name" className="mb-2 text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border bg-background text-primary outline-none mb-5 px-3 py-2 rounded-lg  border-border"
                />
              </div>
              <div className="mobile-field flex flex-col items-start">
                <label htmlFor="mobile" className="mb-2 text-primary">
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="w-full border bg-background text-primary outline-none mb-5 px-3 py-2 rounded-lg  border-border"
                />
              </div>
              <div className="email-field flex flex-col items-start">
                <label htmlFor="email" className="mb-2 text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border bg-background text-primary outline-none mb-5 px-3 py-2 rounded-lg  border-border"
                />
              </div>
              <div className="detail-field flex flex-col items-start">
                <label htmlFor="detail" className="mb-2 text-primary">
                  Detail
                </label>
                <textarea
                  name="detail"
                  id="detail"
                  rows="5"
                  className="w-full border bg-background text-primary outline-none mb-5 px-3 py-2 rounded-lg  border-border resize-none"
                ></textarea>
              </div>
              <div className="submit-btn">
                <button className="w-fullinline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium h-11 px-8 w-full mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default service;
