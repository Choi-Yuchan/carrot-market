import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        
          <label className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md mb-3 texxt-gray-600 hover:text-orange-500 hover:border-orange-500">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm text-gray-700 font-medium">Price</label>
        <div className="flex relative rounded-md shadow-sm">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <span className="text-gray-500 text-sm pointer-events-none">$</span>
          </div>
          <input type="text" placeholder="0.00" className="appearance-none w-full pl-7 pr-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline focus:ring-orange-500 focus:border-orange-500" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <span className="text-gray-500 text-sm">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-700 font-medium">Description</label>
        <div>
          <textarea rows={4} className="mt-1 shadow-sm w-full focus:ring-1 focus:ring-orange-500 focus:border-orange-500 rounded-md border-gray-300" />
        </div>
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none mt-2">Upload product</button>
    </div>
  );
};

export default Upload;