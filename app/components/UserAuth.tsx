import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserAuth: React.FC = () => {
  return (
    <div className="flex items-center text-white">
      <Link href="/login" legacyBehavior>
        <a className=" hover:bg-gray-600 flex items-center p-2 rounded">
          <FontAwesomeIcon icon={faUser} className="h-4 pr-2" />
          Login
        </a>
      </Link>
      <span>/</span>
      <Link href="/signup" legacyBehavior>
        <a className=" hover:bg-gray-600  p-2 rounded">Sign Up</a>
      </Link>
    </div>
  );
};

export default UserAuth;
