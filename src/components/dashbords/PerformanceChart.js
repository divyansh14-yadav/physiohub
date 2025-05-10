import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample JSON data (can later come from API)
const performanceData = [
  {
    date: "2025-05-01",
    activities: [
      {
        type: "quiz",
        data: [
          { time: "08:00", performance: 72 },
          { time: "09:00", performance: 78 },
          { time: "10:00", performance: 85 }
        ]
      },
      {
        type: "flashcard",
        data: [
          { time: "08:00", performance: 68 },
          { time: "09:00", performance: 74 },
          { time: "10:00", performance: 80 }
        ]
      }
    ]
  },
  {
    date: "2025-05-02",
    activities: [
      {
        type: "quiz",
        data: [
          { time: "08:00", performance: 75 },
          { time: "09:00", performance: 82 },
          { time: "10:00", performance: 88 }
        ]
      },
      {
        type: "flashcard",
        data: [
          { time: "08:00", performance: 70 },
          { time: "09:00", performance: 76 },
          { time: "10:00", performance: 83 }
        ]
      }
    ]
  }
];

// Helper to convert activity arrays into chart data
const mergeActivityData = (activities) => {
  const merged = {};
  activities.forEach((activity) => {
    activity.data.forEach(({ time, performance }) => {
      if (!merged[time]) merged[time] = { time };
      merged[time][activity.type] = performance;
    });
  });
  return Object.values(merged);
};

// Format JS Date to YYYY-MM-DD
const formatDateKey = (date) => date.toISOString().split("T")[0];

const PerformanceChart = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const formattedDate = formatDateKey(selectedDate);
  const dateLabel = selectedDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const selectedDayData = performanceData.find(
    (entry) => entry.date === formattedDate
  );

  const chartData = selectedDayData
    ? mergeActivityData(selectedDayData.activities)
    : [];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Performance Overview
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={() => changeDate(-1)}
            className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            ◀ Previous
          </button>

          <span className="text-sm font-medium text-gray-700">
            {dateLabel}
          </span>

          <button
            onClick={() => changeDate(1)}
            className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            Next ▶
          </button>
        </div>
      </div>

      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[60, 100]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="quiz"
              name="Quiz"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
            <Line
              type="monotone"
              dataKey="flashcard"
              name="Flashcard"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-gray-500 text-sm text-center">
          No performance data available for <strong>{dateLabel}</strong>.
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;
