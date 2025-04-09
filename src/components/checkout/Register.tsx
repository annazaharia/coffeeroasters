import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const registerSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters long"),
    lastName: z.string().min(3, "Last name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    address: z.string().min(4, "Address must be at least 10 characters long"),
    city: z.string().min(1, "Please select a city"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .required({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
    confirmPassword: true,
    address: true,
    city: true,
    terms: true,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const { register: registerUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      registerUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        city: data.city,
      });
      navigate("/checkout/login");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="registerFirstName">
                First Name
              </label>
              <input
                type="text"
                id="registerFirstName"
                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                {...register("firstName")}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-outline">
              <label className="form-label" htmlFor="registerLastName">
                Last Name
              </label>
              <input
                type="text"
                id="registerLastName"
                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                {...register("lastName")}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
          <input
            type="email"
            id="registerEmail"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
          <input
            type="password"
            id="registerPassword"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            {...register("password")}
          />
          {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerConfirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="registerConfirmPassword"
            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword.message}</div>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerAddress">
            Address
          </label>
          <textarea
            id="registerAddress"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            rows={3}
            {...register("address")}
          />
          {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerCity">
            City
          </label>
          <select
            id="registerCity"
            className={`form-select ${errors.city ? "is-invalid" : ""}`}
            aria-label="Default select example"
            {...register("city")}
          >
            <option value="">Selectează un oraș</option>
            <option value="Bucharest">Bucharest</option>
            <option value="Iasi">Iasi</option>
            <option value="Cluj-Napoca">Cluj-Napoca</option>
            <option value="Timisoara">Timisoara</option>
            <option value="Constanta">Constanta</option>
            <option value="Brasov">Brasov</option>
            <option value="Oradea">Oradea</option>
          </select>
          {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
        </div>

        <div className="form-check d-flex mb-4">
          <input
            className={`form-check-input me-2 ${errors.terms ? "is-invalid" : ""}`}
            type="checkbox"
            id="registerCheck"
            aria-describedby="registerCheckHelpText"
            {...register("terms")}
          />
          <label className="form-check-label" htmlFor="registerCheck">
            I have read and agree to the terms
          </label>
          {errors.terms && <div className="invalid-feedback">{errors.terms.message}</div>}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-block mb-4" disabled={!isValid || isLoading}>
            {isLoading ? "Signing up..." : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}
