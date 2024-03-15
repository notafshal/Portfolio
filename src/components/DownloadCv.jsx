import Resume from "../assets/Resume.pdf";
import { saveAs } from "file-saver";
const DownloadCv = () => {
  if (Resume) {
    saveAs(Resume);
  }
};

export default DownloadCv;
