import * as Yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from "./SignUpForm.module.css";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";

export const AuthFormContainer = ({ children, className }) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};
export const spritePath = "/sprite.svg";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const { email, password } = data;
  };

  const signUpValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "An email address must end with a valid domain (e.g., .com, .net)."
      )
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Your password must have at least 8 characters.")
      .max(30, "Your password must have at most 30 characters")
      .required("Password is required"),

    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please repeat your password"),
  });

  return (
    <AuthFormContainer className={s.container}>
      <div className={s.signUpBox}>
        <h2 className={s.signUpTitle}>Sign Up</h2>
        <form className={s.signUpForm} onSubmit={handleSubmit(onSubmit)}>
          <label className={s.signUpLabel}>
            Email
            <input
              type="email"
              placeholder="Enter your email"
              className={clsx(s.input, { [s.inputError]: errors.email })}
              {...register("email", {
                required: true,
              })}
            />
            <p className={s.errorMessage}>{errors.email?.message}</p>
          </label>
          <label className={s.signUpLabel}>
            Password
            <div className={s.inputField}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={clsx(s.input, {
                  [s.inputError]: errors.password,
                })}
                {...register("password", { required: true })}
              />
              <button
                className={s.showPasswordBtn}
                type="button"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <svg className={s.icon}>
                    <use href={`${spritePath}#icon-eye-off`}></use>
                  </svg>
                ) : (
                  <svg className={s.icon}>
                    <use href={`${spritePath}#icon-eye-open`}></use>
                  </svg>
                )}
              </button>
            </div>
            <p className={s.errorMessage}>{errors.password?.message}</p>
          </label>

          <label className={s.signUpLabel}>
            Repeat password
            <div className={s.inputField}>
              <input
                className={clsx(s.input, {
                  [s.inputError]: errors.repeatPassword,
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Repeat your password"
                {...register("repeatPassword", { required: true })}
              />
              <button
                className={s.showPasswordBtn}
                type="button"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <svg className={s.icon}>
                    <use href={`${spritePath}#icon-eye-off`}></use>
                  </svg>
                ) : (
                  <svg className={s.icon}>
                    <use href={`${spritePath}#icon-eye-open`}></use>
                  </svg>
                )}
              </button>
            </div>
            <p className={s.errorMessage}>{errors.repeatPassword?.message}</p>
          </label>
          <button type="submit" className={s.button}>
            Sign Up
          </button>
        </form>
        <div className={s.afterSignUpBox}>
          <p className={s.afterSignUpText}> Already have an account?</p>
          <a className={s.link} href="signIn">
            Sign In
          </a>
        </div>
      </div>
    </AuthFormContainer>
  );
};

export default SignUpForm;
