import React from "react";
import Loader from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
	<Loader type="Rings" color="#5C7AEA" height={80} width={80} />
    </div>
  );
};
