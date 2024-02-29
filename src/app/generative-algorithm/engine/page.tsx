'use client'

import useScrollEvent from '@/app/hooks/useScrollEvent';
import { getRouteGroup, Route } from '@/lib/routeList';
import { useRouter } from 'next/navigation';
import React from 'react'

function Engine() {
  const router = useRouter();
  const routeGroup = getRouteGroup(Route.engine);
  useScrollEvent({
    pageLeft: () => {router.push(routeGroup.left)}});

  return (
    <div>Engine</div>
  )
}

export default Engine