let array_notes = [
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
    id: 3,
    title: "Catatan 3",
    createdAt: "20 Oktober 2023",
    body: "Belajar kursus online tentang pemrograman",
  },
  {
    id: 4,
    title: "Catatan 4",
    createdAt: "20 Oktober 2023",
    body: "Mengunjungi museum seni lukis dan 3D",
  },
  {
    id: 5,
    title: "Catatan 5",
    createdAt: "20 Oktober 2023",
    body: "Membuat laporan mingguan logbook MSIB",
  },
];

function addNote(new_note) {
  array_notes = [...array_notes, new_note];
}

function getNotes() {
  return array_notes;
}

function deleteNote(deleted_index) {
  array_notes = array_notes.filter((note, index) => index !== deleted_index);
}

export { addNote, getNotes, deleteNote };
