// import { React, useState } from 'react';
// import { Link } from 'react-router-dom';

// const RecipeList = ({ recipe }) => {
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   let description = recipe.description;

//   if (!showFullDescription) {
//     description = description.substring(0, 100) + '...';
//   }
//   return (
//     <div className="bg-cwhite rounded-xl shadow-md relative">
//       <div className="p-8">
//         <div className="mb-6">
//           <h3 className="text-xl font-bold">{recipe.name}</h3>
//         </div>
//         <div className="border border-lightrose mb-5"></div>

//         <div className="mb-5">{description}</div>

//         <button
//           onClick={() => setShowFullDescription((prevState) => !prevState)}
//           className="text-brown mb-5 hover:text-darkerrose"
//         >
//           {showFullDescription ? 'Less' : 'More'}
//         </button>

//         <h3 className="text-brown mb-2 my-5">Estimated Time Prepared: {recipe.timeprepared}</h3>

//         <div className="flex flex-col lg:flex-row justify-between mb-2 mt-8">
//           <Link
//             to={`/recipes/${recipe.id}`}
//             className="ml-auto h-[36px] bg-lightrose hover:bg-darkerrose text-white px-4 py-2 rounded-lg text-center text-sm"
//           >
//             Show More
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecipeList;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipe }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = recipe.description;

  if (!showFullDescription) {
    description = description.substring(0, 100) + '...';
  }

  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="block bg-cwhite rounded-xl shadow-md hover:shadow-lg transition-shadow relative no-underline"
    >
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-xl text-brown font-bold">{recipe.name}</h3>
        </div>
        <div className="border border-lightrose mb-5"></div>

        <div className="mb-3">{description}</div>

        <button
          onClick={(e) => {
            e.preventDefault(); // Prevents navigation on button click
            setShowFullDescription((prevState) => !prevState);
          }}
          className="text-brown mb-5 hover:text-darkerrose"
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>

        <h3 className="text-brown mb-2 my-5">Estimated Time Prepared: {recipe.timeprepared}</h3>
      </div>
    </Link>
  );
};

export default RecipeList;
