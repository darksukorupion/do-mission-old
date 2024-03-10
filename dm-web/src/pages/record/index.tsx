import Link from "next/link";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../utils/axios";

type Missions = {
  id: number;
  user_id: number | null;
  title: string;
  summary: string;
  created_at: Number;
  update_at: Number;
};

export default function RecodeHome() {
  const [missions, setMissions] = useState<Missions[]>();
  const [date, setDate] = useState();
  const [deadLine, setDeadLine] = useState();
  const [remain, setRemain] = useState();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get("/missions");
      setMissions(res.data.missions);
      setDate(res.data.date);
      setDeadLine(res.data.dead_line);
      setRemain(res.data.remain);
      console.log(missions);
      console.log(date);
    };
    f();
  }, []);

  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>record/indexです</h1>
        <h1>{date}</h1>
        <h1>{deadLine}</h1>
        <h1>{remain}</h1>
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
            {missions?.map((mission) => (
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
