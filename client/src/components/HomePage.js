import React, { useState, useEffect } from "react";

import PostsCard from "./PostsCard";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Axios from 'axios';
export default function HomePage() {

 const [studets, setStudets]=useState([]);


  const fetchdata = () => {
    Axios.get("http://localhost:3001/getdets", {
        
    }).then((response) => {

      setStudets(response.data);
 
    //console.log(response);
    console.log(response.data);
})

}



  // const fetchdata = async () => {
  //   let { data: Blogs, error } = await supabase
  //     .from("Blogs")
  //     .select("*")
  //     .ilike('keyword', '%'+keyword+'%');

  //   setPostDets(Blogs);
  //   console.log(postDets);
  // };

  useEffect(() => {
    fetchdata();
    console.log(studets);
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <h1>University Dashboard!</h1>
            <h2><b>View all details</b></h2>
          </div>
          <button
                            className="btn"
                            type="button"
                            style={{
                              backgroundColor: "#199ca9",
                              color: "white",
                              padding:"10px",
                              paddingRight:'20px',
                              paddingLeft:'20px'
                            }}
                           
                          >
                            <a href="#postsection" style={{color: "white"}}>View Student 
                            Data</a>
                            
                          </button>
        </div>
      </section>
      <section
        id="postsection"
        className="d-flex align-items-center"
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ margin: "20px" }}>
          <div>
            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <h2>View Data</h2>

            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                id:"datad",
                flexDirection: "row-reverse",
                alignItems: "right",
              }}
            ></div>
          </div>
          <br />
          <div className="d-flex flex-row gap-4 flex-wrap">
            {studets.map((item, key) => {
              return (
                <PostsCard
                
                  title={item.name}
                  gender={item.gender}
                  course={item.course}
                  dob={item.dob}
                  nationality={item.nationality}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
