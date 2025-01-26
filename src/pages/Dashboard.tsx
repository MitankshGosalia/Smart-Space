import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Battery, Truck, Wind, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const energyData = [
  { name: 'Mon', consumption: 4000 },
  { name: 'Tue', consumption: 3000 },
  { name: 'Wed', consumption: 2000 },
  { name: 'Thu', consumption: 2780 },
  { name: 'Fri', consumption: 1890 },
  { name: 'Sat', consumption: 2390 },
  { name: 'Sun', consumption: 3490 },
];

const wasteData = [
  { name: 'Organic', value: 400 },
  { name: 'Plastic', value: 300 },
  { name: 'Paper', value: 300 },
  { name: 'Metal', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const alerts = [
  {
    type: 'warning',
    message: 'High energy consumption detected in Sector A',
    time: '2 hours ago',
  },
  {
    type: 'success',
    message: 'Waste collection completed in all sectors',
    time: '4 hours ago',
  },
  {
    type: 'warning',
    message: 'Traffic congestion reported on Main Street',
    time: '5 hours ago',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor and analyze your city's performance</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Battery, label: 'Energy Usage', value: '892 kWh', color: 'blue' },
          { icon: Truck, label: 'Waste Collected', value: '4.2 tons', color: 'green' },
          { icon: Wind, label: 'Air Quality', value: 'Good', color: 'indigo' },
          { icon: Users, label: 'Active Citizens', value: '12,345', color: 'purple' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className={`text-${stat.color}-600 mb-4`}>
              <stat.icon className="w-8 h-8" />
            </div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Energy Consumption Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Energy Consumption</h2>
          <LineChart width={500} height={300} data={energyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="consumption"
              stroke="#0088FE"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </motion.div>

        {/* Waste Distribution Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-6">Waste Distribution</h2>
          <PieChart width={500} height={300}>
            <Pie
              data={wasteData}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {wasteData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </motion.div>
      </div>

      {/* Alerts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold mb-6">Recent Alerts</h2>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
            >
              {alert.type === 'warning' ? (
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
              ) : (
                <CheckCircle className="w-6 h-6 text-green-500" />
              )}
              <div>
                <p className="text-gray-900">{alert.message}</p>
                <p className="text-sm text-gray-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;