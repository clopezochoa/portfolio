interface RouteGroup {
  up: Route,
  down: Route,
  left: Route,
  right: Route,
  spare: Route
}

function createRouteGroup(up?: Route, down?: Route, left?: Route, right?: Route, spare?: Route):RouteGroup {
  return {up: up ?? Route.home, down: down ?? Route.home, left: left ?? Route.home, right: right ?? Route.home, spare: spare ?? Route.home};
}

export enum Route {
  home = "/",
  aboutMe = "/about-me",
  whatIDo = "/what-i-do",
  frontend = "frontend",
  threeD = "/three-d",
  generativeAlgorithm = "/generative-algorithm",
  engine = generativeAlgorithm + "/engine"
}

export function getRouteGroup(route: Route): RouteGroup {
  switch (route) {
    case Route.home:
      return createRouteGroup(Route.aboutMe, Route.generativeAlgorithm);
    case Route.aboutMe:
      return createRouteGroup(Route.whatIDo, Route.home);
    case Route.whatIDo:
      return createRouteGroup(undefined, Route.aboutMe);
      case Route.generativeAlgorithm:
        return createRouteGroup(Route.home, undefined, Route.engine);
      case Route.engine:
        return createRouteGroup(undefined, undefined, undefined, Route.generativeAlgorithm);
      default:
      return createRouteGroup();
  }
}
