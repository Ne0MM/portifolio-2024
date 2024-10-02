import React from 'react'

type Props = {
  title : string,
}

export default function HeaderNavOption({title}: Props) {
  return (
    <div>
      <h1 className="text-background my-3 mx-3 py-1 px-1 font-bold 
      tracking-wide text-lg font-mono hover:cursor-pointer">
        <span className="text-secondary">
          {title[0]}
        </span>
        <span>
          {title.substring(1)}
        </span>
      </h1>
    </div>
  )
}