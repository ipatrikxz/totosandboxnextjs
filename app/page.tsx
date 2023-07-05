import { getServerSession } from "next-auth";
import LoginBtn from "../components/LoginBtn";
import style from "../styles/Home.module.css";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/api/auth/signin");

  return (
    <div className={style.container}>
      <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center w-1/3 mt-10 p-10 shadow-md">
          <h1 className="mt-10 mb-4 text-4xl font-bold">Sign In</h1>
        </div>
      </div>
    </div>
  );
}
