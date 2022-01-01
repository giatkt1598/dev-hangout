import { HTMLAttributes } from "react";
import styles from './LoginForm.module.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { PATH } from "../../router/path";
export default function LoginForm({
  className,
  ...other
}: HTMLAttributes<HTMLDivElement>) {
  const navigate = useNavigate();
  const onSubmit = (values: unknown) => {
    console.log(values);
    navigate(PATH.chat);
  }
  const {handleSubmit, register} = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  })
  return (
    <div {...other} className={`${className ?? ''}
    flex justify-center items-center`}>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h3 className="font-semibold text-4xl">Welcome back</h3>
        <div className="text-gray-400 text-sm mb-5">
              Welcome back! Please enter your details
        </div>

        <form autoComplete="off" className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)} method="post">
          <div>
            <label htmlFor="email" className="block">Email</label>
            <input {...register("email")}
              className={styles.input}
              placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="password" className="block">Password</label>
            <input {...register("password")}
              type="password"
              className={styles.input}
              placeholder="" />
          </div>

          <div className="flex justify-between items-end">
            <label htmlFor="remember" className="flex gap-2 items-center">
              <input type="checkbox" name="remember" />
                Remember for 30 days
            </label>
            <a href="#">Forget password?</a>
          </div>

          <button type="submit"
            className="bg-black text-white p-2 w-full rounded-md
            font-medium tracking-wide border-black border-2"
          >Sign in</button>

          <button type="button" className="flex justify-center items-center gap-1
          border-2 border-gray-200 p-2 rounded-md">
            <img src="/google-login-icon-24.png" width={22} />
            <span>Sign in with Google</span>
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-gray-400">
            {"Don't have an account?"}
          </span>
          &nbsp;
          <a href="#" className="font-medium hover:underline">
                Sign up for free
          </a>
        </div>
      </div>
    </div>
  )
}
