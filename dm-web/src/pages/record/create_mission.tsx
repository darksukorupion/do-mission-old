import Link from "next/link";
import { useState } from "react";
import { axiosInstance } from "../../utils/axios";
// import axios from "axios";
import { useRouter } from "next/router";

export default function CreateMission() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const router = useRouter();

  const onClick = async () => {
    await axiosInstance.post("/missions", { title, summary });
    router.push("/record");
  };

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>record/createです</h1>
        <p>
          新規ミッションの入力 / タイトル、概要を入力し、ミッション一覧に追加
        </p>

        <p>ミッションタイトル</p>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`border border-gray-400 w-1/3`}
          />
        </div>
        <p>概要</p>
        <div>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className={`border border-gray-400 w-1/3 h-32`}
          />
        </div>

        <div>
          <button
            onClick={onClick}
            className={`bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-400 duration-150`}
          >
            ミッションを作成する
          </button>
        </div>
        <div>
          <Link
            href="/"
            className={`mx-auto text-blue-600 hover:text-blue-400`}
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </>
  );
}
