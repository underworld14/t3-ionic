import { IonIcon } from "@ionic/react";
import { book, grid, listOutline } from "ionicons/icons";
import { Button } from "../atoms";

export default function ModuleItem() {
    return <div className="flex gap-3 p-5">
    <div>
      <img
        className="rounded-md shadow-md"
        width={137}
        height={197}
        alt="cover"
        src={`https://picsum.photos/seed/${Math.random() * 10}/137/197`}
      />
    </div>
    <div >
      <h3 className="text-lg font-semibold">Sejarah Dinasti Abbasiyah</h3>
      <p>Rizem Aizid</p>
      <p>0096783401</p>
      <p className="flex items-center gap-4 text-primary">
        <IonIcon icon={grid} /> 7 SMP
      </p>
      <p className="flex items-center gap-4 text-primary">
        <IonIcon icon={listOutline} /> 4 Bab
      </p>
      <Button className='flex items-center gap-3 bg-primary px-7 py-3'>
        <IonIcon icon={book} /> Baca Modul
      </Button>
    </div>
  </div>
}