import { NextPage } from 'next';


const Test:NextPage = () => {
  return (
    <div className='flex flex-col space-y-2 p-5'>
        <p className='first-letter:text-2xl first-letter:hover:text-purple-400 first-line:text-red-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati quos quia, quae voluptate porro et voluptates debitis fuga nulla, dolore perspiciatis tempore ratione eius deserunt blanditiis. Repellat, dolores odit.</p>
    </div>
  )
}

export default Test;