import { FeaturedWork } from "@/components/featured-work"
import { HomeClient } from "./home-client"
import { db } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

async function getContent() {
  const docRef = doc(db, 'content', 'website');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const content = await getContent();

  if (!content) {
    return <div>Error loading content. Please try again later.</div>;
  }

  return (
    <>
      <HomeClient initialContent={content} />
      <FeaturedWork />
    </>
  );
}

