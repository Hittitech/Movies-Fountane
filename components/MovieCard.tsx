import React from 'react';
import Image from 'next/image';
import type { Movie } from './Movies';

interface MovieCardProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  overview,
  poster_path,
  release_date,
}: MovieCardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="m-auto p-2"
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        width={300}
        height={250}
        alt="Movie Image"
      />
      <div className="p-3">
        <h5 className="mb-2 px-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 px-2 font-normal text-gray-700 dark:text-gray-400">
          {`${overview.split(' ').slice(0, 10).join(' ')}+...`}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
