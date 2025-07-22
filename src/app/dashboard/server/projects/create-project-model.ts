"use server";

import { auth } from "@/services/auth";
import { db } from "@/services/database/prisma";
import { projectsSchema } from "../../schemas/projects-schema";
import { revalidatePath } from "next/cache";

interface CreateProjectsModedlProps {
  name: string;
  description: string;
}

export const createProjectsModel = async (data: CreateProjectsModedlProps) => {
  const session = await auth();
  if (!session?.user) {
    return new Error("Unauthorized");
  }

  projectsSchema.parse(data);

  try {
    const projects = await db.projects.create({
      data: {
        name: data.name,
        description: data.description,
        userId: session.user.id || "",
      },
    });

    revalidatePath("/dashboard");
    return projects;
  } catch (error) {
    console.log(error);
  }
};
