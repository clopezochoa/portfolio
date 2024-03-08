export enum Pages {
  generativeAlgorithm = "generative-algorithm",
  engine = "engine",
  frontend = "frontend",
  stayHealthy = "stay-healthy",
  about = "about",
}

export enum Route {
  home = "/",
  generativeAlgorithm = `/#${Pages.generativeAlgorithm}`,
  engine = `/${Pages.engine}`,
  frontend = `/#${Pages.frontend}`,
  stayHealthy = `/${Pages.stayHealthy}`,
  threeD = "/three-d",
  about = `/#${Pages.about}`,
}
