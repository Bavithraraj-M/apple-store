import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type FormData = {
  fullName: string;
  mailId: string;
  password: string;
  confirmPassword: string;
};

interface SignUpFormProps {
  onSubmit: (data: FormData) => void;
}

export default function SignUpForm({ onSubmit }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({ mode: "onChange" });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Full Name"
        {...register("fullName", { required: "Full Name is required", minLength: { value: 4, message: "Minimum 4 characters" } })}
        error={!!errors.fullName}
        helperText={errors.fullName?.message}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Mail ID"
        type="email"
        {...register("mailId", {
          required: "Mail ID is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        })}
        error={!!errors.mailId}
        helperText={errors.mailId?.message}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 8, message: "Minimum 8 characters" },
          validate: {
            containsUpper: (value) => /[A-Z]/.test(value) || "Must contain an uppercase letter",
            containsLower: (value) => /[a-z]/.test(value) || "Must contain a lowercase letter",
            containsNumber: (value) => /\d/.test(value) || "Must contain a number",
            containsSpecialChar: (value) => /[!@#$%^&*]/.test(value) || "Must contain a special character",
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Confirm Password"
        type="password"
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) => value === password || "Passwords do not match",
        })}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
}
