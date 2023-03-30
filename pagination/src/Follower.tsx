import React from 'react'

export interface FollowerProp {
  id: number;
  avatar_url: string;
  html_url: string;
  key: number;
  login: any;
  editItem(id:number):void;
}

const Follower = ({ avatar_url, html_url, login }:FollowerProp) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>${login}</h4>
      <a href={html_url} className='btn'>
        view profile
      </a>
    </article>
  )
}

export default Follower
