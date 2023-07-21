import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  //if (!session) redirect("/api/auth/signin");

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center w-1/3 mt-10 p-10 bg-slate-600 shadow-md">
        <h1 className="mt-10 mb-10 text-5xl font-bold">Home Page</h1>
        <p>
          Will contain <strong>widget</strong> like components such as: current
          season, my recent bets, friends bets etc..
        </p>
      </div>
    </div>
  );
}
