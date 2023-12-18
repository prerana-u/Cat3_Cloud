import React, { useState } from "react";
import GuideNavBar from "./DashboardNavBar";
// import { createClient } from "@supabase/supabase-js";
import Axios from 'axios';

export default function AddCases() {
  const [name, setname] = useState("");
  const [dor, setDor] = useState("");

  const [course, setcourse] = useState("");
  const [gender, setgender] = useState("");
  const [nationality, setnationality] = useState("");



  const insertData = (event) => {
    event.preventDefault();
 
       Axios.post("http://localhost:3001/insertdets", {
          Student_Name:name,
          Date_of_Birth:dor,  
          Course: course,
          Gender: gender,
          Nationality:nationality,
         
          
       }).then((response) => {
          console.log(response);
       
       });

    }

  return (
    <div className="ml-5">
      <GuideNavBar />
      <main id="main" className="main" style={{marginTop:"90px"}}>
        <div className="pagename">
          <h1>Get Student Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>

              <li className="breadcrumb-item active">Add Student Details</li>
            </ol>
          </nav>
        </div>
        {/* End Page name */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-11">
              <div className="card">
                <div className="card-body pt-3">
                 
                  <form className="pl-5 pr-5 pt-3 pb-3">
                    <div className="row mb-3">
                      <label
                        htmlFor="name"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Student Name
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          defaultValue=""
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="dateofrecord"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Date of Birth
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="dateofrecord"
                          type="date"
                          className="form-control"
                          id="dateofrecord"
                          defaultValue=""
                          onChange={(e) => {
                            setDor(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                
                    <div className="row mb-3">
                      <label
                        htmlFor="course"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Course
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="course"
                          type="text"
                          className="form-control"
                          id="course"
                          defaultValue=""
                          onChange={(e) => {
                            setcourse(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="gender"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                       Gender
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="gender"
                          type="text"
                          className="form-control"
                          id="nationality"
                          defaultValue=""
                          onChange={(e) => {
                            setgender(e.target.value);
                          }}
                        />
                      </div>
                    </div>

            

                    <div className="row mb-3">
                      <label
                        htmlFor="nationality"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Nationality
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="nationality"
                          type="text"
                          className="form-control"
                          id="nationality"
                          defaultValue=""
                          onChange={(e) => {
                            setnationality(e.target.value);
                          }}
                        />
                      </div>
                    </div>

        

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn col-md-8 mt-4"
                        style={{
                          backgroundColor: "#012971",
                          color: "white",
                        }}
                        onClick={(e)=>{insertData(e)}}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  {/* End Profile Edit Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
