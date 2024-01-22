//import { promises as fs } from 'fs';
import reacherS02e01 from "@/json/english/reacher/s02e01.json";

export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/english/season/reacher/s02e01"){
    return Response.json(reacherS02e01);
  }
  return Response.json([]);
}