import { classNames } from "@/utils/generics";
import { ChevronLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function DesktopSidebar({ navigation }) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col text-zinc-200">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-zinc-700 bg-dark pb-4">
        <div className="flex justify-between items-center px-6 pr-2 ">
          <div className="flex h-16 shrink-0 items-center">
            <Image
              className="h-8 w-auto"
              width={100}
              height={100}
              src="/orbo-logo.svg"
              alt="Orbo Montiors"
            />
            <h1 className="font-bold ml-2 text-lg">Orbo</h1>
          </div>

          <button type="button" className="bg-zinc-800 p-2 rounded-full">
            <ChevronLeftIcon className="text-zinc-100 w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={`/app/${item.href}`}
                      className={classNames(
                        item.current
                          ? "bg-zinc-800 text-zinc-100"
                          : "text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800",
                        "group px-6  flex gap-x-3  py-2 text-sm leading-6 font-semibold"
                      )}
                    >
                      <Image
                        src={`/icons/${item.icon}.png`}
                        height={32}
                        width={32}
                        alt={item.icon}
                        className="w-5 h-5"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="mt-auto px-6 space-y-4">
              <div className="px-8 py-6 rounded-lg bg-gradient-to-br from-indigo-300 to-indigo-600 text-white">
                <h4 className="font-semibold mb-2 text-lg">Need Support</h4>
                <p className="text-sm text-medium">
                  Lorem ipsum dolor set amet consectetur Lorem ipsum dolor
                </p>
              </div>
              <button
                type="button"
                className="flex justify-center items-center p-2.5 rounded-lg bg-zinc-800 text-zinc-100 text-sm font-medium w-full gap-3"
              >
                <Image
                  width={64}
                  height={64}
                  src={"/icons/discord-logo.svg"}
                  alt="Discord Logo"
                  className="w-6 h-6"
                />
                Join Discord
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
