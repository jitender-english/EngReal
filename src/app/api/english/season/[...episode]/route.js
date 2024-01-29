//import { promises as fs } from 'fs';
import reacherS02e01 from "@/json/english/season/reacher/s02e01.json";
import reacherS02e02 from "@/json/english/season/reacher/s02e02.json";
import reacherS02e03 from "@/json/english/season/reacher/s02e03.json";
import reacherS02e04 from "@/json/english/season/reacher/s02e04.json";
import criminalRecordS01e01 from "@/json/english/season/criminal-record/s01e01.json";
import criminalRecordS01e02 from "@/json/english/season/criminal-record/s01e01.json";
import siloS01E01 from "@/json/english/season/silo/S01E01.json";
import siloS01E02 from "@/json/english/season/silo/S01E01.json";
import siloS01E03 from "@/json/english/season/silo/S01E01.json";

export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/english/season/reacher/s02e01"){
    return Response.json(reacherS02e01);
  } else if(request.nextUrl.pathname === "/api/english/season/reacher/s02e02"){
    return Response.json(reacherS02e02);
  } else if(request.nextUrl.pathname === "/api/english/season/reacher/s02e03"){
    return Response.json(reacherS02e03);
  } else if(request.nextUrl.pathname === "/api/english/season/reacher/s02e04"){
    return Response.json(reacherS02e04);
  } else if(request.nextUrl.pathname === "/api/english/season/criminal-record/s01e01"){
    return Response.json(criminalRecordS01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/criminal-record/s01e02"){
    return Response.json(criminalRecordS01e02);
  } else if(request.nextUrl.pathname === "/api/english/season/silo/S01E01"){
    return Response.json(siloS01E01);
  } else if(request.nextUrl.pathname === "/api/english/season/silo/S01E02"){
    return Response.json(siloS01E02);
  } else if(request.nextUrl.pathname === "/api/english/season/silo/S01E03"){
    return Response.json(siloS01E03);
  } 

  return Response.json([]);
}