import { promises as fs } from 'fs';

export async function GET(request, {episode}) {
  console.log('request.url.pathname4', request.nextUrl.pathname);
  const file = await fs.readFile(process.cwd()+'/src/app'+request.nextUrl.pathname+'.json', 'utf8');
  return Response.json(JSON.parse(file));
}