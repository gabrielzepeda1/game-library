export default function Testimonials() {
  return (
    <section className="py-16 text-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h3 className="mb-8 text-3xl font-bold">What Gamers Say</h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: "Alex",
              quote:
                "Game Finder helped me discover my new favorite indie game!",
              avatar:
                "https://unsplash.com/photos/man-in-black-button-up-shirt-ZHvM3XIOHoE",
            },
            {
              name: "Sarah",
              quote:
                "I love how easy it is to compare prices across different platforms.",
              avatar: "/placeholder.svg?height=64&width=64",
            },
            {
              name: "Mike",
              quote: "The personalized recommendations are spot-on!",
              avatar: "/placeholder.svg?height=64&width=64",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              // initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="p-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <p className="font-normal text-gray-700 dark:text-gray-400 mb-4 text-sm italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-gray-700 dark:text-gray-400font-semibold">
                    {testimonial.name}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
