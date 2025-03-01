import React, { useEffect, useState } from "react";

export default function CardComponent({ Books }) {
  const [bookList, setBookList] = useState([]);

  const margeBooks = () => {
    setBookList([...Books]);
  };

  useEffect(() => {
    margeBooks();
  }, [Books]);
  return (
    <div className="grid grid-cols-3 gap-6 px-20">
      {bookList?.map((book, index) => (
        <div key={index} className=" bg-gray-200 rounded-lg shadow-lg">
          <p className="float-right bg-blue-500 p-2 rounded-l-lg text-white">
            {book?.publishedDate}
          </p>
          <div className="py-4 px-5 space-y-2 mt-6">
            {" "}
            <h1 className="text-4xl font-medium">{book?.bookTitle}</h1>
            <p className="text-lg"> Written by :{book?.authorName}</p>
            <p className="text-lg">Editon : {book?.edition}</p>
            <p className="text-lg">Quantity : {book?.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
