import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/client";
import MaterialTable from "material-table";

export default function Home() {
  const [session, loading] = useSession();
  const [projects, setProjects] = useState([])
  const getProjects = async () => {
    try {
      const res = await axios.get("api/getProjects");
      setProjects(res.data.map(item => ({...item, counts: item.analyzer.length})));
      console.log(res.data)
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MaterialTable
      style={{marginTop:"3rem", background:"rgba(255,255,255,0.8)", borderRadius:"0", boxShadow: "none"}}
          columns={[
            { title: "Projekt", field: "name" },
            { title: "Erstellt", field: "createdAt", type: "datetime" },
            { title: "# Geräte", field: "counts", type: "numeric" },
          ]}
          data={projects}
          title="Projekte"
        />
    </div>
  );
}
