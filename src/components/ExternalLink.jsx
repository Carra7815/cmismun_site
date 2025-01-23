import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "react-aria-components";

function ExternalLink({ text, href }) {
  return (
    <Button
      className="m-3 py-2 px-3 rounded bg-blue-700 text-gray-100 hover:bg-blue-600 flex items-center"
      onPress={() => {
        window.open(href, "_blank");
      }}
    >
      {text}
      <ArrowTopRightOnSquareIcon className="ml-2 inline-block h-5 w-5" />
    </Button>
  );
}

export default ExternalLink;
