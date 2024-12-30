"use client"

import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import SignUp from './components/SignUp';

export default function Home() {
  return (

      <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  );
}
