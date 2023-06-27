import React from "react";

const index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:px-36 sm:px-28 px-10 bg-background">
      <h1 className="text-4xl font-heading mb-5 text-primary">
        This is admin dashboard
      </h1>
      <p className="text-muted-foreground text-lg text-center">
        Here you can handle all activity of website like add blog, edit blog,
        change website data, inquiery request, etc.you can update website images
        and other visuals.
      </p>
    </div>
  );
};

export default index;
