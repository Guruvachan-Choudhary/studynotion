import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timeLineImage from "../../../assets/Images/TimelineImage.png"
const timeline = [
  {
    logo: logo1,
    heading: "Leadership",
    description: "Fully Commited to the succes Company",
  },
  {
    logo: logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-15 items-center">
        <div className="flex flex-col w-[45%] gap-5">
          {timeline.map((element, index) => {
            return (
              <div className=" flex flex-row gap-6 mb-8" key={index}>
                <div className="w-[50px] h-[50px] bg-white flex items-center ">
                  <img src={element.logo} alt="img" />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">
                    {element.heading}
                  </h2>
                  <p className="text-base">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative shadow-blue-200">
          <div className={`timelineShadow`}></div>
          <img src={timeLineImage} alt="timelineimg" className=" shadow-white h-fit absolute lg:bottom-[10%] left-[30%] top-[5%]"/>
           <div className="relative bg-caribbeangreen-700 flex flex-row text-white uppercase py-7  mt-[30%] left-[80%]  translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-100 px-7">
            <p className="text-3xl  font-bold">10</p>
            <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
          </div>
          <div className="flex gap-5 items-center px-7">
          <p className="text-3xl  font-bold">250</p>
            <p className="text-caribbeangreen-300 text-sm">Type of Courses</p>
          </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default TimelineSection;
