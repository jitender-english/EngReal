//import { promises as fs } from 'fs';
import lesson01 from "@/json/lesson-01.json";
export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/lesson-01") {
    return Response.json(lesson01);
  }
  return Response.json([]);
}