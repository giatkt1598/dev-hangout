import LoginForm from "../components/login/LoginForm";
import LoginIntro from "../components/login/LoginIntro";

export default function LoginPage() {
  return (
    <div className="h-full grid lg:grid-cols-2 grid-cols-1" style={{height: '100vh'}}>
      <LoginForm className="p-1" />
      <LoginIntro className="hidden lg:block" />
    </div>
  )
}
