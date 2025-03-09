import { api } from "@/consts";
import { Painting } from "@/types";
import React, { useState } from "react";

interface Props {
  addLatestPost: (post: Painting) => void;
  setIsAddingPainting: (value: boolean) => void;
}

const CreatePost = ({ addLatestPost, setIsAddingPainting }: Props) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [image, setImage] = useState<string>(
    `https://picsum.photos/seed/${Date.now()}/200/300`
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreate = async () => {
    if (!name || !description || price === null || !image) {
      setErrorMessage("PLEASE FILL ALL THE FIELDS");
      return;
    }

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      });

      const data = await response.json();
      console.log(data, "CURRENT DATA ");
      addLatestPost(data);

      setName("");
      setDescription("");
      setPrice(null);
      setImage("");
      setIsAddingPainting(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-gray-500 rounded-3xl p-4 w-3/4 sm:w-1/2 md:w-1/3 mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="text-center text-2xl  text-gray-50 mb-2">
              NAME
            </label>
            <input
              className="rounded-3xl border-2 border-white "
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center mb-2  text-2xl  text-gray-50">
              Description
            </label>
            <input
              type="text"
              className="border-2 rounded-3xl border-white px-5"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center mb-2  text-2xl  text-gray-50">
              PRICE
            </label>
            <input
              type="number"
              className="border-2 rounded-3xl border-white px-5"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-center mb-2  text-2xl  text-gray-50">
              IMAGE URL
            </label>
            <input
              type="text"
              placeholder="Your dummy painting will be created automatically"
              disabled
              className="rounded-3xl border-2 placeholder:text-2xl placeholder:text-red-500   border-white px-5"
            />
          </div>
          <div className="text-center mt-4 space-x-4">
            <button
              onClick={handleCreate}
              className="bg-green-500 rounded-3xl px-6 py-2 text-2xl text-white"
            >
              SUBMIT
            </button>
            <button
              onClick={() => setIsAddingPainting(false)}
              className="bg-red-500 text-white py-2 px-6 text-2xl rounded-full"
            >
              Exit
            </button>
          </div>
          <h2 className="text-red-500 mt-3 text-center">{errorMessage}</h2>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
