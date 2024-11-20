import { Router } from "next/router";
import { Route } from "./routeList";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

/**
 * https://stackoverflow.com/a/52827031/778272
 * @returns {Boolean} true if system is big endian */
const isBigEndian = (() => {
  const array = new Uint8Array(4);
  const view = new Uint32Array(array.buffer);
  return !((view[0] = 1) & array[0]);
})();
console.info("Endianness: " + (isBigEndian ? "big" : "little"));

const rgbToVal = isBigEndian ?
  (r: number, g: number, b: number) => ((r << 24) | (g << 16) | (b << 8) | 0xff) >>> 0:
  (r: number, g: number, b: number) => ((0xff << 24) | (b << 16) | (g << 8) | r) >>> 0;

function readCssVar(varName: string) {
  varName = varName.startsWith("--") ? varName : "--" + varName;
  return window.getComputedStyle(document.documentElement).getPropertyValue(varName);
}

function readCssVarAsHexNumber(varName: string) {
  const strValue = readCssVar(varName);
  return strValue ? parseInt(strValue.replace(/[^a-fA-F0-9]/g, ""), 16) : null;
}

function cssColorToColor(cssColor: number) {
  return rgbToVal(cssColor >>> 16 & 0xff, cssColor >>> 8 & 0xff, cssColor & 0xff);
}

class Debouncer {
  timer: NodeJS.Timeout | null = null;
  constructor () { this.timer = null; }
  set(task: () => void, delay: number) {
      if (this.timer) {
          clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
          this.timer = null;
          task();
      }, delay);
  }
}

export {
  isBigEndian,
  rgbToVal,
  readCssVarAsHexNumber,
  cssColorToColor,
  Debouncer,
};

export function goBack(router: AppRouterInstance, firstDelay: number, secondDelay: number, route: Route) {
  setTimeout(() => {
    router.push('/');
    setTimeout(() => {
      router.push(route, {scroll: true});
    }, secondDelay);
  }, firstDelay);
}