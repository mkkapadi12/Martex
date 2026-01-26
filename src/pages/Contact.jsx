import React from "react";
import logoblue from "./../assets/images/logo-blue.png";
import Navbar from "./../components/Navbar";
import { Label } from "./../components/ui/label";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./../components/ui/select";
import { Input } from "./../components/ui/input";
import { Textarea } from "./../components/ui/textarea";
import { Button } from "./../components/ui/button";
import { Link } from "react-router-dom";
import NewsLetter from "./../components/NewsLetter";
import Footer from "./../components/Footer";

const Contact = () => {
  const data = {
    logo: logoblue,
    logoscroll: logoblue,
    bg: "bg-white",
    link_color: "text-martex-dark_text",
    btn_color: "bg-[#1680fb]",
    btn_text: "Get Started",
    text: "text-martex-dark_text",
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="contact-page">
      <section
        className=""
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(244, 244, 249, 0.8) 50%, rgba(244, 244, 249, 0.05) 100%)",
        }}
      >
        <Navbar data={data} />
        <section className="xl:max-w-[1080px] mx-auto px-2 sm:px-10 xl:px-2 pt-[140px] sm:pt-[150px] container xl:pt-[180px] sm:pb-[30px]">
          {/* text */}
          <div className="px-2 sm:px-0 w-full mx-auto space-y-5 text-center xl:w-[86%] lg:max-xl:w-9/12 md:w-10/12 mb-[60px]">
            <h1 className="text-3xl font-semibold sm:text-5xl xl:text-6xl text-martex-dark_text">
              Questions? Let's Talk
            </h1>
            <p className="font-medium text-base sm:text-lg xl:text-[22px] text-martex-light_text">
              Want to learn more about Martex, get a quote, or speak with an
              expert? Let us know what you are looking for and we’ll get back to
              you right away
            </p>
          </div>
          {/* form */}
          <div className="px-3 mx-auto sm:p-0 xl:p-8 sm:max-w-3xl xl:max-w-4xl">
            <form action="" className="space-y-7" onSubmit={onSubmit}>
              {/* Question type */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label
                    htmlFor="ques"
                    className="text-lg font-semibold xl:text-xl text-martex-dark_text"
                  >
                    This question is about:
                  </Label>
                  <h2 className="text-base xl:text-lg text-martex-light_text">
                    Choose a topic, so we know who to send your request to:
                  </h2>
                </div>
                {/* Select */}
                <div className="">
                  <Select>
                    <SelectTrigger className="w-full max-w-full py-6 xl:py-7 px-5 text-base xl:text-lg rounded-[4px] bg-[#f5f6f8] text-martex-light_text">
                      <SelectValue
                        placeholder="This question is about..."
                        className="text-martex-light_text"
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup className="!text-xl">
                        <SelectItem
                          value="auth"
                          className="text-base xl:text-lg text-martex-light_text"
                        >
                          Registering/Authorising
                        </SelectItem>
                        <SelectItem
                          value="apps"
                          className="text-base xl:text-lg text-martex-light_text"
                        >
                          Using Application
                        </SelectItem>
                        <SelectItem
                          value="trouble"
                          className="text-base xl:text-lg text-martex-light_text"
                        >
                          Troubleshooting
                        </SelectItem>
                        <SelectItem
                          value="backup"
                          className="text-base xl:text-lg text-martex-light_text"
                        >
                          Backup/Restore
                        </SelectItem>
                        <SelectItem
                          value="other"
                          className="text-base xl:text-lg text-martex-light_text"
                        >
                          other
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Name */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label
                    htmlFor="name"
                    className="text-lg font-semibold xl:text-xl text-martex-dark_text"
                  >
                    Your Name:
                  </Label>
                  <h2 className="text-base xl:text-lg text-martex-light_text">
                    Please enter your real name:
                  </h2>
                </div>
                <div className="border-1 border-martex-dark_text">
                  <Input
                    type="name"
                    className="w-full max-w-full py-6 xl:py-7 px-5 !text-base xl:!text-lg rounded-[4px] text-martex-light_text"
                    placeholder="Your Name*"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label
                    htmlFor="name"
                    className="text-lg font-semibold xl:text-xl text-martex-dark_text"
                  >
                    Your Email Address:
                  </Label>
                  <h2 className="text-base xl:text-lg text-martex-light_text">
                    Please carefully check your email address for accuracy
                  </h2>
                </div>
                <div className="border-1 border-martex-dark_text">
                  <Input
                    type="email"
                    className="w-full max-w-full py-6 xl:py-7 px-5 !text-base xl:!text-lg rounded-[4px] text-martex-light_text"
                    placeholder="Email Address*"
                  />
                </div>
              </div>
              {/* detail of question */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label
                    htmlFor="name"
                    className="text-lg font-semibold xl:text-xl text-martex-dark_text"
                  >
                    Explain your question in details:
                  </Label>
                  <h2 className="text-base xl:text-lg text-martex-light_text">
                    Your OS version, Martex version & build, steps you did. Be
                    VERY precise!
                  </h2>
                </div>
                <div className="border-1 border-martex-dark_text">
                  <Textarea
                    className="w-full min-h-[12rem] xl:!min-h-[14rem] max-w-full p-3 !text-base xl:!text-lg rounded-[4px] text-martex-light_text"
                    placeholder="I have a problem with..."
                  />
                </div>
              </div>
              {/* submit */}
              <Button
                type="Submit"
                className="px-8 py-6 text-base font-semibold text-white transition-all duration-300 xl:text-lg xl:py-6 xl:px-10 bg-martex-light_blue hover:bg-martex-dark_blue"
              >
                Submit Request
              </Button>
            </form>
            {/* privacy text */}
            <div>
              <p className="mt-10 text-sm/6 xl:text-base/7 text-martex-light_text">
                We are committed to your privacy. Martex uses the information
                you provide us to contact you about our relevant content,
                products, and services. You may unsubscribe from these
                communications at any time. For more information, check out our{" "}
                <Link
                  to="/privacy"
                  className="font-semibold underline cursor-pointer"
                >
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>
        </section>
        <NewsLetter />
        <Footer logo={logoblue} />
      </section>
    </main>
  );
};

export default Contact;
