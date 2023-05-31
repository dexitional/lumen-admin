import { appwriteDB as db } from "@/appwrite"
import { Query, ID } from 'node-appwrite'
import { Queue } from 'async-await-queue';

const mainQueue = new Queue(1, 100);
const { APPWRITE_DATABASE_ID } = process.env;


export const getUser = async (username: string, password: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '646e2249de49cf858041', [
      Query.equal("username", username.toString()),
      Query.equal("password", password.toString()),
    ])
    return res;
}


// Lecture Queries
export const fetchLectures = async (keyword: string , page: string) => {
    const res = keyword 
        ? await db.listDocuments(APPWRITE_DATABASE_ID!, '6464df0a38416f025fc7',[
            Query.search("course", keyword)
        ])
        : await db.listDocuments(APPWRITE_DATABASE_ID!, '6464df0a38416f025fc7');
        
    //Query.search("text", "key words")
    //const lastId = page1.documents[page1.documents.length - 1].$id;

    return res;
}

export const fetchLecture = async (serial: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '6464df0a38416f025fc7', [
        Query.equal("course", serial),
    ])
    return res;
}

export const postLecture = async (body: object) => {
    const res = await db.createDocument(APPWRITE_DATABASE_ID!, '6464df0a38416f025fc7', ID.unique(), body);
    return res;
}


export const updateLecture = async (serial: string, body: object) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '6464df0a38416f025fc7', [
        Query.equal("serial", serial.toString()),
    ])
    return res;
}

export const deleteLecture = async (serial: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '6464df0a38416f025fc7', [
        Query.equal("serial", serial.toString()),
    ])
    return res;
}


// Helper Queries
export const fetchPositions = async () => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '646e226d756c832acd9e')
    return res;
}

export const fetchCgpa = async (tag: string) => {
    try {
    //   const resp = await fetch(`${process.env.NEXT_PUBLIC_IMAGE_URL}/api/sso/identity?search=${encodeURIComponent(tag)}`)
    //   const response = await resp.json()
    //   return response;
      return '3.5'
    } catch (error) {
      console.log(error)
      return null
    }
}

export const fetchBio = async (tag: string) => {
    try {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_IMAGE_URL}/api/sso/identity?search=${encodeURIComponent(tag)}`)
        const response = await resp.json()
        return response;
    } catch (error) {
        console.log(error)
        return null
    }
}


// Voter Register Queries
export const fetchRegister = async (id: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '645b562c59f8241f270b')
    return res;
}

// Vetting Queries
export const fetchVettingResult = async (id: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '645b562c59f8241f270b')
    return res;
}

// SMS System Queries
export const fetchSmsAccount = async (id: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '645b562c59f8241f270b')
    return res;
}

export const fetchSmsHistory = async (id: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '645b562c59f8241f270b')
    return res;
}

export const fetchSmsTopup = async (id: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '645b562c59f8241f270b')
    return res;
}

export const fetchSmsGroup = async (id: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '645b562c59f8241f270b')
    return res;
}

export const fetchSmsSenderId = async (id: string) => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '645b562c59f8241f270b')
    return res;
}



// SETUP COLLECTIONS

export const setupCourses = async (data: any) => {
    try {
       let count = 0;
        for (const row of data) {
            mainQueue.run(async () => {
                const res = await db.createDocument(APPWRITE_DATABASE_ID!, '6467ff2717916c0a710c', ID.unique(), row);
                count++;
                //if (count % 1000 == 0)  await new Promise(resolve => setTimeout(resolve, 1000));
                console.log(`count: ${count} out of  ${data.length}`)
            })
        }   return count;
    } catch (e) {
        console.log(e)
        return null
    }
}


export const setupVenues = async (data: any) => {
    try {

        const locations = new Map()
        const venues = new Map()
        const md = await Promise.all(data.map(async (row: any, i: number) => {
             
             if(!locations.has(row.shorthand)){
                locations.set(row.shorthand, { shorthand: row.shorthand, name: row.location_name })
                const res = await db.createDocument(APPWRITE_DATABASE_ID!, '6464dd203db9635d5c5e', ID.unique(), {
                    name: row.location_name,
                    shorthand: row.shorthand
                });
                locations.set(row.shorthand, { shorthand: row.shorthand, name: row.location_name, locationId: res.$id })
             }

             if(!venues.has(row.venue_name)){
                venues.set(row.venue_name, { name: row.venue_name, locationId: null, shorthand: row.shorthand })
             }
        }))

        venues.forEach(async (_,key) => {
             const row = venues.get(key);
             const rowData = { ...row, locationId: locations.get(row.shorthand).locationId }
             delete rowData.shorthand
             console.log(rowData)
             const res1 = await db.createDocument(APPWRITE_DATABASE_ID!, '6464de98857b29c0ab93', ID.unique(), rowData);
        })

        return { locations: Object.fromEntries(locations), venues: Object.fromEntries(venues) }
    } catch (e) {
        console.log(e)
        return null
    }
}


export const deleteCourses = async () => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '6467de30d7bdae30a42c')
    for(const row of res.documents){
        console.log(row)
        const m = await db.deleteDocument(APPWRITE_DATABASE_ID!, 'v6467de30d7bdae30a42c', row.$id)
        console.log(m)
    }
    return res;
}



export const fetchTest = async () => {
    const res = await db.listDocuments(APPWRITE_DATABASE_ID!, '6467de30d7bdae30a42c', [
        //Query.equal("$id",'646638ae631e9896529f'),
        Query.equal("code", 'INF399D'),
    ])
    return res;
}


