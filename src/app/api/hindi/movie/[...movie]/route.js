//import { promises as fs } from 'fs';

import tiger3 from "@/json/hindi/movie/tiger-3-2023.json";
import starfish from "@/json/hindi/movie/starfish-2023.json";
import shastryVirudhShastry from "@/json/hindi/movie/shastry-virudh-shastry-2023.json";
import MissionRaniganj2023 from "@/json/hindi/movie/Mission-Raniganj-2023.json";


export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/hindi/movie/starfish-2023"){
    return Response.json(starfish);
  } else if(request.nextUrl.pathname === "/api/hindi/movie/shastry-virudh-shastry-2023"){
    return Response.json(shastryVirudhShastry);
  } else if(request.nextUrl.pathname === "/api/hindi/movie/tiger-3-2023"){
    return Response.json(tiger3);
  } else if(request.nextUrl.pathname === "/api/hindi/movie/Mission-Raniganj-2023"){
    return Response.json(MissionRaniganj2023);
  }

  return Response.json([]);
}