import React from "react";

const contact = () => {
  return (
    <div className="bg-background">
      <section className="lg:px-48 md:px-32 px-12 md:pt-10 md:pb-12 py-32 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Get In Touch
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
          <div className="form-field px-10 py-10">
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

export default contact;
