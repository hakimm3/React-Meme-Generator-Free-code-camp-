import React, { useEffect } from "react";
import { useState } from "react";

import Image from "./Image";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemesData, setAllMemesData] = useState({});

  useEffect(() => {
    async function getData(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemesData(data)
    }
    getData()

  }, [])

  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemesData.data.memes.length);
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: allMemesData.data.memes[random].url
    }))
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  console.log(meme)

  return (
    <div>
      <div className="meme">
        <div className="group-input">
          <input onChange={handleChange} type="text" placeholder="Top Text" name="topText" value={meme.topText} />
          <input onChange={handleChange} type="text" placeholder="Bottom Text" name="bottomText" value={meme.bottomText} />
        </div>
        <button onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <Image topText={meme.topText} bottomText={meme.bottomText} src={meme.randomImage} />
    </div>
  );
}
