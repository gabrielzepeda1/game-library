export default function Features() {
  return (
    <section className="py-8 pb-16 text-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h3 className="mb-8 text-3xl font-bold">Why use Game Finder?</h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: "Personalized Recommendations", icon: "🎯" },
            { title: "Extensive Game Library", icon: "📚" },
            {
              title: "User Reviews & Ratings",
              icon: (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              ),
            },
            { title: "Compare Prices", icon: "💰" },
            { title: "Track Your Favorites", icon: "❤️" },
            { title: "Stay Updated", icon: "🔔" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#1c2536] p-6 hover:bg-[#2a3649] transition-colors"
              // whileHover={{ scale: 1.05 }}
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="mb-2 text-xl font-semibold">{benefit.title}</h4>
              <p className="text-sm text-gray-400">
                Discover games tailored to your preferences and play style.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
