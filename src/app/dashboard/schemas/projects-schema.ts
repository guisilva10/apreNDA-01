import z from "zod";

export const projectsSchema = z.object({
  name: z.string().min(2, "Este campo é obrigatório"),
  description: z.string().min(2, "Este campo é obrigatório"),
});

export type ProjectsSchema = z.infer<typeof projectsSchema>;
