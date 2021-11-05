export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}


export function addWhitepaper(pdf) {
  if (!pdf) return;

  const whitePaperButton = document.querySelector(".cta-btn--whitepaper");
  whitePaperButton.setAttribute("href", pdf);
}

