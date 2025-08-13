import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name;

  useEffect(() => {
    if (!name) {
      navigate('/');
    }
  }, [name, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome, {name || 'User'}!</h1>
    </div>
  );
};

export default Dashboard;
