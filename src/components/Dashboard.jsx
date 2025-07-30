import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, UserPlus, Percent, DollarSign } from "lucide-react";

const dataLine = [
  { name: "01", uv: 9, pv: 7 },
  { name: "02", uv: 8, pv: 6 },
  { name: "03", uv: 13, pv: 11 },
  { name: "04", uv: 9, pv: 8 },
  { name: "05", uv: 11, pv: 10 },
  { name: "06", uv: 15, pv: 13 },
  { name: "07", uv: 14, pv: 11 },
];

const dataBar = [
  { name: "Jan", uv: 100 },
  { name: "Feb", uv: 140 },
  { name: "Mar", uv: 130 },
  { name: "Apr", uv: 150 },
  { name: "May", uv: 120 },
  { name: "Jun", uv: 80 },
];

const dataPie = [
  { name: "Group A", value: 157 },
  { name: "Group B", value: 150 },
  { name: "Group C", value: 129 },
  { name: "Group D", value: 119 },
  { name: "Group E", value: 111 },
  { name: "Group F", value: 72 },
];

const COLORS = [
  "#3b82f6",
  "#60a5fa",
  "#93c5fd",
  "#2563eb",
  "#1d4ed8",
  "#1e3a8a",
];

export default function Dashboard() {
  return (
    <>
      <div className="">
        <div class="absolute inset-x-0 bottom-0 h-100 w-full bg-gradient-to-b from-transparent via-white to-white "></div>

        <div className="">
          <div className="flex flex-row justify-between items-center pb-4 px-6 border-b-2 border-slate-200/50">
            <span className="text-lg font-bold">Dashboard</span>
            <div className="flex flex-row gap-4">
              <input
                type="text"
                placeholder="search"
                className=" border-2 border-gray-200/70 px-2 rounded-2xl bg-white"
              />
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="space-y-6 flex  flex-col bg-white p-4">
            {/* Stats cards */}
            <div className="grid grid-cols-4 gap-4 ">
              <StatCard
                title="Total Users"
                para="The total number of registered users."
                value="12,345"
                icon={<Users className="w-5 h-5 text-gray-500" />}
              />
              <StatCard
                title="New Signups"
                para="The number of new users that signed up this month."
                value="1,234"
                icon={<UserPlus className="w-5 h-5 text-gray-500" />}
              />
              <StatCard
                title="Conversion Rate"
                para="The percentage of vision that become customers."
                value="12%"
                icon={<Percent className="w-5 h-5 text-gray-500" />}
              />
              <StatCard
                title="Revenue"
                value="$123,456"
                para="The total revenue generated this month."
                icon={<DollarSign className="w-5 h-5 text-gray-500" />}
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Sales Trends</h3>
                <LineChart width={200} height={150} data={dataLine}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
                  <Line type="monotone" dataKey="pv" stroke="#ef4444" />
                </LineChart>
              </div>

              <div className="col-span-1 bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">User Acquisition</h3>
                <BarChart width={300} height={150} data={dataBar}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#3b82f6" />
                </BarChart>
              </div>

              <div className="col-span-1 bg-white p-4 rounded shadow">
                <h3 className="font-semibold mb-2">Top Products</h3>
                <PieChart width={250} height={150}>
                  <Pie
                    data={dataPie}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    label
                  >
                    {dataPie.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({ title, para, value, icon }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-4  items-start">
      <div className="flex flex-col text-start">
        <span className="text-black text-lg font-bold">{title}</span>
        <p className="text-gray-600 text-xs">{para}</p>
      </div>

      <div className="flex flex-row items-center justify-between  w-full">
        <span className="text-xl font-bold">{value}</span>
        <span>{icon}</span>
      </div>
    </div>
  );
}
