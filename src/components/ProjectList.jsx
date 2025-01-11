const ProjectList = ({ projects }) => {
   function handleRenderProjects(projects) {
      return projects.map((project, i) => (
         <div className='project' key={`project-${project.category}-${i}`}>
            <img src={project.img} alt={`project-${project.category}-${i}`} />
         </div>
      ));
   }

   return <div className='portfolio'>{handleRenderProjects(projects)}</div>;
};

export default ProjectList;
