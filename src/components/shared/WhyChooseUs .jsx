const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "We provide high-grade tiles with long-lasting durability.",
  },
  {
    id: 2,
    title: "Affordable Pricing",
    description: "Best market price without compromising quality.",
  },
  {
    id: 3,
    title: "Fast Delivery",
    description: "Quick and safe delivery to your location.",
  },
  {
    id: 4,
    title: "Trusted Service",
    description: "Thousands of satisfied customers trust us.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-12 px-6 bg-gradient-to-r from-cyan-500 to-cyan-800 text-white mt-10">
      
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Us
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:scale-105 transition"
          >
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;