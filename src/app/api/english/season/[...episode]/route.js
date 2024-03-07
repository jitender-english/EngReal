//import { promises as fs } from 'fs';

import tedLassoS01e01 from "@/json/english/season/ted-lasso/s01e01.json";

import dickTurpinS01e01 from "@/json/english/season/the-completely-made-up-adventures-of-dick-turpin/s01e01.json";
import dickTurpinS01e02 from "@/json/english/season/the-completely-made-up-adventures-of-dick-turpin/s01e02.json";

import earthsoundsS01e01 from "@/json/english/season/earthsounds/S01E01.json";
import earthsoundsS01e02 from "@/json/english/season/earthsounds/S01E02.json";
import earthsoundsS01e03 from "@/json/english/season/earthsounds/S01E03.json";
import earthsoundsS01e04 from "@/json/english/season/earthsounds/S01E04.json";
import earthsoundsS01e05 from "@/json/english/season/earthsounds/S01E05.json";
import earthsoundsS01e06 from "@/json/english/season/earthsounds/S01E06.json";
import earthsoundsS01e07 from "@/json/english/season/earthsounds/S01E07.json";
import earthsoundsS01e08 from "@/json/english/season/earthsounds/S01E08.json";
import earthsoundsS01e09 from "@/json/english/season/earthsounds/S01E09.json";
import earthsoundsS01e10 from "@/json/english/season/earthsounds/S01E10.json";
import earthsoundsS01e11 from "@/json/english/season/earthsounds/S01E11.json";
import earthsoundsS01e12 from "@/json/english/season/earthsounds/S01E12.json";

import forAllMankindS01e01 from "@/json/english/season/for-all-mankind/s01e01.json";
import forAllMankindS01e02 from "@/json/english/season/for-all-mankind/s01e02.json";
import forAllMankindS01e03 from "@/json/english/season/for-all-mankind/s01e03.json";

import constellationS01e01 from "@/json/english/season/constellation/s01e01.json";
import constellationS01e02 from "@/json/english/season/constellation/s01e02.json";
import constellationS01e03 from "@/json/english/season/constellation/s01e03.json";
import constellationS01e04 from "@/json/english/season/constellation/s01e04.json";
import constellationS01e05 from "@/json/english/season/constellation/s01e05.json";

import slowHorses01e01 from "@/json/english/season/slow-horses/S01E01.json";

import theNewLook01e01 from "@/json/english/season/the-new-look/S01E01.json";
import theNewLook01e02 from "@/json/english/season/the-new-look/S01E02.json";

import reacherS02e01 from "@/json/english/season/reacher/s02e01.json";
import reacherS02e02 from "@/json/english/season/reacher/s02e02.json";
import reacherS02e03 from "@/json/english/season/reacher/s02e03.json";
import reacherS02e04 from "@/json/english/season/reacher/s02e04.json";

import MastersOfTheAirs01e01 from "@/json/english/season/masters-of-the-air/S01E01.json";
import MastersOfTheAirs01e02 from "@/json/english/season/masters-of-the-air/S01E02.json";
import MastersOfTheAirs01e03 from "@/json/english/season/masters-of-the-air/S01E03.json";
import MastersOfTheAirs01e04 from "@/json/english/season/masters-of-the-air/S01E04.json";
import MastersOfTheAirs01e05 from "@/json/english/season/masters-of-the-air/S01E05.json";
import MastersOfTheAirs01e06 from "@/json/english/season/masters-of-the-air/S01E06.json";
import MastersOfTheAirs01e07 from "@/json/english/season/masters-of-the-air/S01E07.json";

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
  } else if(request.nextUrl.pathname === "/api/english/season/masters-of-the-air/S01E01"){
    return Response.json(MastersOfTheAirs01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/masters-of-the-air/S01E02"){
    return Response.json(MastersOfTheAirs01e02);
  } else if(request.nextUrl.pathname === "/api/english/season/masters-of-the-air/S01E03"){
    return Response.json(MastersOfTheAirs01e03);
  } else if(request.nextUrl.pathname === "/api/english/season/masters-of-the-air/S01E04"){
    return Response.json(MastersOfTheAirs01e04);
  } else if(request.nextUrl.pathname === "/api/english/season/masters-of-the-air/S01E05"){
    return Response.json(MastersOfTheAirs01e05);
  } else if(request.nextUrl.pathname === "/api/english/season/masters-of-the-air/S01E06"){
    return Response.json(MastersOfTheAirs01e06);
  } else if(request.nextUrl.pathname === "/api/english/season/masters-of-the-air/S01E07"){
    return Response.json(MastersOfTheAirs01e07);
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
  } else if(request.nextUrl.pathname === "/api/english/season/the-new-look/S01E01"){
    return Response.json(theNewLook01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/the-new-look/S01E02"){
    return Response.json(theNewLook01e02);
  } else if(request.nextUrl.pathname === "/api/english/season/slow-horses/S01E01"){
    return Response.json(slowHorses01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/constellation/s01e01"){
    return Response.json(constellationS01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/constellation/s01e02"){
    return Response.json(constellationS01e02);
  } else if(request.nextUrl.pathname === "/api/english/season/constellation/s01e03"){
    return Response.json(constellationS01e03);
  } else if(request.nextUrl.pathname === "/api/english/season/constellation/s01e04"){
    return Response.json(constellationS01e04);
  } else if(request.nextUrl.pathname === "/api/english/season/constellation/s01e05"){
    return Response.json(constellationS01e05);
  } else if(request.nextUrl.pathname === "/api/english/season/for-all-mankind/s01e01"){
    return Response.json(forAllMankindS01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/for-all-mankind/s01e02"){
    return Response.json(forAllMankindS01e02);
  } else if(request.nextUrl.pathname === "/api/english/season/for-all-mankind/s01e03"){
    return Response.json(forAllMankindS01e03);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E01"){
    return Response.json(earthsoundsS01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E02"){
    return Response.json(earthsoundsS01e02);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E03"){
    return Response.json(earthsoundsS01e03);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E04"){
    return Response.json(earthsoundsS01e04);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E05"){
    return Response.json(earthsoundsS01e05);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E06"){
    return Response.json(earthsoundsS01e06);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E07"){
    return Response.json(earthsoundsS01e07);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E08"){
    return Response.json(earthsoundsS01e08);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E09"){
    return Response.json(earthsoundsS01e09);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E10"){
    return Response.json(earthsoundsS01e10);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E11"){
    return Response.json(earthsoundsS01e11);
  } else if(request.nextUrl.pathname === "/api/english/season/earthsounds/S01E12"){
    return Response.json(earthsoundsS01e12);
  } else if(request.nextUrl.pathname === "/api/english/season/the-completely-made-up-adventures-of-dick-turpin/s01e01"){
    return Response.json(dickTurpinS01e01);
  } else if(request.nextUrl.pathname === "/api/english/season/the-completely-made-up-adventures-of-dick-turpin/s01e02"){
    return Response.json(dickTurpinS01e02);
  } else if(request.nextUrl.pathname === "/api/english/season/ted-lasso/s01e01"){
    return Response.json(tedLassoS01e01);
  } 

  return Response.json([]);
}