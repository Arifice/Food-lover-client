import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
    const [teams, setTeams]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/team')
            .then(res=>res.json())
            .then(data=>{
                setTeams(data);
            })
    },[])
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