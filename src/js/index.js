import initTilt from "./tilt";
import initSr from "./sr";
import { addResume, addWhitepaper } from "./utils";
import resume from "../assets/resume.pdf";
import lyricGenerationWhitePaper from "../assets/lyricGenerationWhitePaper.pdf"

export default function initApp() {
  initSr();
  initTilt();
  // comment this if you don't want to attach your resume
  addResume(resume);
  addWhitepaper(lyricGenerationWhitePaper)
}
