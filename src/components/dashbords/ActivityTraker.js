import React, { useEffect, useState } from 'react';
import { ApiFetchRequest } from '../../axios/commonRequest';

const ActivityTracker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [allAttendance, setAllAttendance] = useState({});
  const id = JSON.parse(localStorage.getItem("id"));

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const getAttendanceStatus = (day) => {
    const paddedMonth = String(currentMonth + 1).padStart(2, '0');
    const paddedDay = String(day).padStart(2, '0');
    const dateKey = `${currentYear}-${paddedMonth}-${paddedDay}`;
    const status = allAttendance[dateKey];

    if (status === 'present') return 'bg-green-500';
    if (status === 'absent') return 'bg-purple-500';
    return 'bg-gray-300'; // no data
  };

  const changeMonth = (increment) => {
    setCurrentMonth(prev => {
      let newMonth = prev + increment;
      if (newMonth < 0) {
        setCurrentYear(prev => prev - 1);
        return 11;
      }
      if (newMonth > 11) {
        setCurrentYear(prev => prev + 1);
        return 0;
      }
      return newMonth;
    });
  };

  useEffect(() => {
    const fetchAllAttendance = async () => {
      try {
        const response = await ApiFetchRequest(`/user/get-attandance/${id}`);
        if (response.status === 200) {
          setAllAttendance(response.data.attendance || {});
        } else {
          console.log("Error fetching attendance");
        }
      } catch (error) {
        console.error("Error fetching attendance", error);
      }
    };
    fetchAllAttendance();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => changeMonth(-1)}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Previous
          </button>
          <h2 className="text-2xl font-bold text-gray-800">
            {months[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={() => changeMonth(1)}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Next
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center font-semibold text-gray-600">
              {day}
            </div>
          ))}

          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-12" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            return (
              <div
                key={day}
                className={`h-12 flex items-center justify-center rounded cursor-default transition ${getAttendanceStatus(day)}`}
              >
                <span className="text-white font-medium">{day}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
            <span className="text-gray-600">Present</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
            <span className="text-gray-600">Absent</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
            <span className="text-gray-600">No Data</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;
