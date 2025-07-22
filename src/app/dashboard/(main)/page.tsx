import { getProjectsModel } from "../server/projects/get-projects-model";
import ListProjectsModel from "./_components/list-projects-model";
import { ProjectModelForm } from "./_components/project-model-form";

export default async function Page() {
  const projects = await getProjectsModel();

  if (!projects) {
    return <div>nenhum projeto criado</div>;
  }

  return (
    <div className="px-4 py-8">
      <h1>Seja bem vindo</h1>
      <div className="mt-12">
        <ProjectModelForm />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-5">
        {projects.map((item) => (
          <ListProjectsModel
            key={item.id}
            name={item.name || ""}
            description={item.description || ""}
          />
        ))}
      </div>
    </div>
  );
}
