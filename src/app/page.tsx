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

  useScrollEvent({pageUp: () => {router.push(routeGroup.up)}, pageDown: () => {router.push(routeGroup.down)}});

  return (<>
  <div>
    <Arrow width={"auto"} height={60} stroke="1pt" orientation='up' className='arrow absolute top left' onClick={() => router.push(routeGroup.up)}/>
    <Arrow width={"auto"} height={60} stroke="1pt" orientation='down' className='arrow  absolute bottom left' onClick={() => router.push(routeGroup.down)}/>
    <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
    <Landing font={fonts.serif} />
  </div>
  </>
  );
}
