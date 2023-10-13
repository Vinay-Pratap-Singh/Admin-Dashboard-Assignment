import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import Sidebar from "./components/Sidebar";

ChartJS.register(...registerables);

const App = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Earning",
        data: [65, 59, 80, 81, 56, 55, 40, 20, 67, 92, 36, 48],
        backgroundColor: ["#f2efff"],
        borderColor: ["#f2efff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      {/* sidebar */}
      <Sidebar />

      {/* for right section */}
      <main className="p-10 ml-60 bg-[#f5f6f8] space-y-10">
        {/* for header */}
        <header className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Hello Vinay Pratap 👋</h3>
          {/* search bar */}
          <div className="flex items-center gap-2 p-2 bg-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="text-sm bg-transparent outline-none"
            />
          </div>
        </header>

        {/* for overview cards */}
        <div className="flex flex-wrap items-center justify-start gap-6">
          {/* earning card */}
          <div className="flex items-center gap-3 px-2 py-5 bg-white rounded-md shadow-sm w-60">
            <div className="flex items-center justify-center p-5 bg-green-100 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400">Earning</p>
              <h4 className="text-xl font-bold">$198k</h4>
              <p className="flex items-center gap-1 text-xs font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                  />
                </svg>
                <span className="font-bold text-green-600">37.8%</span>
                this month
              </p>
            </div>{" "}
          </div>

          {/* orders card */}
          <div className="flex items-center gap-3 px-2 py-5 bg-white rounded-md shadow-sm w-60">
            <div className="flex items-center justify-center p-5 bg-purple-100 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-purple-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400">Orders</p>
              <h4 className="text-xl font-bold">$2.4k</h4>
              <p className="flex items-center gap-1 text-xs font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-3 h-3 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                <span className="font-bold text-red-600">2%</span>
                this month
              </p>
            </div>{" "}
          </div>

          {/* balance card */}
          <div className="flex items-center gap-3 px-2 py-5 bg-white rounded-md shadow-sm w-60">
            <div className="flex items-center justify-center p-5 rounded-full bg-sky-100 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-sky-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400">Balance</p>
              <h4 className="text-xl font-bold">$2.4k</h4>
              <p className="flex items-center gap-1 text-xs font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-3 h-3 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
                <span className="font-bold text-red-600">2%</span>
                this month
              </p>
            </div>{" "}
          </div>

          {/* sales card */}
          <div className="flex items-center gap-3 px-2 py-5 bg-white rounded-md shadow-sm w-60">
            <div className="flex items-center justify-center p-5 bg-red-100 rounded-full w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400">Total sales</p>
              <h4 className="text-xl font-bold">$89k</h4>
              <p className="flex items-center gap-1 text-xs font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-3 h-3 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                  />
                </svg>
                <span className="font-bold text-green-600">11%</span>
                this week
              </p>
            </div>{" "}
          </div>
        </div>

        {/* for overview bar and doughnut chart */}
        <div className="flex items-center justify-between ">
          {/* monthly overview */}
          <div className="flex flex-col w-[60%] gap-5 p-5 bg-white rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Overview</h2>
                <p className="text-xs font-medium text-gray-400">
                  Monthly Earning
                </p>
              </div>

              <select className="p-1 text-xs font-medium text-gray-400 bg-gray-100 rounded-md">
                <option>Montly</option>
                <option>Quaterly</option>
                <option>Half Yearly</option>
                <option>Yearly</option>
              </select>
            </div>
            <div className="h-60">
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
