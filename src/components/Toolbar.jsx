const Toolbar = ({ filters, selected, onSelectFilter }) => {
   const handleRenderFilters = (filters) => {
      return filters.map((filter, i) => {
         const className = filter === selected ? 'filter-selected' : 'filter';
         return (
            <button
               key={`filter-${i}`}
               className={className}
               onClick={() => onSelectFilter(filter)}
            >
               {filter}
            </button>
         );
      });
   };

   return <div className='toolbar'>{handleRenderFilters(filters)}</div>;
};

export default Toolbar;
