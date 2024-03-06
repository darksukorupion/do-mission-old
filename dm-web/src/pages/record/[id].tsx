import Link from "next/link";
import { axiosInstance } from "../../utils/axios";

type Missions = {
  id: number;
  user_id: number | null;
  title: string;
  summary: string;
  created_at: Number;
  update_at: Number;
};

const getAllMissionIds = async () => {
  const res = await axiosInstance.get("/missions");
  const missions: Missions[] = res.data;
  return missions.map((mission) => {
    return {
      params: {
        id: mission.id.toString(),
      },
    };
  });
};

type test = {
  (id: number): Missions;
};

type Params = {
  params: { id: number };
};

export async function getStaticProps({ params }: Params) {
  const res = await axiosInstance.get(`/missions/${params.id}`);
  const missionData: Missions = res.data;
  return {
    props: {
      missionData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllMissionIds();
  return {
    paths,
    fallback: false,
  };
}

export default function RecordShow({ missionData }: { missionData: Missions }) {
  return (
    <>
      <div className={`text-2xl font-bold text-center space-y-4 pt-10`}>
        <h1 className={`text-4xl`}>record/[id]です</h1>
        <p>ミッションの詳細の表示</p>

        <div className={``}>
          <div className={``}>
            <p>タイトル</p>
            <p className={``}>{missionData.title}</p>
          </div>

          <div className={``}>
            <p>サマリー</p>
            <p>{missionData.summary}</p>
          </div>
        </div>
        <div>
          <Link
            href="/record"
            className={`mx-auto text-blue-600 hover:text-blue-400`}
          >
            戻る
          </Link>
        </div>
      </div>
    </>
  );
}
