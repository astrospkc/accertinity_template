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
      <div>
        <div>
          <span>Dashboard</span>
          <input type="text" placeholder="search" />
          <div className="w-4 r-4 rounded-full bg-"></div>
        </div>
        <div className="space-y-6 flex  flex-col ">
          {/* Stats cards */}
          <div className="grid grid-cols-4 gap-4 ">
            <StatCard title="Total Users" value="12,345" icon={<Users />} />
            <StatCard title="New Signups" value="1,234" icon={<UserPlus />} />
            <StatCard title="Conversion Rate" value="12%" icon={<Percent />} />
            <StatCard title="Revenue" value="$123,456" icon={<DollarSign />} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Sales Trends</h3>
              <LineChart width={300} height={150} data={dataLine}>
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
    </>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-2">
      <span className="text-gray-500 text-sm">{title}</span>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{value}</span>
        {icon}
      </div>
    </div>
  );
}
