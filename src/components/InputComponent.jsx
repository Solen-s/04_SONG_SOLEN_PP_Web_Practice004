import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function InputComponent() {
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([]);

  // handle input change
  const handleInputChange = (e) => {
    //Destructing assignment
    const { name, value } = e.target;
    console.log("helo" + e.target.name);

    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log(book);
    console.log(books);
  });

  //   handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    console.log(books);

    setBooks((prev) => [...prev, { ...book }]);
    console.log(book);
  };
  return (
    <div className="container mx-auto my-6 space-y-6">
      {/* header */}
      <h1 className="text-3xl font-semibold text-center">React Project Demo</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-row-2">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="bookTitle"
                className="block mb-2 text-lg font-medium text-gray-900 ">
                Book Title
              </label>
              <input
                type="text"
                name="bookTitle"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="authorName"
                className="block mb-2 text-lg font-medium text-gray-900 ">
                Author Name
              </label>
              <input
                type="type"
                name="authorName"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jonh smith"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {" "}
            {/* Date */}
            <div>
              <label
                htmlFor="publishedDate"
                className="block mb-2 text-lg font-medium text-gray-900 ">
                Published Date
              </label>
              <div class="relative max-w-sm">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker
                  id="default-datepicker"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="-col-span-2">
              <label
                htmlFor="edition"
                className="block mb-2 text-lg font-medium text-gray-900 ">
                Edition
              </label>
              <input
                type="number"
                name="edition"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1"
                required
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-lg font-medium text-gray-900 ">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
      <CardComponent Books={books} />
    </div>
  );
}
