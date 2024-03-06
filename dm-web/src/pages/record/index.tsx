import Link from "next/link";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios";

export default function RecodeHome() {
  const [missions, setMissions] = useState<any>();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get("/missions");
      setMissions(res.data);
    };
    f();
  }, []);

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>record/indexです</h1>
        <p className={``}>ミッションの一覧 / 新規作成画面へのリンク</p>
        <div>
          <Link
            href="/record/create_mission"
            className={`mx-auto text-blue-600 hover:text-blue-400`}
          >
            ミッションを新規作成
          </Link>
        </div>
        <div>
          <p className={`mt-10`}>ミッション一覧</p>
          <ul>
            {missions?.map((mission: any) => (
              <Link
                href={`/record/${mission.id}`}
                key={mission.id}
                className={`mx-auto text-blue-600 hover:text-blue-400`}
              >
                <li>{mission.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
