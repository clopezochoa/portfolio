export enum Pages {
  quill = "quill",
  generativeAlgorithm = "generative-algorithm",
  frontend = "frontend",
  about = "about",
}

export enum Route {
  home = "/",
  quill = `/#${Pages.quill}`,
  quillPage = `/#${Pages.quill}`,
  generativeAlgorithm = `/#${Pages.generativeAlgorithm}`,
  generativeAlgorithPage = `/${Pages.generativeAlgorithm}`,
  frontend = `/#${Pages.frontend}`,
  frontendPage = `/${Pages.frontend}`,
  threeD = "/three-d",
  about = `/#${Pages.about}`,
}
