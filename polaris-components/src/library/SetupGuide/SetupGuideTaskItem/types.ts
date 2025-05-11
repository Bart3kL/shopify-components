import { SetupGuideTask } from "../types";

export type TaskItemProps = SetupGuideTask & {
  expanded: boolean;
  onExpand: () => void;
};
