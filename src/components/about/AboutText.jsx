import React from "react";
import { Link } from "react-scroll";

const AboutText = () => {
  return (
    <div className="flex flex-col items-start text-left max-w-4xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 lg:mb-10">
        About KojunCoffee
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        kojun
        coffeeは2025年5月11日に糸島市前原中央にオープンしました。糸島で採れた食材をたっぷり使った、お豆隊長のあたたかい手作り料理を提供しています。事前予約の場合は、お客さまご希望のお料理を提供することも可能です。また、毎週火曜日には占いを実施しています。お悩み、ご相談などがあれば、ぜひお話しをしに来てみてください。また、コーヒーの販売も行っております。お豆隊長がじっくりと焙煎したお豆をお楽しみください。みなさま、ぜひ、kojun
        coffeeで、あたたかいお料理やコーヒとともに、のんびり癒しの時間をお過ごしください。
      </p>
      <Link
        to="menu"
        smooth={true}
        duration={500}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-8 text-lg font-medium transition-all duration-300 cursor-pointer self-start shadow-md hover:shadow-lg"
      >
        Menu
      </Link>
    </div>
  );
};

export default AboutText;
