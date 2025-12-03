import { Route, Routes } from "react-router";
import Login from "../pages/login/login";
import Register from "../pages/Register/Register";
import Settings from "../pages/Settings/Settings";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyGoals from "../pages/My Goals/MyGoals";
import TeamGoals from "../pages/TeamGoals/TeamGoals";
import Evaluations from "../pages/Evaluations/Evaluations";
import Reports from "../pages/Reports/Reports";
import Logout from "../pages/Logout/Logout";

export default function AppRouting() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mygoals" element={<MyGoals />} />
        <Route path="/teamgoals" element={<TeamGoals />} />
        <Route path="/evaluations" element={<Evaluations />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}