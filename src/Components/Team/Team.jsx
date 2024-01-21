import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Team = () => {
    const axiosSecure=useAxiosSecure();
    const [teams, setTeams]=useState([]);    
    useEffect(()=>{
            axiosSecure.get(`/team`)
                .then(res=>{
                    setTeams(res.data);
                })

    },[axiosSecure])
    return (
        <div>
            <h1 className="text-5xl text-center text-purple-600 font-bold my-24">Our Team Members </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    teams.map(team=><TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;