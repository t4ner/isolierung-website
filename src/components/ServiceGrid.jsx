import React from "react";

const ServiceGrid = () => {
  const services = [
    {
      id: 1,
      title: "WÄRMESCHUTZ",
      image: "/services/warme.jpeg",
      sectionId: "warme",
    },
    {
      id: 2,
      title: "KÄLTESCHUTZ",
      image: "/services/kalte.jpeg",
      sectionId: "kalte",
    },
    {
      id: 3,
      title: "SCHALLSCHUTZ",
      image: "/services/schall.jpeg",
      sectionId: "schall",
    },
    {
      id: 4,
      title: "BRANDSCHUTZ",
      image: "/services/brand.jpeg",
      sectionId: "brand",
    },
  ];

  const handleServiceClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 175;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white -mt-28">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative aspect-square transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleServiceClick(service.sectionId)}
            >
              <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20">
                  <h3 className="text-2xl mt-2 font-semibold text-white uppercase tracking-wider px-4 text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
