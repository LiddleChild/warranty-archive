import { TitleBar } from "./(components)/TitleBar";
import { WarrantyList } from "./(components)/WarrantyList";

export default function Home() {
  return (
    <div>
      <TitleBar />
      <div className="justify-center">
        <WarrantyList />
      </div>
    </div>
  );
}
