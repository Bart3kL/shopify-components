export type SetupGuideTaskAction = {
  label: string;
  url?: string;
  onClick?: () => void;
  primary?: boolean;
  disabled?: boolean;
};

export type SetupGuideTask = {
  id: string;
  label: string;
  complete: boolean;
  description?: string;
  learnMoreUrl?: string;
  actions?: SetupGuideTaskAction[];
  imageUrl?: string;
};

export type SetupGuideProps = {
  completedTasks: number;
  totalTasks: number;
  header: string;
  description: string;
  onDismiss: () => void;
  tasks: SetupGuideTask[];
};
