"use client"
import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

const AdminPage = () => {
  return (
      <div className="flex w-auto">
      <NextStudio config={config}/>
      </div>
  )
}
export default AdminPage