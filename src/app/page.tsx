//import Link from "next/link";

//import { CreatePost } from "~/app/_components/create-post";
"use client";
import { api } from "~/trpc/server";
import Navbar from "../components/navbar";

export default function Home() {
  //const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main>
      <Navbar />
    </main>
  );
}

/*
async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
*/
