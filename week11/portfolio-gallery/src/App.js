import { useState } from 'react';
import './App.css';
import { projects } from './data/projects';
import FilterBar from './components/FilterBar';
import ProjectList from './components/ProjectList';

function App() {
  // The technology currently selected in the filter bar
  const [selectedTech, setSelectedTech] = useState('All');

  // Build the filter buttons from the data, so they never go out of date
  const techs = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const visibleProjects =
    selectedTech === 'All'
      ? projects
      : projects.filter(p => p.tech.includes(selectedTech));

  return (
    <main className="app">
      <h1>Portfolio Gallery</h1>
      <FilterBar techs={techs} selected={selectedTech} onSelect={setSelectedTech} />
      <ProjectList projects={visibleProjects} />
    </main>
  );
}

export default App;
