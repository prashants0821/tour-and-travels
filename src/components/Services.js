import Service from "./Service";
import Title from "./Title";
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <div className="section-title">
          <Title title="our" subTitle="services" />
        </div>
        <Service />
      </section>
    </>
  );
};
export default Services;
