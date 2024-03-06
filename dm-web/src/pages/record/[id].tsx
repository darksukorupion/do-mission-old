import Link from "next/link";
import { axiosInstance } from "../../utils/axios";

const getAllMissionIds = async () => {
  const res = await axiosInstance.get("/missions");
  const missions = res.data;
  return missions.map((mission) => {
    return {
      params: {
        id: mission.id.toString(),
      },
    };
  });
};

export async function getStaticProps({ params }) {
  const res = await axiosInstance.get(`/missions/${params.id}`);
  const missionData = res.data;
  console.log("getStaticPropsを実行しました");
  console.log(missionData);
  return {
    props: {
      missionData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllMissionIds();
  console.log("getStaticPathsを実行しました");
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default function RecordShow({ missionData }) {
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
