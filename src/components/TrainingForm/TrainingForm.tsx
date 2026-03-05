import { type TrainingInput, type TrainingFormProps } from "../../types.ts";
import { validateTraining, type TrainingErrors } from "../../utils/validateTraining.ts";
import "./TrainingForm.css";
import { useState } from "react";

function Form(props: TrainingFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [health, setHealth] = useState("");

  const [errors, setErrors] = useState<TrainingErrors>({});

  const cleanInputs = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setDuration("");
    setHealth("");
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data: TrainingInput = {
      title,
      description,
      date,
      duration: Number(duration),
      health: Number(health),
    };

    const validationErrors = validateTraining(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    props.addTraining(data);
    cleanInputs();
    setErrors({});
  };

  return (
    <div className="formTrain">
      <h2>Новая тренировка</h2>
      <form
        action="submit"
        className="training-form"
        onSubmit={(e) => onHandleSubmit(e)}
      >
        <input
          type="text"
          id="title"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? "warning" : ""}
        />
        <textarea
          name="description"
          id="desc"
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? "warning" : ""}
        >
          {description}
        </textarea>
        <input
          type="date"
          placeholder="Дата"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Время тренировки"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className={errors.duration ? "warning" : ""}
        />
        <select
          name="health"
          id="health"
          value={health}
          onChange={(e) => setHealth(e.target.value)}
          className={errors.health ? "warning" : ""}
        >
          <option value="" hidden disabled>
            Самочувствие
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit" className="submit-button primary-button">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Form;
