'use client'

import Name from "./ui/name";
import { useContext } from "react";
import { FontsContext } from "./providers/fonts";
import Landing from "./ui/landing";
import Arrow from '@/app/ui/icons/arrow';
import { useRouter } from "next/navigation";
import useScrollEvent from "./hooks/useScrollEvent";

export default function Home() {
  const fonts = useContext(FontsContext);
  const router = useRouter();

  useScrollEvent(() => {
    router.push('/about-me')
  }, undefined, true);

  return (<>
  <div>
    <Arrow width={"auto"} height={60} stroke="1pt" className='arrow absolute top left' onClick={() => router.push('/about-me')}/>
    <Arrow width={"auto"} height={60} stroke="1pt" className='arrow  absolute bottom left mirror' />
    <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
    <Landing font={fonts.serif} />
  </div>
  </>
  );
}
