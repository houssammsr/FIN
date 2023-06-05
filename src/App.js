import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeDashboardPage from './pages/EmployeeDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Forgotpassword from './pages/First';
import SecondPage from './pages/Second';
import ThirdPage from './pages/Third';
import LastPage from './pages/LastPage';
import Dashboard from './components/employee/Dashboard';
import EmployeeRequests from './components/employee/EmployeeRequests';
import EmployeeProgram from './components/employee/EmployeeProgram';
import EmployeeTrackRequest from './components/employee/EmployeeTrackRequest';
import AdminRequests from './components/admin/AdminRequests';
import AdminProgram from './components/admin/AdminProgram';
import AdminTransaction from './components/admin/AdminTransaction';
import AdminFunds from './components/admin/AdminFunds';
import AdminAccountsManagement from './components/admin/AdminAccountsManagement';

function App() {
  
  return (
    <div className='continer' >
      <BrowserRouter>

        <Routes>
            
                <Route path='/' exact element={<Login/>}></Route>
                <Route path="/-dashboard"  exact element={<EmployeeDashboardPage />} ></Route>
                <Route path="/admin-dashboard"  exact element={<AdminDashboardPage  />} ></Route>
                <Route path='/forgotpassword' exact element={<Forgotpassword />} ></Route>
                <Route path="/send-link"  exact element={<SecondPage />} ></Route>
                <Route path="/reset-password"  exact element={<ThirdPage />} ></Route>
                <Route path="/success"  exact element={<LastPage />} ></Route>
                <Route path="/employee/dashboard" element={<Dashboard />} />
                <Route path="/employee/requests" element={<EmployeeRequests />} />
                <Route path="/employee/track-request" element={<EmployeeTrackRequest />} />
                <Route path="/employee/program" element={<EmployeeProgram />} />
                <Route path="/admin/requests" element={<AdminRequests />} />
                <Route path="/admin/program" element={<AdminProgram />} />
                <Route path="/admin/transaction" element={<AdminTransaction />} />
                <Route path="/admin/funds" element={<AdminFunds />} />
                <Route path="/admin/accounts" element={<AdminAccountsManagement />} />
        </Routes>


      </BrowserRouter>
    </div>




  );
}


export default App;
