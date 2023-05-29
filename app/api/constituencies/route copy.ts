import { getPagination } from '@/utils/functions';
import { NextRequest, NextResponse } from 'next/server';
import db from '../../../supabase'
//const API = require("../../backend/model/apiModel");


export async function POST(req: NextRequest) {
  //const { id } = req.query
  // if(id) return API.fetchConstituencies(req,res)  // FETCH DATA BY STUDENTID
  // else return API.fetchConstituencies(req,res)  // FETCH ALL DATA
}

export async function GET(req: Request) {
  console.log(req.url);
  //const id = req.query?.id
  const id = 1, page = 1, keyword = 'ee';
  if (id) {

  } else {
    try {
      //const { page, keyword } = req.query
      const { from, to } = await getPagination(page, 10)
      const { data: et, count, error } = keyword
        ? await db
          .from('constituency')
          .select(`*,region:region(title),district:district(title)`, { count: "exact" })
          .or(`title.ilike.%${keyword}%,code.ilike.%${keyword}%`)
          .order("id", { ascending: true })
          .range(from, to)
        : await db
          .from('constituency')
          .select(`*,region:region(title),district:district(title)`, { count: "exact" }).order('id', { ascending: true })
          .order("id", { ascending: true })
          .range(from, to)
      if (et && et.length > 0) {
        return NextResponse.json({
          success: true,
          data: {
            data: et,
            count: count,
            //page: parseInt(page) || 0,
            page: 1,
            keyword: keyword
          }
        })

      } else {
        NextResponse.json({ success: false, data: null, msg: "No Data!" });
      }

    } catch (e) {
      console.log(e);
      NextResponse.json({ success: false, data: null, msg: "Please Check settings!" });
    }
  }
}

