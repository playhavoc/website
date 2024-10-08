import React from "react";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Aspiring Software Engineer & Project Leader
            </span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Linus Sharp</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              A Computer Science student at the University of Nottingham with
              expertise in Python, JavaScript, React, and AWS. I lead
              cross-functional teams to deliver innovative software solutions.
            </p>
            {/*btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/My CV - CompSci.pdf" // path to your PDF file in the public folder
                download="My CV - CompSci.pdf" // download attribute triggers the download
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order-name mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
