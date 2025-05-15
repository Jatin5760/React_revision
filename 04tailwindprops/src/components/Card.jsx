import React from "react";

function Card({ username, btnText = "Meet Me", src }) {
  //console.log('props', props);
  //console.log(username);

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <img className="w-full h-48 object-cover" src={src} alt="Card Image" />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
          <p className="text-gray-600 mt-2">
            A beautifull place to hangout with your family
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
