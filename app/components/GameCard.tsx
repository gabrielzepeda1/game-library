import { Link } from "@remix-run/react";

export default function GameCard({ game }: { game: any }) {
  return (
    <div className="max-w-md h-[700px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105">
      <a href="#">
        <img
          className="w-full h-[400px] rounded-t-lg"
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.webp`}
          alt={game.name}
        />
      </a>
      <div className="h-[280px] p-5">
        <a href="#">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate hover:text-wrap">
            {game.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[125px] text-clip overflow-hidden">
          {game.summary}
        </p>
        <Link
          to={`/app/${game.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
