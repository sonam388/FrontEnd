import CountUp from "react-countup";
const StatsSection = () => {
  return (
    <section className="py-24 bg-[#1B5E20] text-white">

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-10 text-center">

        <div>
          <CountUp end={3000} duration={5} />+
          <p className="mt-3 text-lg">
            गौ माता
          </p>
        </div>

        <div>
         <CountUp end={100} duration={5} />+
          <p className="mt-3 text-lg">
            स्वयंसेवक
          </p>
        </div>

        <div>
          <CountUp  end={24} duration={5} />/<CountUp end={7} duration={5} />
          <p className="mt-3 text-lg">
            सेवा
          </p>
        </div>

        <div>
          <CountUp end={28} duration={5} />
          <p className="mt-3 text-lg">
            वर्षों का अनुभव
          </p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;