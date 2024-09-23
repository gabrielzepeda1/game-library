import {
  HandThumbUpIcon,
  BookOpenIcon,
  StarIcon,
  CurrencyDollarIcon,
  HeartIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  return (
    <section className="pt-8 pb-16 text-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h3 className="mb-10 text-3xl font-bold">Why use Game Finder?</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Personalized Recommendations",
              icon: <HandThumbUpIcon className="size-10 mx-auto" />,
            },
            {
              title: "Extensive Game Library",
              icon: <BookOpenIcon className="size-10 mx-auto" />,
            },
            {
              title: "User Reviews & Ratings",
              icon: <StarIcon className="size-10 mx-auto" />,
            },
            {
              title: "Compare Prices",
              icon: <CurrencyDollarIcon className="size-10 mx-auto" />,
            },
            {
              title: "Track Your Favorites",
              icon: <HeartIcon className="size-10 mx-auto" />,
            },
            {
              title: "Stay Updated",
              icon: <BellAlertIcon className="size-10 mx-auto" />,
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="rounded-lg p-6 h-[168px] bg-[#1c2536] hover:bg-[#2a3649] transition-colors"
              // whileHover={{ scale: 1.05 }}
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="mb-2 text-xl font-semibold">{benefit.title}</h4>
              {/* <p className="text-sm text-gray-400">
                Discover games tailored to your preferences and play style.
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
