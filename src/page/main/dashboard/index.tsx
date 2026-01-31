import React, { lazy, Suspense } from 'react';
import styled from "styled-components";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";



const DashboardStyle = styled.main`
  /* height: 80rem; */
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 2px;
  background-color: ${(props)=> props.theme.palette.secondary.main};
  overflow-y: auto;

  position: relative;
  z-index:  100;
`;

const About = lazy(() => import('./about').then(module => ({ default: module.About})));
const Experience = lazy(() => import('./experience').then(module => ({ default: module.Experience})));
const Project = lazy(() => import('./project').then(module => ({ default: module.Project})));
const Contact = lazy(() => import('./contact').then(module => ({ default: module.Contact})));

export const Dashboard: React.FC<{}> = (props) => {
    return (
      <DashboardStyle> 
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={ <About /> } />
            <Route path="/experience" element={<Experience />} />
            <Route path="/technical-exercises" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
          </Routes>
        </Suspense>
      </DashboardStyle>
    );
  }