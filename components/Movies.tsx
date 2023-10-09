'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCard from './MovieCard';

export interface Movie{
  id:number,
  title:string,
  overview:string,
  poster_path:string,
  release_date:string
}

const Movies = () => {
  const {data,isLoading,isError}=useQuery({
    queryKey:['Moviedata'],
    queryFn:async()=>{
      const {data}=await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e986286c014c7d9e242de935bc965be5');
      // console.log(data.results);
      return data.results as Movie[];

    }
  })
  const numberOfShimmers = 12;
  if(isLoading) {

    return(
         <div className='text-center m-auto'>Loading</div>
    )
  }
  if(isError)return <div>Error occured due to api limit </div>
  return (
    <div className=' grid grid-cols-4 gap-4'>
     {
      data.map((movie)=>(
          <MovieCard   {...movie}/>
        
      ))
     }
     

    </div>
  )
}

export default Movies