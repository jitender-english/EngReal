//import { promises as fs } from 'fs';

import TheFaultInOurStars2014 from "@/json/english/movie/The-Fault-In-Our-Stars-2014.json";

export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/english/movie/The-Fault-In-Our-Stars-2014"){
    return Response.json(TheFaultInOurStars2014);
  }

  return Response.json([]);
}