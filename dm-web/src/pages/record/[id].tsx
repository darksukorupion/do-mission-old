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
      <article>
        <h1>{missionData.title}</h1>
        <div>
          <p>{missionData.summary}</p>
        </div>
      </article>
    </>
  );
}
