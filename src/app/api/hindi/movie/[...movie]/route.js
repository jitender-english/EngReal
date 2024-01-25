//import { promises as fs } from 'fs';
import starfish from "@/json/hindi/movie/starfish.json";

export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/hindi/movie/starfish"){
    return Response.json(starfish);
  }

  return Response.json([]);
}