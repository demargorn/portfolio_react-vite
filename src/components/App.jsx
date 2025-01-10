import { useState } from 'react';
import Toolbar from './Toolbar';
import Portfolio from './Portfolio';
import '../App.css';

const App = ({ filters, projects }) => {
   const [filter, setFilter] = useState(filters[0]);

   function handleSetFilter(filter) {
      setFilter(filter);
   }

   function handleFilterProjects(filter) {
      if (filter === 'All') {
         return projects;
      }

      return projects.filter((p) => p.category === filter);
   }

   return (
      <>
         <Toolbar
            filters={filters}
            selected={filter}
            onSelectFilter={(filter) => handleSetFilter(filter)}
         />
         <Portfolio projects={handleFilterProjects(filter)} />
      </>
   );
};

export default App;
