import SearchForm from "./SearchForm";

export default function Hero({ searchTerm }: { searchTerm?: string }) {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Explore Thousands of Games at Your Fingertips
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Whether you're into action, adventure, RPGs, or indie gems, our game
          searcher helps you discover the best games quickly and easily.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <SearchForm searchTerm={searchTerm} />
        </div>
      </div>
    </section>
  );
}
