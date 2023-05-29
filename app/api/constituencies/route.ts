import { getPagination } from '@/utils/functions';
import { NextRequest, NextResponse } from 'next/server';
import API from "../../../backend/controller/apiController";


export async function POST(req: NextRequest) {
  //const { id } = req.query
  // if(id) return API.fetchConstituencies(req,res)  // FETCH DATA BY STUDENTID
  // else return API.fetchConstituencies(req,res)  // FETCH ALL DATA
}

export async function GET(req: NextRequest, context: unknown) {

  const id = req.nextUrl.searchParams.get('id'),
    page = req.nextUrl.searchParams.get('page') || '1',
    keyword = req.nextUrl.searchParams.get('keyword') || '';

  if (id) { // Fetch Single Constituency
    return await API.fetchConstituency(id);

  } else { // Fetch All Constituencies
    return await API.fetchConstituencies(keyword, page);
  }
}

