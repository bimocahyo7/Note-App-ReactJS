import "./App.css";

function DefaultNote(props) {
  return (
    //Default background color NoteApp (Yellow)
    <div className="bg-yellow-200 rounded-md p-3 w-72">
      <h2 className="text-xl font-bold text-slate-800">{props.title}</h2>
      <h2 className="text-sm font-medium text-gray-700">{props.date}</h2>
      <h2 className=" text-lg font-medium text-slate-800 pt-6 pb-3 leading-none">{props.text}</h2>
    </div>
  );
}

function CustomNote(props) {
  return (
    //Customize the background color NoteApp from input props.color
    <div className={`${props.color} rounded-md p-3 w-72`}>
      <h2 className="text-xl font-bold text-slate-800">{props.title}</h2>
      <h2 className="text-sm font-medium text-gray-700">{props.date}</h2>
      <h2 className=" text-lg font-medium text-slate-800 pt-6 pb-3 leading-none">{props.text}</h2>
    </div>
  );
}

function App() {
  const customDate = new Date(2023, 9, 27).toDateString();
  const newDate = new Date().toDateString();

  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <nav className="bg-slate-700 p-3">
        <h1 className="text-2xl font-bold text-white">Note App</h1>
      </nav>

      {/* Container Note */}
      <div className="m-7 flex flex-wrap justify-center gap-3">
        {/* Note List */}
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
}

export default App;
