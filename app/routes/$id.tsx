import { LoaderFunctionArgs } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import { getGames } from "~/lib/api";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export async function loader({ params }: LoaderFunctionArgs) {
  //This will return all of the data of a single game
  const gameId = params.id;
  const query = `fields name, summary, genres.name, release_dates.human, platforms.name, cover.image_id; where id= ${gameId};`;
  const data = await getGames(query);

  return json(data);
}

export default function GameDetail() {
  const data = useLoaderData();
  const [game] = data;
  const releaseDate = game.release_dates[0].human;

  return (
    <>
      <nav className="flex mx-4 px-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to=".."
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {game.name}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="relative overflow-hidden bg-gray-100 dark:bg-slate-900 px-6 py-20 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {game.name}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300">
                  {game.summary}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-blue-500">
                  This game is available in the following platforms:
                </p>
                <ul className="text-base text-gray-700 dark:text-gray-300">
                  {game.platforms.map((i: any) => (
                    <li key={i.id}>{i.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-blue-500">
                  Release Date:{" "}
                </p>
                <span className="text-base text-gray-900 dark:text-gray-300">
                  {releaseDate}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-base font-semibold leading-7 text-indigo-600 dark:text-blue-500">
                  Genres
                </p>
                <ul className="text-base text-gray-700 dark:text-gray-300">
                  {game.genres.map((i: any) => (
                    <li key={i.id}>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="-mt-12 p-6 lg:p-16 lg:-ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              src={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover?.image_id}.webp`}
              alt={game.name}
              className="w-full max-w-[850px] h-auto max-h-[850px] rounded-xl shadow-xl sm:w-[57rem]"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              {/* <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
