'use client'
import React, { useState,useEffect } from 'react'
import PageHeader from './PageHeader';
import PageLecture from './PageLecture';

function PgLecture() {
    // const [ page,setpage ] = useState(1)
    // const [ keyword,setKeyword ] = useState('')
    
    return (
        <>
            {/* <PageHeader title="Lectures" addUrl="/lectures/add" keyword={keyword} setKeyword={setKeyword}  /> */}
            {/* @ts-ignore */}
            <PageLecture  />
        </>
    )
}

export default PgLecture