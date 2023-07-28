import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  
  const totalServices = 132;
  const completedServices = 102;
  const pendingServices = totalServices - completedServices;

  return (
    
    <div className="dashboard">
      <h2>Service Status</h2>
      <div className="statistics">
        <div className="statistic">
          <h3>Total Services</h3>
          <p>{totalServices}</p>
        </div>
        <div className="statistic">
          <h3>Completed Services</h3>
          <p>{completedServices}</p>
        </div>
        <div className="statistic">
          <h3>Pending Services</h3>
          <p>{pendingServices}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
