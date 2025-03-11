import { useDispatch, useSelector } from "react-redux";
import s from "./UserSettingsForm.module.css";
import { selectUser } from "../../redux/user/selectors.js";
import { userSettingsValidationSchema } from "../../validationSchemas/userSettingsValidation.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserProfile } from "../../redux/user/operations.js";

const UserSettingsForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const {
    register,
    control,
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
    <div>
      <div>
        <button>
          <svg className={s.uploadIcon} width="18" height="18">
            <use href="../../../public/sprite.svg#icon-upload" />
          </svg>
          <p>Upload a photo</p>
        </button>
      </div>
    </div>
  );
};

export default UserSettingsForm;
