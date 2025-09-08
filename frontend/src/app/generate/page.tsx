// app/generate/page.tsx
"use client";

import { useEffect, useState } from "react";

type Art = { id: string; src: string; label: string };

const ARTS: Art[] = [
  { id: "a", src: "", label: "画像1" },
  { id: "b", src: "", label: "画像2" },
  { id: "c", src: "", label: "画像3" },
];

const GeneratePage = () => {

  const [selectedArtId, setSelectedArtId] = useState<string | null>(ARTS[0]?.id ?? null);
  const [userImageUrl, setUserImageUrl] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (userImageUrl) URL.revokeObjectURL(userImageUrl);
    };
  }, [userImageUrl]);


  const onUserFile = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    if (userImageUrl) URL.revokeObjectURL(userImageUrl);
    setUserImageUrl(url);
  };

  const generate = async () => {
    alert('wiiiiiiiiiii')
  }

  return (
    <main>
      <section>
        <h1>画像生成</h1>
        <div>
          <p>画像をアップロードしてネ~</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onUserFile(e.target.files)}
          />
          {userImageUrl && (
            <div>
              <img src={userImageUrl} alt="uploaded" width={240} />
            </div>
          )}
        </div>
        <div>
          <button type="button" onClick={generate}>
            生成
          </button>
        </div>
        <div>
          <p>生成結果</p>
          <canvas style={{ maxWidth: 480, width: "100%", border: "1px solid #ccc" }} />
        </div>
        <div>
          <p>アート画像を選択：</p>
            {ARTS.map((a) => (
              <li key={a.id}>
                <label>
                  <input
                    type="radio"
                    name="art"
                    value={a.id}
                    checked={selectedArtId === a.id}
                    onChange={() => setSelectedArtId(a.id)}
                  />
                  {a.label}
                </label>
              </li>
            ))}
        </div>
      </section>
    </main>
  );
}

export default GeneratePage;