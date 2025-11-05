import { assets } from "../assets/assets";

const Testimonial = () => {
  const dummyTestimonialData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "John Doe",
      title: "Marketing Director, TechCorp",
      content:
        "ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Jane Smith",
      title: "Content Creator, TechCorp",
      content:
        "ContentAI has made our content creation process effortless. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
      name: "David Lee",
      title: "Content Writer, TechCorp",
      content:
        "ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.",
      rating: 4,
    },
  ];

  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-white text-[42px] font-semibold drop-shadow-md">
          Loved by Creators
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Don't just take our word for it — here’s what our users are saying.
        </p>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center">
        {dummyTestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-2xl bg-gray-900/70 border border-gray-700 hover:border-indigo-500 hover:shadow-indigo-500/30 shadow-lg backdrop-blur-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            {/* Rating */}
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src={
                      i < testimonial.rating
                        ? assets.star_icon
                        : assets.star_dull_icon
                    }
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>

            {/* Content */}
            <p className="text-gray-300 text-sm my-5 italic">
              “{testimonial.content}”
            </p>

            <hr className="mb-5 border-gray-700" />

            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                className="w-12 h-12 object-cover rounded-full ring-2 ring-indigo-500/40"
                alt={testimonial.name}
              />
              <div className="text-sm">
                <h3 className="font-medium text-white">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
