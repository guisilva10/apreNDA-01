interface ListProjectsModelProps {
  name: string;
  description: string;
}

const ListProjectsModel = ({ name, description }: ListProjectsModelProps) => {
  return (
    <div className="border-border border p-4">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default ListProjectsModel;
