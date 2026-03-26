export interface TrainingInput {
  title: string;
  description: string;
  date: string;
  duration: number;
  health: number;
}

export interface TrainingFormProps {
  addTraining: (data: TrainingInput) => void;
}

export interface Training extends TrainingInput {
  id: number;
  done: boolean;
}

export interface TrainingListProps {
  trainings: Training[];
  deleteTraining: (id: number) => void;
  onSelect: (id: number) => void;
}

export interface OneTraining {
  training: Training;
}

export interface TrainingItemProps {
  training: Training;
  onSelect: (id: number) => void;
  deleteTraining: (id: number) => void;
}

export interface ModalProps extends OneTraining {
  onClose: () => void;
  onUpdate: (updated: Training) => void;
}

export interface ModalViewProps extends OneTraining {
  setIsEditing: () => void;
  formatDays: (num: number) => string;
}

export interface ModalEditProps extends OneTraining {
  onCancel: () => void;
  onSave: (updated: Training) => void;
  formatDays: (num: number) => string;
}
