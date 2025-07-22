"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectsSchema, ProjectsSchema } from "../../schemas/projects-schema";
import { createProjectsModel } from "../../server/projects/create-project-model";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2, PlusCircleIcon } from "lucide-react";

export function ProjectModelForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ProjectsSchema>({
    resolver: zodResolver(projectsSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (formData: ProjectsSchema) => {
    setIsPending(true);
    try {
      await createProjectsModel(formData);
      form.reset();
      toast.success("Projeto criado com sucesso!.");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar o projeto!.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Projeto</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome do projeto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do projeto</FormLabel>
              <FormControl>
                <Input placeholder="Digite a descrição do projeto" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isPending ? (
            <p className="flex items-center">
              Criando Projeto
              <Loader2 className="ml-2 size-4 animate-spin" />
            </p>
          ) : (
            <p className="flex items-center">
              Criar Projeto
              <PlusCircleIcon className="ml-2 size-4" />
            </p>
          )}
        </Button>
      </form>
    </Form>
  );
}
