const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizerDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

const initializeDirectories = () => {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of : ${file}`);
    });
  }

  if (!fs.existsSync(organizerDir)) {
    fs.mkdirSync(organizerDir, { recursive: true });
  }

  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizerDir, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
};

function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  for (const [cateName, extNames] of Object.entries(categories)) {
    if (extNames.includes(ext)) {
      return cateName;
    }
  }
  return "others";
}

function organizeFiles() {
  const files = fs.readFileSync(sourceDir);
  if (files.length === 0) {
    console.log("No files to work on");
    return;
  }

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }

    const category = getCategory(file);
    const destDir = path.join(organizerDir, category);
    const destPath = path.join(destDir, file);

    fs.copyFileSync(sourcePath, destPath);
    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
  });
}

function showHelp() {
  console.log(`file organizer - usage :

    commands:
    init - create files
    organize - files into categories
    
    
    `);
}

switch (key) {
  case value:
    break;

  default:
    break;
}
