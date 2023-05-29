import React from 'react'
import CandidateFormPill from './CandidateFormPill'
import PollInput from './PollInput'
import ContentionInput from './ContentionInput'
import PinkSheetUpload from './PinkSheetUpload'

function ParliamentaryChip() {
  return (
    <div className="flex-1 flex flex-col space-y-2 rounded border border-green-300/20 ">
        <div className="px-6 py-2 bg-green-400/10">
            <span className="text-base text-green-100 font-semibold tracking-[0.2em]">PARLIAMENTARY</span>
        </div>
        <div className="m-2 px-4 py-4 grid grid-cols-1 gap-y-2 bg-green-300/5 rounded">
            <ContentionInput label="CONTENTION STATUS" hint="MULTIPLE SELECTION IS ALLOWED" name="contentions" register={null}/>
            <PinkSheetUpload label="PINK SHEET - PARLIAMENTARY" hint="UPLOAD CERTIFIED PINK SHEET IN PDF FORMAT" name="contentions" register={null}/>
        </div>
        <div className="m-2 px-4 py-4 grid grid-cols-1 gap-y-2 bg-green-300/5 rounded">
            <PollInput label="REGISTERED VOTERS" type="text" name="registered_voters" register={null} />
            <PollInput label="VOTER TURNOUT" type="text" name="registered_voters" register={null} />
            <PollInput label="TOTAL VOTES CAST" type="text" name="registered_voters" register={null} />
            <PollInput label="VALID VOTES" type="text" name="registered_voters" register={null} />
            <PollInput label="REJECTED VOTES" type="text" name="registered_voters" register={null} />
        </div>
        <div className="m-2 px-4 py-4 grid grid-cols-1 gap-y-2 bg-green-300/5 rounded">
            <CandidateFormPill candidate="JOHN KWEKUCHER ACKAH" number="1" name="2121" logo="ll" image="ll" register={null} />
            <CandidateFormPill candidate="PROSPER ADU-GYAMFI " number="2" name="2121" logo="ll" image="ll" register={null} />
            <CandidateFormPill candidate="AMINA BASHIRU HAYFORD" number="3" name="2121" logo="ll" image="ll" register={null} />
        </div>
    </div>
  )
}

export default ParliamentaryChip