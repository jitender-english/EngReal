//import { promises as fs } from 'fs';

import theFamilyPlan2023 from "@/json/english/movie/the.family.plan.2023.json";
import ThisIsMeNow2024 from "@/json/english/movie/this-is-me-now-2024.json";
import TheFaultInOurStars2014 from "@/json/english/movie/The-Fault-In-Our-Stars-2014.json";
import orionAndTheDark2024 from "@/json/english/movie/orion-and-the-dark-2024.json";
import upgraded2024 from "@/json/english/movie/upgraded-2024.json";
import luck2022 from "@/json/english/movie/luck-2022.json";


export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/english/movie/The-Fault-In-Our-Stars-2014"){
    return Response.json(TheFaultInOurStars2014);
  } else if(request.nextUrl.pathname === "/api/english/movie/orion-and-the-dark-2024"){
    return Response.json(orionAndTheDark2024);
  } else if(request.nextUrl.pathname === "/api/english/movie/upgraded-2024"){
    return Response.json(upgraded2024);
  } else if(request.nextUrl.pathname === "/api/english/movie/this-is-me-now-2024"){
    return Response.json(ThisIsMeNow2024);
  } else if(request.nextUrl.pathname === "/api/english/movie/the-family-plan-2023"){
    return Response.json(theFamilyPlan2023);
  } else if(request.nextUrl.pathname === "/api/english/movie/luck-2022"){
    return Response.json(luck2022);
  }

  return Response.json([]);
}