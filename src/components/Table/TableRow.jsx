import Image from "next/image";
import React from "react";

export default function TableRow() {
  return (
    <tr className="text-xs flex gap-4 basis-full justify-between p-2 rounded-xl border border-gray-700 odd:bg-gray-900 odd:border-none">
      <td className="flex gap-2 items-center">
        <span className="w-5 h-5 bg-secondary rounded-full inline-block"></span>
        <span className="text-white ">Ahmad</span>
      </td>
      <td className="flex gap-2 items-center">
        <span className="w-5 h-5 inline-block">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/copy.png"}
            alt="Files icon"
          />
        </span>
        <span className="text-gray-400 whitespace-nowrap">Token Address</span>
      </td>
      <td className="flex gap-2 items-center">
        <span className="text-gray-500 whitespace-nowrap">Dev Buy</span>
        <span className="text-indigo-500 whitespace-nowrap">1 SOL</span>
      </td>
      <td className="flex gap-2 items-center">
        <span className="text-gray-500 whitespace-nowrap">MCap</span>
        <span className="text-indigo-500 whitespace-nowrap">$1,432,111</span>
      </td>
      <td className="flex gap-2 items-center">
        <span className="text-gray-500 whitespace-nowrap">Bounding Curve</span>
        <span className="text-indigo-500 whitespace-nowrap">75%</span>
      </td>
      <td className="flex gap-1 items-center">
        <button className="w-4 h-4">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/bull.png"}
            alt="icon"
          />
        </button>
        <button className="w-4 h-4">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/search.png"}
            alt="icon"
          />
        </button>
        <button className="w-4 h-4">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/pill.png"}
            alt="icon"
          />
        </button>
        <button className="w-4 h-4">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/flower.png"}
            alt="icon"
          />
        </button>
        <button className="w-4 h-4">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/globe.png"}
            alt="icon"
          />
        </button>
        <button className="w-4 h-4">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/telegram.png"}
            alt="icon"
          />
        </button>
        <button className="w-4 h-4">
          <Image
            width={32}
            height={32}
            className="w-4 h-4"
            src={"/icons/table-icons/twitter.png"}
            alt="icon"
          />
        </button>
      </td>
      <td className="flex gap-2 items-center">
        <span className="text-gray-500 whitespace-nowrap">2 Sec Ago</span>
      </td>
    </tr>
  );
}
