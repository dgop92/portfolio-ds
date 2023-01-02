import Stack from "@mui/material/Stack";
import { FullProject } from "../definitions/entities/projects";
import { FullProjectCard } from "./FullProjectCard";

export interface ProjectsContainersProps {
  projects: FullProject[];
}

export function ProjectsContainer({ projects }: ProjectsContainersProps) {
  return (
    <Stack my={8}>
      <Stack alignItems="center" pt={4} pb={8} gap={2}>
        {projects.map((project) => (
          <FullProjectCard key={project.title} fullProject={project} />
        ))}
      </Stack>
    </Stack>
  );
}
