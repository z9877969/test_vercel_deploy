import { useDispatch, useSelector } from "react-redux";
import s from "./UserSettingsForm.module.css";
import { selectUser } from "../../redux/user/selectors.js";
import { userSettingsValidationSchema } from "../../validationSchemas/userSettingsValidation.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserProfile } from "../../redux/user/operations.js";
import { useState } from "react";

const UserSettingsForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [preview, setPreview] = useState(user.avatarUrl);

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSettingsValidationSchema),
    defaultsValues: {
      name: user.name,
      email: user.email,
      gender: user.gender,
      weight: user.weight,
      dailySportTime: user.dailySportTime,
      dailyNorm: user.dailyNorm / 1000,
    },
  });

  const gender = watch("gender");
  const weight = watch("weight");
  const dailySportTime = watch("dailySportTime");

  const countDailyNorma = () => {
    if (!weight && !dailySportTime) return "1.5 L";
    return gender === "woman"
      ? (weight * 0.03 + dailySportTime * 0.4).toFixed(1) + " L"
      : (weight * 0.04 + dailySportTime * 0.6).toFixed(1) + " L";
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      if (data.avatar && data.avatar[0]) {
        formData.append("photo", data.avatar[0]);
      }
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("gender", data.gender);
      formData.append("weight", data.weight);
      formData.append("dailySportTime", data.dailySportTime);
      formData.append("dailyNorm", data.dailyNorm * 1000);

      await dispatch(updateUserProfile(formData)).unwrap();
      toast.success("Profile updated successfully!");
      onClose();
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="avatar">
          <img src={preview} alt="Avatar" />
          <div>
            <svg className={s.uploadIcon} width="18" height="18">
              <use href="/sprite.svg#icon-upload" />
            </svg>
            <p>Upload a photo</p>
          </div>
        </label>
        <Controller
          name="avatar"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={(event) => {
                field.onChange(event.target.files);
                if (e.target.files[0]) {
                  setPreview(URL.createObjectURL(event.target.files[0]));
                }
              }}
            />
          )}
        />
        {errors.avatar && <p>{errors.avatar.message}</p>}
      </div>

      <div>
        <fieldset>
          <legend>Your gender identity</legend>

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <div>
                <label>
                  <input
                    type="radio"
                    {...field}
                    value="woman"
                    checked={field.value === "woman"}
                  />
                  Woman
                </label>
                <label>
                  <input
                    type="radio"
                    {...field}
                    value="man"
                    checked={field.value === "man"}
                  />
                  Man
                </label>
              </div>
            )}
          />
        </fieldset>
        {errors.gender && <p>{errors.gender.message}</p>}

        <div>
          <label htmlFor="name">Your name</label>
          <input id="name" {...register("name")} type="text" />
          {errors.name && <p className={s.error}>{errors.name.message}</p>}
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} type="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <section>
          <h2>My daily norma</h2>

          <p> For woman:</p>
          <span>V = (M * 0.03) + (T * 0.4)</span>

          <p>For man:</p>
          <span>V = (M * 0.04) + (T * 0.6)</span>

          <div>
            <p>
              <span>*</span>V is the volume of the water norm in liters per day,
              M is your body weight, T is the time of active sports, or another
              type of activity commensurate in terms of loads (in the absence of
              these, you must set 0).
            </p>
          </div>
          <div>
            <p>Active time in hours</p>
          </div>
        </section>

        <div>
          <label htmlFor="weight">Your weight in kilograms:</label>
          <input id="weight" {...register("weight")} type="number" />
          {errors.weight && <p>{errors.weight.message}</p>}

          <label htmlFor="dailySportTime">
            The time of active participation in sports:
          </label>

          <input
            id="dailySportTime"
            {...register("dailySportTime")}
            type="number"
          />
          {errors.dailySportTime && <p>{errors.dailySportTime.message}</p>}
        </div>
        <div>
          <p>The required amount of water in liters per day:</p>
          <span>{countDailyNorma()}</span>
          <label htmlFor="dailyNorm"></label>
          <input id="dailyNorm" {...register("dailyNorm")} type="number" />
          {errors.dailyNorm && <p>{errors.dailyNorm.message}</p>}
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserSettingsForm;
