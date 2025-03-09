import CreatePost from "@/components/CreatePost";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Paintings";
import { api } from "@/consts";
import { Painting } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const addLatestPost = (post: Painting) => {
    setPaintings((prevPosts) => [...prevPosts, post]);
  };
  const [isAddingPainting, setIsAddingPainting] = useState<boolean>(false);

  const removePainting = (id: number) => {
    const filterPainting = paintings.filter((painting) => painting.id !== id);
    setPaintings(filterPainting);
  };

  useEffect(() => {
    fetch(`${api}`)
      .then((res) => res.json())
      .then((data) => setPaintings(data));
  }, []);
  return (
    <div className="text-5xl ">
      <Navbar setIsAddingPainting={setIsAddingPainting} />
      <Posts paintings={paintings} removePainting={removePainting} />
      {isAddingPainting && <CreatePost  setIsAddingPainting={ setIsAddingPainting} addLatestPost={addLatestPost} />}
    </div>
  );
}
