import { LoaderFunctionArgs } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { getGames } from "~/lib/api";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export async function loader({ params }: LoaderFunctionArgs) {
  //This will return all of the data of a single game
  const gameId = params.id;
  const query = `fields name, summary, genres, platforms.name, cover.image_id; where id= ${gameId};`;
  const data = await getGames(query);

  return json(data);
}

export default function GameDetail() {
  const data = useLoaderData();
  const [game] = data;
  console.log(game);
  console.log(typeof game.platforms);

  return (
    <div className="relative overflow-hidden bg-gray-100 dark:bg-slate-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.webp`}
            alt={game.name}
            className="w-full h-[950px] rounded-xl shadow-xl sm:w-[57rem]"
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
  );
}
