import TasteForm from "@/app/container/home-page/taste-form";
import HomeNavBar from "./container/home-page/nav-bar";

export default function HomePage() {
  return (
    <div className="flex flex-col w-4/5 gap-y-10">
      <div className="flex justify-center">
        <HomeNavBar />
      </div>
      <div className="flex justify-center">
        <TasteForm />
      </div>
    </div>
  );
}
