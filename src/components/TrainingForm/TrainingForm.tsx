import { useState, useCallback } from "react";
import type { TrainingInput, TrainingFormProps } from "../../types";
import {
  validateTraining,
  type TrainingErrors,
} from "../../utils/validateTraining.ts";
import styles from "./TrainingForm.module.css";
import cn from "classnames";

function Form({ addTraining }: TrainingFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    duration: "",
    health: "",
  });

  const [errors, setErrors] = useState<TrainingErrors>({});

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const cleanInputs = useCallback(() => {
    setFormData({
      title: "",
      description: "",
      date: "",
      duration: "",
      health: "",
    });
    setErrors({});
  }, []);

  const onHandleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const data: TrainingInput = {
        ...formData,
        duration: Number(formData.duration),
        health: Number(formData.health),
      };

      const validationErrors = validateTraining(data);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      addTraining(data);
      cleanInputs();
    },
    [formData, addTraining, cleanInputs],
  );

  return (
    <div className={styles["formTrain"]}>
      <h2>Новая тренировка</h2>
      <form className={styles["training-form"]} onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Название"
          value={formData.title}
          onChange={handleChange}
          className={cn({
            [styles["warning"]]: errors.title,
          })}
        />
        <textarea
          name="description"
          placeholder="Описание"
          value={formData.description}
          onChange={handleChange}
          className={cn({
            [styles["warning"]]: errors.description,
          })}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="number"
          name="duration"
          placeholder="Время тренировки"
          value={formData.duration}
          onChange={handleChange}
          className={cn({
            [styles["warning"]]: errors.duration,
          })}
        />
        <select
          name="health"
          value={formData.health}
          onChange={handleChange}
          className={cn({
            [styles["warning"]]: errors.health,
          })}
        >
          <option value="" hidden disabled>
            Самочувствие
          </option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className={cn(styles["submit-button"], styles["primary-button"])}
        >
          <span>Отправить</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
