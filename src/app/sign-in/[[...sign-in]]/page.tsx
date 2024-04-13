import Navbar from "@/components/navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="flex flex-col">
          <Navbar/>
        <div className="flex items-center justify-center h-[92vh]">
          <SignIn />
        </div>
      </div>
    </>
  );
}
