import { NextPage } from 'next';


const form:NextPage = () => {
  return (
    <form className='flex flex-col space-y-2 p-5'>
        <input type="text" required placeholder='Username' className='peer required:bg-yellow-100 invalid:border-red-600' />
        <span className='hidden peer-invalid:text-red-500 peer-invalid:block'>This input is invalid</span>
        <span className='hidden peer-valid:text-teal-500 peer-valid:block'>Awesome username</span>
        <span className='hidden peer-hover:text-amber-500 peer-hover:block'>Hello</span>
        <input type="submit" value="Login" className='bg-white' />
    </form>
  )
}

export default form