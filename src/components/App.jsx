import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Destination = lazy(() => import("../pages/Destination"));
const Crew = lazy(() => import("../pages/Crew"));
const Technology = lazy(() => import("../pages/Technology"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Suspense>
  );
};

export default App;

/*   <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Suspense>*/
