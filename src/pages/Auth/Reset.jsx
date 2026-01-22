import React from "react";
import logoblue from "../../assets/images/logo-blue.png";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <section
      className="pt-[70px] sm:pt-[80px] bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url("https://martex-tailwindcss.ibthemespro.com/images/reset-password.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="flex items-center justify-center mx-auto text-center">
        <div className="px-3">
          {/* logo */}
          <div className="h-9 sm:h-10 xl:h-11 sm:mb-[40px] mb-[38px] flex items-center justify-center">
            <img src={logoblue} alt="martex" className="h-full" />
          </div>
          {/* reset form */}
          <div className="shadow-lg bg-white rounded-[10px] xl:max-w-full sm:max-w-sm">
            <form className="pt-[35px] sm:pt-[40px] xl:pt-[50px] pb-[10px] sm:pb-[15px] xl:pb-[25px] px-[10px] sm:px-[25px] xl:px-[30px] space-y-6">
              {/* text */}
              <div className="px-4 space-y-4 xl:px-0 sm:px-0">
                <h2 className="text-[22px] font-semibold sm:text-2xl xl:text-3xl text-martex-dark_text">
                  Forgot your password?
                </h2>
                <h3 className="sm:text-base xl:text-[17px]/7 text-martex-light_text xl:max-w-sm">
                  Enter your email address, if an account exists we‘ll send you
                  a link to reset your password.
                </h3>
              </div>
              {/* input field */}
              <div className="px-2 space-y-4 ">
                <Input
                  type="email"
                  className="rounded-[8px] bg-[#f5f6f8] border-none xl:!py-2 !text-base xl:!text-lg text-center xl:h-[60px] lg:h-[54px] md:h-[50px] text-martex-dark_text"
                  placeholder="example@example.com"
                />
                <Button className="rounded-[8px] w-full text-base xl:px-5 font-semibold xl:text-lg !text-white transition-all duration-300 py-6 bg-martex-light_blue hover:bg-martex-dark_blue hover:text-martex-dark_blue">
                  Reset My Password
                </Button>
              </div>
              <div>
                <Link to="/login">
                  <span className="text-base font-semibold underline transition-all duration-300 hover:text-martex-dark_text text-martex-light_text">
                    Never mind, I remembered!
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reset;
