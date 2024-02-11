//import { promises as fs } from 'fs';
import lesson01 from "@/json/lesson-01.json";
import lesson02 from "@/json/lesson-02.json";
import lesson03 from "@/json/lesson-03.json";
import lesson04 from "@/json/lesson-04.json";
import lesson05 from "@/json/lesson-05.json";
import lesson06 from "@/json/lesson-06.json";
import lesson07 from "@/json/lesson-07.json";
import lesson0107 from "@/json/lesson-01-07.json";
import lesson08 from "@/json/lesson-08.json";
import lesson0811 from "@/json/lesson-08-11.json";
import lesson09 from "@/json/lesson-09.json";
import lesson10 from "@/json/lesson-10.json";
import lesson11 from "@/json/lesson-11.json";
import lesson12 from "@/json/lesson-12.json";
import lesson1215 from "@/json/lesson-12-15.json";
import lesson13 from "@/json/lesson-13.json";
import lesson14 from "@/json/lesson-14.json";
import lesson15 from "@/json/lesson-15.json";
import tensesActiveVoice from "@/json/lesson-test-tenses-active-voice.json";


export async function GET(request, {episode}) {
  //console.log('request.url.pathname6', request.nextUrl.pathname);
  //const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  
  if(request.nextUrl.pathname === "/api/lesson-01") {
    return Response.json(lesson01);
  } else if(request.nextUrl.pathname === "/api/lesson-01-07") {
    return Response.json(lesson0107);
  }  else if(request.nextUrl.pathname === "/api/lesson-02") {
    return Response.json(lesson02);
  } else if(request.nextUrl.pathname === "/api/lesson-03") {
    return Response.json(lesson03);
  } else if(request.nextUrl.pathname === "/api/lesson-04") {
    return Response.json(lesson04);
  } else if(request.nextUrl.pathname === "/api/lesson-05") {
    return Response.json(lesson05);
  } else if(request.nextUrl.pathname === "/api/lesson-06") {
    return Response.json(lesson06);
  } else if(request.nextUrl.pathname === "/api/lesson-07") {
    return Response.json(lesson07);
  } else if(request.nextUrl.pathname === "/api/lesson-08") {
    return Response.json(lesson08);
  } else if(request.nextUrl.pathname === "/api/lesson-08-11") {
    return Response.json(lesson0811);
  } else if(request.nextUrl.pathname === "/api/lesson-09") {
    return Response.json(lesson09);
  } else if(request.nextUrl.pathname === "/api/lesson-10") {
    return Response.json(lesson10);
  } else if(request.nextUrl.pathname === "/api/lesson-11") {
    return Response.json(lesson11);
  } else if(request.nextUrl.pathname === "/api/lesson-12") {
    return Response.json(lesson12);
  } else if(request.nextUrl.pathname === "/api/lesson-12-15") {
    return Response.json(lesson1215);
  }  else if(request.nextUrl.pathname === "/api/lesson-13") {
    return Response.json(lesson13);
  } else if(request.nextUrl.pathname === "/api/lesson-14") {
    return Response.json(lesson14);
  } else if(request.nextUrl.pathname === "/api/lesson-15") {
    return Response.json(lesson15);
  } else if(request.nextUrl.pathname === "/api/lesson-test-tenses-active-voice") {
    return Response.json(tensesActiveVoice);
  }
  return Response.json([]);
}