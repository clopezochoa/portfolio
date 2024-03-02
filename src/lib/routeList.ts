interface RouteGroup {
  left: Route,
  right: Route,
  spare: Route
}

function createRouteGroup(left?: Route, right?: Route, spare?: Route):RouteGroup {
  return {left: left ?? Route.home, right: right ?? Route.home, spare: spare ?? Route.home};
}

export enum Route {
  home = "/",
  aboutMe = "/about-me",
  whatIDo = "/what-i-do",
  frontend = "frontend",
  threeD = "/three-d",
  generativeAlgorithm = "/generative-algorithm",
  engine = "/engine"
}

export function getRouteGroup(route: Route): RouteGroup {
  switch (route) {
    case Route.home:
      return createRouteGroup();
    case Route.aboutMe:
      return createRouteGroup();
    case Route.whatIDo:
      return createRouteGroup();
      case Route.generativeAlgorithm:
        return createRouteGroup(Route.engine);
      case Route.engine:
        return createRouteGroup(undefined, Route.generativeAlgorithm);
      default:
      return createRouteGroup();
  }
}
