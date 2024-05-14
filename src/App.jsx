import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import DessertsPage from './pages/DessertsPage.jsx';
import IndiRecipePage from './pages/IndiRecipePage.jsx';
import AddRecipePage from './pages/AddRecipePage.jsx';
import EditRecipePage from './pages/EditRecipePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import NavLayout from './layouts/NavLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/recipes" element={<DessertsPage />} />

        <Route path="/recipes/:id" element={<IndiRecipePage />} />

        <Route path="/addrecipe" element={<AddRecipePage />} />
        <Route path="/editrecipe/:id" element={<EditRecipePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
