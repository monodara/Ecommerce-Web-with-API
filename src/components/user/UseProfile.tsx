import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { AppState } from "../../redux/store";

export default function UserProfile() {
  const user = useSelector((state: AppState) => state.users.user);

  if (!user) {
    return <div> no user</div>;
  }

  return (
    <div>
      <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center mx-10">
            <img
              className="h-auto w-48 rounded-full border-4 border-white mx-auto my-4"
              src={user.avatar}
              alt="user's avatar"
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800  mb-1">
                {user.name}
              </h3>
              <div className="inline-flex text-gray-700 0 items-center">
                {user.email}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 flex flex-col justify-left items-left ml-16">
          <div className="flex gap-2 items-center text-gray-800  mb-4">
            <ShoppingCartIcon />
            <span>
              <Link to={"/cart"}>My Cart</Link>
            </span>
          </div>
          <div className="flex gap-2 items-center text-gray-800  mb-2">
            <FavoriteIcon />
            <span>
              <Link to={"/wishlist"}>My Wishlist</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
