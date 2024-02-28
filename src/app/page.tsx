'use client'

import Name from "./ui/name";
import { useContext } from "react";
import { FontsContext } from "./providers/fonts";
import Landing from "./ui/landing";
import Arrow from '@/app/ui/icons/arrow';
import { useRouter } from "next/navigation";
import useScrollEvent from "./hooks/useScrollEvent";
import { Route, getRouteGroup } from "@/lib/routeList";

export default function Home() {
  const fonts = useContext(FontsContext);
  const router = useRouter();
  const routeGroup = getRouteGroup(Route.home);

  useScrollEvent(() => {
    router.push(routeGroup.up)
  }, () => {
    router.push(routeGroup.down)
  }, true);

  return (<>
  <div>
    <Arrow width={"auto"} height={60} stroke="1pt" className='arrow absolute top left' onClick={() => router.push(routeGroup.up)}/>
    <Arrow width={"auto"} height={60} stroke="1pt" className='arrow  absolute bottom left mirror' onClick={() => router.push(routeGroup.down)}/>
    <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
    <Landing font={fonts.serif} />
  </div>
  </>
  );
}
