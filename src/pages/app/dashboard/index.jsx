import TableRow from "@/components/Table/TableRow";
import RelayChart from "@/components/charts/RelayChart";
import TokensChart from "@/components/charts/TokensChart";
import AppLayout from "@/layouts/AppLayout";
import {
  CheckIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Dashboard() {
  return (
    <AppLayout>
      <section className="bg-gradient-to-r from-indigo-500/80 from-10% via-secondary via-50% to-purple-900 to-90% h-44">
        <div className="pl-8 pr-8 py-5 flex justify-between">
          <div className="basis-2/5 ">
            <h1 className="text-3xl text-white font-semibold mb-3">
              Welcome Back, 👋Jack
            </h1>
            <p className="text-zinc-300 mb-4">
              Explore Orbo&apos;s monitors today{" "}
            </p>
            <div className="relative">
              <input
                className="w-full bg-white/20 px-4 pl-10 py-2.5 rounded-lg focus:outline-none border-0 text-zinc-200 placeholder:text-zinc-200 text-sm"
                type="search"
                name="Search"
                id="search"
                placeholder="Search monitors"
              />
              <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-200 w-5 h-5" />
            </div>
          </div>

          <div className="text-end">
            <div className="inline-flex bg-dark rounded-full p-2">
              <div className="inline-block">
                <input
                  type="radio"
                  name="duration"
                  id="oneDay"
                  value={"1-day"}
                  defaultChecked
                  className="peer hidden"
                />
                <label
                  htmlFor="oneDay"
                  className="text-zinc-200 text-sm rounded-full peer-checked:bg-secondary px-4 py-1"
                >
                  1D
                </label>
              </div>
              <div className="inline-block">
                <input
                  type="radio"
                  name="duration"
                  id="oneWeek"
                  value={"1-week"}
                  className="peer hidden"
                />
                <label
                  htmlFor="oneWeek"
                  className="text-zinc-200 text-sm rounded-full peer-checked:bg-secondary px-4 py-1"
                >
                  1W
                </label>
              </div>
              <div className="inline-block">
                <input
                  type="radio"
                  name="duration"
                  id="oneMonth"
                  value={"1-month"}
                  className="peer hidden"
                />
                <label
                  htmlFor="oneMonth"
                  className="text-zinc-200 text-sm rounded-full peer-checked:bg-secondary px-4 py-1"
                >
                  1M
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pl-8 pr-8 flex justify-end -translate-y-2/4 pointer-events-none">
          <div className="flex gap-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-4 pb-0 w-60">
              <div className="pointer-events-auto">
                <h6 className="text-sm text-gray-200">Amount of Tokens</h6>
                <div className="flex mt-2">
                  <h2 className="text-gray-100 text-2xl font-medium">1.2k</h2>
                  <span className="text-sky-300 font-semibold">
                    <span className="inline-flex text-sm ml-2">
                      <span>
                        <ChevronUpIcon className="w-4 h-5 stroke-2 mr-1" />
                      </span>
                      <span>2.2%</span>
                    </span>
                  </span>
                </div>
                <TokensChart />
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur   p-4 w-60">
              <div className="pointer-events-auto">
                <h6 className="text-sm text-gray-200">Relay Speed</h6>
                <div className="flex mt-2">
                  <h2 className="text-gray-100 text-2xl font-medium">
                    0.9 Sec
                  </h2>
                  <span className="text-sky-300 font-semibold">
                    <span className="inline-flex text-sm ml-2">
                      <span>
                        <ChevronUpIcon className="w-4 h-5 stroke-2 mr-1" />
                      </span>
                      <span>2.2%</span>
                    </span>
                  </span>
                </div>
                <RelayChart />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 -mt-20">
        <div className="pl-8 pr-8">
          <div>
            <div className="flex items-center">
              <h4 className="text-zinc-100 font-semibold text-xl">
                Pump-Fun Monitors
              </h4>
              <span className=" ml-2 mt-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-800/70">
                <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
              </span>
            </div>
            <h6 className="text-zinc-500 text-sm">Newest</h6>
          </div>

          <div className="basis-full flex my-4 gap-4">
            <div className="flex-1">
              <table className="relative w-full">
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody className="space-y-2">
                  {Array.from({ length: 20 }, (_, i) => (
                    <TableRow key={i} />
                  ))}
                </tbody>
                <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-t from-gray-950 from-10% pointer-events-none"></div>
              </table>
            </div>
            <div className="basis-72">
              <div className=" rounded-lg bg-[#130C21] p-6">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/icons/filter.png"}
                    alt="Filter Icon"
                    width={17}
                    height={17}
                    className="w-6 h-6"
                  />
                  <h4 className="text-zinc-100 font-semibold">Filters</h4>
                </div>

                <div className="py-3 border-b border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Bonding Curve</h6>
                  <div className="py-3">
                    <input
                      type="range"
                      name="slider"
                      id="slider"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="py-3 border-b border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Contains Metadata</h6>
                  <div className="py-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="checkbox"
                          name="metadata"
                          id="twitter"
                          className="hidden"
                        />

                        <label htmlFor="twitter" className="block">
                          <div className="flex items-center gap-2">
                            <span className="custom-checkbox relative inline-block w-5 h-5 rounded bg-white/10">
                              <CheckIcon className="check-icon text-white w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden" />
                            </span>
                            <span className="text-sm text-zinc-500">
                              Twitter
                            </span>
                          </div>
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="metadata"
                          id="website"
                          value="website"
                          className="hidden"
                        />

                        <label htmlFor="website" className="block">
                          <div className="flex items-center gap-2">
                            <span className="custom-checkbox relative inline-block w-5 h-5 rounded bg-white/10">
                              <CheckIcon className="check-icon text-white w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden" />
                            </span>
                            <span className="text-sm text-zinc-500">
                              Website
                            </span>
                          </div>
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="metadata"
                          id="telegram"
                          value="telegram"
                          className="hidden"
                        />

                        <label htmlFor="telegram" className="block">
                          <div className="flex items-center gap-2">
                            <span className="custom-checkbox relative inline-block w-5 h-5 rounded bg-white/10">
                              <CheckIcon className="check-icon text-white w-4 h-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden" />
                            </span>
                            <span className="text-sm text-zinc-500">
                              Telegram
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-3 border-b border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Dev Buy Amount</h6>
                  <div className="py-3">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      placeholder="Dev Buy Amount"
                      className="w-full bg-white/10 px-4  py-2.5 rounded-lg focus:outline-none border-0 text-zinc-200 placeholder:text-zinc-500 text-sm"
                    />
                  </div>
                </div>

                <div className="py-3 border-b border-b-zinc-700">
                  <h6 className="text-sm text-zinc-500">Created Time</h6>
                  <div className="py-3">
                    <input
                      type="text"
                      name="start-time"
                      id="startTime"
                      placeholder="Start Time"
                      className="w-full bg-white/10 px-4  py-2.5 rounded-lg focus:outline-none border-0 text-zinc-200 placeholder:text-zinc-500 text-sm"
                    />
                  </div>
                  <div className="pb-6">
                    <input
                      type="text"
                      name="end-time"
                      id="endTime"
                      placeholder="End Time"
                      className="w-full bg-white/10 px-4  py-2.5 rounded-lg focus:outline-none border-0 text-zinc-200 placeholder:text-zinc-500 text-sm"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-zinc-100 font-medium"
                  >
                    Save Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
