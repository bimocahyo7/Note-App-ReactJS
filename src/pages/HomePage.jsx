import React, { useState } from "react";
import Form from "../components/Form";
import { DefaultNote, CustomNote } from "../components/Note";

const array_notes = [
  {
    id: 1,
    title: "Catatan 1",
    createdAt: "20 Oktober 2023",
    body: "Mendesain poster dan banner acara HMTI",
  },
  {
    id: 2,
    title: "Catatan 2",
    createdAt: "20 Oktober 2023",
    body: "Menulis artikel jurnal ilmiah",
  },
  {
    id: 2,
    title: "Catatan 3",
    createdAt: "20 Oktober 2023",
    body: "Belajar kursus online tentang pemrograman",
  },
  {
    id: 2,
    title: "Catatan 3",
    createdAt: "20 Oktober 2023",
    body: "Mengunjungi museum seni lukis dan 3D",
  },
  {
    id: 2,
    title: "Catatan 5",
    createdAt: "20 Oktober 2023",
    body: "Membuat laporan mingguan logbook MSIB",
  },
];

const HomePage = () => {
  const [notes, setNotes] = useState(array_notes);
  const customDate = new Date(2023, 9, 27).toDateString();
  const newDate = new Date().toDateString();

  return (
    <div className="container mx-auto">
      <Form />
      <div className="m-7 flex flex-wrap justify-center gap-3">
        <DefaultNote title="Catatan 1" date={customDate} text="Mendesain poster dan banner acara HMTI"></DefaultNote>
        <CustomNote title="Catatan 2" date={newDate} text="Menulis artikel jurnal ilmiah" color="bg-cyan-300"></CustomNote>
        <CustomNote title="Catatan 3" date={newDate} text="Belajar kursus online tentang pemrograman" color="bg-green-300"></CustomNote>
        <CustomNote title="Catatan 4" date={newDate} text="Mengunjungi museum seni lukis dan 3D" color="bg-red-300"></CustomNote>
        <CustomNote title="Catatan 5" date={newDate} text="Membuat laporan mingguan logbook MSIB" color="bg-purple-300"></CustomNote>
        <CustomNote title="Catatan 6" date={newDate} text="Bermain game atau hiburan lainnya" color="bg-orange-200"></CustomNote>
        <CustomNote title="Catatan 7" date={newDate} text="Membuat vlog tentang hobi atau minat pribadi" color="bg-slate-300"></CustomNote>
        <CustomNote title="Catatan 8" date={newDate} text="Menyusun rencana perjalanan ke destinasi populer" color="bg-lime-200"></CustomNote>
      </div>
    </div>
  );
};

export default HomePage;
