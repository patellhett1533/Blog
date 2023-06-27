import { Inter } from "next/font/google";
import Image from "next/image";
import mobileFriendly from "../assets/mobile-friendly.png";
import proDesign from "../assets/Professionally-Designed.png";
import seo from "../assets/seo.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      <section className="md:px-48 px-8 md:pt-10 md:pb-12 py-32 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="linkedin-btn mb-5">
          <button className="rounded-2xl bg-muted px-4 py-1.5 md:text-sm text-md font-medium text-primary">
            Follow On LinkedIN
          </button>
        </div>
        <div className="intro-slogan">
          <h1 className="md:text-6xl lg:text-7xl sm:text-5xl text-4xl font-heading text-primary">
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
            Explore Services
          </a>
        </div>
      </section>
      <section className="bg-primary-foreground dark:bg-transparent py-24 md:px-48 px-8 md:pt-10 md:pb-12 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Features
          </h1>
        </div>
        <div className="about-technology mb-8">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            This is technologies which we prefered
          </p>
        </div>
        <div className="technologies grid md:gap-4 gap-8 md:mx-0 mx-8 md:grid-cols-3">
          <div className="technology-card py-6 px-8 bg-background rounded-xl border border-border text-start">
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary mb-3"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fillRule="nonzero"
                  d="M14.448 16.24a21.877 21.877 0 0 1-1.747 2.175c1.672 1.623 3.228 2.383 4.09 1.884.864-.498.983-2.225.414-4.484-.853.19-1.78.334-2.757.425zm-1.31.087a27.512 27.512 0 0 1-2.276 0c.377.492.758.948 1.138 1.364.38-.416.76-.872 1.138-1.364zm5.04-7.894c2.665.764 4.405 2.034 4.405 3.567 0 1.533-1.74 2.803-4.405 3.567.67 2.69.441 4.832-.886 5.598-1.328.767-3.298-.105-5.292-2.03-1.994 1.925-3.964 2.797-5.292 2.03-1.327-.766-1.557-2.908-.886-5.598-2.665-.764-4.405-2.034-4.405-3.567 0-1.533 1.74-2.803 4.405-3.567-.67-2.69-.441-4.832.886-5.598 1.328-.767 3.298.105 5.292 2.03 1.994-1.925 3.964-2.797 5.292-2.03 1.327.766 1.557 2.908.886 5.598zm-.973-.248c.57-2.26.45-3.986-.413-4.484-.863-.499-2.419.261-4.09 1.884.591.643 1.179 1.374 1.746 2.175.978.09 1.904.234 2.757.425zm-10.41 7.63c-.57 2.26-.45 3.986.413 4.484.863.499 2.419-.261 4.09-1.884a21.877 21.877 0 0 1-1.746-2.175 21.877 21.877 0 0 1-2.757-.425zm4.067-8.142a27.512 27.512 0 0 1 2.276 0A20.523 20.523 0 0 0 12 6.31c-.38.416-.76.872-1.138 1.364zm-1.31.087A21.877 21.877 0 0 1 11.3 5.585C9.627 3.962 8.07 3.202 7.209 3.701c-.864.498-.983 2.225-.414 4.484.853-.19 1.78-.334 2.757-.425zm4.342 7.52A25.368 25.368 0 0 0 15.787 12a25.368 25.368 0 0 0-1.893-3.28 25.368 25.368 0 0 0-3.788 0A25.368 25.368 0 0 0 8.213 12a25.368 25.368 0 0 0 1.893 3.28 25.368 25.368 0 0 0 3.788 0zm1.284-.131c.615-.08 1.2-.183 1.75-.304a20.523 20.523 0 0 0-.612-1.667 27.512 27.512 0 0 1-1.138 1.97zM8.822 8.85c-.615.08-1.2.183-1.75.304.17.536.374 1.094.612 1.667a27.512 27.512 0 0 1 1.138-1.97zm-1.75 5.994c.55.121 1.135.223 1.75.304a27.512 27.512 0 0 1-1.138-1.97c-.238.572-.442 1.13-.612 1.666zm-.978-.245c.261-.834.6-1.708 1.01-2.6-.41-.892-.749-1.766-1.01-2.6-2.242.637-3.677 1.604-3.677 2.6s1.435 1.963 3.677 2.6zm10.834-5.445c-.55-.121-1.135-.223-1.75-.304a27.511 27.511 0 0 1 1.138 1.97c.238-.572.442-1.13.612-1.666zm.978.245c-.261.834-.6 1.708-1.01 2.6.41.892.749 1.766 1.01 2.6 2.242-.637 3.677-1.604 3.677-2.6s-1.435-1.963-3.677-2.6zM12 13.88a1.88 1.88 0 1 1 0-3.76 1.88 1.88 0 0 1 0 3.76z"
                />
              </g>
            </svg>
            <h3 className="text-lg font-semibold text-primary">React.js 18</h3>
            <p className="text-md text-muted-foreground">
              For putting components together
            </p>
          </div>
          <div className="technology-card py-6 px-8 bg-background rounded-xl border border-border text-start">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
                  className="fill-primary"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className="text-lg font-semibold text-primary">Next.js 13</h3>
            <p className="text-md text-muted-foreground">
              Provides additional structure, features and optimization for your
              website
            </p>
          </div>
          <div className="technology-card py-6 px-8 bg-background rounded-xl border border-border text-start">
            <svg
              fill="#000000"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              role="img"
              className="fill-primary mb-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
            <h3 className="text-lg font-semibold text-primary">Component</h3>
            <p className="text-md text-muted-foreground">
              High quality UI components for better interface and experience
            </p>
          </div>
          <div className="technology-card py-6 px-8 bg-background rounded-xl border border-border text-start">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary mb-3"
            >
              <rect width="24" height="24" fill="none" />
              <path d="M12,1.85a1.62,1.62,0,0,0-.78.2L3.78,6.35A1.58,1.58,0,0,0,3,7.71v8.58a1.58,1.58,0,0,0,.78,1.36l2,1.12a3.24,3.24,0,0,0,1.71.47,2.07,2.07,0,0,0,2.21-2.33V8.44a.22.22,0,0,0-.22-.22H8.5a.22.22,0,0,0-.23.22v8.47c0,.66-.68,1.31-1.77.76l-2-1.17a.26.26,0,0,1-.11-.21V7.71a.24.24,0,0,1,.11-.21l7.44-4.29a.22.22,0,0,1,.22,0L19.55,7.5a.24.24,0,0,1,.11.21v8.58a.26.26,0,0,1-.11.21l-7.44,4.29a.24.24,0,0,1-.23,0L10,19.65a.26.26,0,0,0-.21,0,4.22,4.22,0,0,1-1.12.51c-.12,0-.31.11.07.32l2.48,1.47a1.55,1.55,0,0,0,1.56,0l7.44-4.29A1.58,1.58,0,0,0,21,16.29V7.71a1.58,1.58,0,0,0-.78-1.36l-7.44-4.3a1.59,1.59,0,0,0-.78-.2M14,8c-2.12,0-3.39.89-3.39,2.39s1.26,2.08,3.3,2.28c2.43.24,2.62.6,2.62,1.08,0,.83-.67,1.18-2.23,1.18-2,0-2.4-.49-2.55-1.47a.23.23,0,0,0-.22-.18h-1a.21.21,0,0,0-.21.22c0,1.24.68,2.74,3.94,2.74,2.35,0,3.7-.93,3.7-2.55s-1.08-2-3.37-2.34-2.54-.46-2.54-1,.2-1,1.91-1c1.5,0,2.09.33,2.32,1.36a.21.21,0,0,0,.21.17h1a.19.19,0,0,0,.15-.07.16.16,0,0,0,.05-.16C17.56,8.82,16.38,8,14,8Z" />
            </svg>
            <h3 className="text-lg font-semibold">Node.js</h3>
            <p className="text-md text-muted-foreground">
              For backend logic and creating rest API for website
            </p>
          </div>
          <div className="technology-card py-6 px-8 bg-background rounded-xl border border-border text-start">
            <svg
              fill="#000000"
              width="48"
              height="48"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary mb-3"
            >
              <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
            </svg>
            <h3 className="text-lg font-semibold text-primary">MongoDB</h3>
            <p className="text-md text-muted-foreground">
              A NoSQL database with json format
            </p>
          </div>
          <div className="technology-card py-6 px-8 bg-background rounded-xl border border-border text-start">
            <svg
              width="48"
              height="48"
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3"
            >
              <g>
                <rect
                  className="fill-primary"
                  x="0"
                  y="0"
                  width="256"
                  height="256"
                  rx="28"
                ></rect>
                <path
                  d="M186.377012,94.197636 L186.377012,160.424478 C186.377012,183.243286 184.707519,194.187745 179.699037,203.649406 C175.060358,212.741266 168.937684,218.490548 156.323731,224.798721 L129.794937,212.183571 C142.410087,206.247593 148.531564,201.05481 152.427049,193.074749 C156.509231,184.91278 157.808923,175.451119 157.808923,150.593015 L157.808923,94.197636 L186.377012,94.197636 Z M140.928486,50.0787207 L140.928486,182.316986 C126.272844,185.099476 115.512688,186.212472 103.826231,186.212472 C68.9487718,186.212472 50.7686431,170.445031 50.7686431,140.205054 C50.7686431,111.079269 70.0629644,92.1583404 99.9295492,92.1583404 C104.567032,92.1583404 108.091519,92.5281423 112.359199,93.6411381 L112.359199,50.0787207 L140.928486,50.0787207 Z M102.713236,115.160254 C88.243093,115.160254 79.8944275,124.065418 79.8944275,139.647359 C79.8944275,154.860696 87.8720944,163.208164 102.527736,163.208164 C105.680028,163.208164 108.278215,163.022665 112.359199,162.467364 L112.359199,116.643052 C109.020212,115.531253 106.237722,115.160254 102.713236,115.160254 Z M186.377012,50.2307105 L186.377012,79.5419941 L157.808923,79.5419941 L157.808923,50.2307105 L186.377012,50.2307105 Z"
                  className="fill-primary-foreground"
                ></path>
              </g>
            </svg>
            <h3 className="text-lg font-semibold text-primary">Django</h3>
            <p className="text-md text-muted-foreground">
              It enables rapid development of secure and maintainable website
            </p>
          </div>
        </div>
      </section>
      <section className="md:px-48 px-8 md:pt-10 md:pb-12 lg:py-32 py-24 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4 text-primary">
          <h1 className="md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Why Groupon ?
          </h1>
        </div>
        <div className="about-why mb-8">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            Here is point why you should take our services
          </p>
        </div>
        <div className="key-points grid md:grid-col-3 grid-col-1">
          <div className="point-card flex md:flex-row flex-col-reverse items-center justify-between w-full mb-12">
            <div className="point-text md:w-1/2 w-full md:text-start text-center">
              <h1 className="text-primary/80 md:text-xl lg:text-2xl text-lg font-heading mb-5">
                Mobile Friendly
              </h1>
              <p className="text-muted-foreground leading-normal sm:text-xl">
                We provide a website which is highly responsive and support any
                devices.responsiveness is very important because of so many
                users use mobile device and some of uses desktop thats why
                responsive of website is needed.
              </p>
            </div>
            <div className="point-img md:w-1/2 w-full p-3 flex md:justify-end justify-center">
              <Image
                className="w-9/12 h-auto rounded-xl"
                src={mobileFriendly}
                alt=""
              />
            </div>
          </div>
          <div className="point-card flex md:flex-row-reverse flex-col-reverse items-center justify-between w-full mb-12">
            <div className="point-text w-full md:w-1/2 md:text-start text-center">
              <h1 className="text-primary/80 md:text-xl lg:text-2xl text-lg font-heading mb-5">
                Professionally Designed
              </h1>
              <p className="text-muted-foreground leading-normal sm:text-xl">
                Our experienced in-house team does the magic that optimizes the
                website and makes it visually appealing.
              </p>
            </div>
            <div className="point-img w-full md:w-1/2 p-3 flex md:justify-start justify-center">
              <Image
                className="w-9/12 h-auto rounded-xl"
                src={proDesign}
                alt=""
              />
            </div>
          </div>
          <div className="point-card flex md:flex-row flex-col-reverse items-center justify-between w-full">
            <div className="point-text w-full md:w-1/2 md:text-start text-center">
              <h1 className="text-primary/80 md:text-xl lg:text-2xl text-lg font-heading mb-5">
                SEO Optimized
              </h1>
              <p className="text-muted-foreground leading-normal sm:text-xl">
                We use our SEO expertise to optimize the websites that will rank
                higher and crawl to the top of the search engines.
              </p>
            </div>
            <div className="point-img w-full md:w-1/2 p-3 flex md:justify-end justify-center">
              <Image className="w-9/12 h-auto rounded-xl" src={seo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-foreground dark:bg-transparent md:px-48 px-8 py-24 md:pt-10 md:pb-12 lg:py-32 flex flex-col items-center justify-center text-center">
        <div className="section-title mb-4">
          <h1 className="text-primary md:text-5xl lg:text-6xl sm:text-3xl text-2xl font-heading">
            Website Solution
          </h1>
        </div>
        <div className="about-solution mb-8">
          <p className="text-muted-foreground leading-normal text-lg sm:text-xl">
            Choose the perfect website solution for you business
          </p>
        </div>
        <ul className="solution-point text-start md:px-0 px-12 list-outside marker:content-['✓'] marker:text-primary">
          <li className="mb-4">
            <span className="text-lg md:text-base relative left-5 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              architecto, eaque dignissimos accusamus optio tempora. Lorem ipsum
              dolor sit amet.
            </span>
          </li>
          <li className="mb-4">
            <span className="text-lg md:text-base relative left-5 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              architecto, eaque dignissimos accusamus optio tempora. Lorem ipsum
              dolor sit amet.
            </span>
          </li>
          <li className="mb-4">
            <span className="text-lg md:text-base relative left-5 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              architecto, eaque dignissimos accusamus optio tempora. Lorem ipsum
              dolor sit amet.
            </span>
          </li>
          <li className="mb-4">
            <span className="text-lg md:text-base relative left-5 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              architecto, eaque dignissimos accusamus optio tempora. Lorem ipsum
              dolor sit amet.
            </span>
          </li>
          <li className="">
            <span className="text-lg md:text-base relative left-5 text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              architecto, eaque dignissimos accusamus optio tempora. Lorem ipsum
              dolor sit amet.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
