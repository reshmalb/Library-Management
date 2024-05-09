import React, { useContext, useEffect, useState } from "react";
import "../AdminDashboard/AdminDashboard.css";
import "./MemberDashboard.css";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookIcon from "@material-ui/icons/Book";
import HistoryIcon from "@material-ui/icons/History";
import Calendar from "@material-ui/icons/CalendarToday";
import Users from "@material-ui/icons/VerifiedUser";
import Message from "@material-ui/icons/Message";
import Attendance from "@material-ui/icons/CalendarTodayRounded";
import Assignment from "@material-ui/icons/Assignment";
import Homeworks from "@material-ui/icons/Receipt";
import Seminar from "@material-ui/icons/Receipt";
import Exam from "@material-ui/icons/Receipt";
import Examtimetable from "@material-ui/icons/Receipt";
import Markscard from "@material-ui/icons/Receipt";
import Notice from "@material-ui/icons/Receipt";
import Fee from "@material-ui/icons/Receipt";
import Leavereport from "@material-ui/icons/Receipt";
import Dailyreport from "@material-ui/icons/Receipt";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import CloseIcon from "@material-ui/icons/Close";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { IconButton } from "@material-ui/core";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import moment from "moment";
import { Home } from "@material-ui/icons";
import Mycalendar from "./Components/Mycalendar";
import Userslist  from "./Components/Users";
import Chatmessage from "./Components/Messages";
import Attendancecom from "./Components/Attendance";
import Assignmentcom from "./Components/Assignments";
import Seminarcom from "./Components/Seminar";
import Homeworkcom from "./Components/Homeworks";
import Examcom from "./Components/Exam";
import Examtimetablecom from "./Components/Examtimetable";
import Feecom from "./Components/Fee";
import Markcard from "./Components/Markcard";
import Noticecom from "./Components/Notice";
import Leavereportcom from "./Components/Leavereport";
import Dailyreportcom from "./Components/Dailyreport";


function MemberDashboard() {
  const [active, setActive] = useState("profile");
  const [sidebar, setSidebar] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(AuthContext);
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const response = await axios.get(
          API_URL + "api/users/getuser/" + user._id
        );
        setMemberDetails(response.data);
      } catch (err) {
        console.log("Error in fetching the member details");
      }
    };
    getMemberDetails();
  }, [API_URL, user]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="sidebar-toggler" onClick={() => setSidebar(!sidebar)}>
          <IconButton>
            {sidebar ? (
              <CloseIcon style={{ fontSize: 25, color: "rgb(234, 68, 74)" }} />
            ) : (
              <DoubleArrowIcon
                style={{ fontSize: 25, color: "rgb(234, 68, 74)" }}
              />
            )}
          </IconButton>
        </div>
        <div
          className={sidebar ? "dashboard-options active" : "dashboard-options"}
        >
          <div className="dashboard-logo">
            <LibraryBooksIcon style={{ fontSize: 50 }} />
            <p className="logo-name">LCMS</p>
          </div>
          <a
            href="#profile@member"
            className={`dashboard-option ${
              active === "profile" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("profile");
              setSidebar(false);
            }}
          >
            <AccountCircleIcon className="dashboard-option-icon" /> Profile
          </a>
          <a
            href="#activebooks@member"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("active");
              setSidebar(false);
            }}
          >
               
         
          <LocalLibraryIcon className="dashboard-option-icon" /> Active
         </a>
         <a
            href="#activeschedules@member"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("calendar");
              setSidebar(false);
            }}>
         <Calendar className="dashboard-option-icon"/>Calendar
         </a>
         <a
            href="#activeusers@staff"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              if(user.userType=="Student"){
                alert("Not Accssible");
              }
              else{
              setActive("students");
              setSidebar(false);
              }
            }}>
          <Users className="dashboard-option-icon" />Students
          </a>
          <a
            href="#activeusers@messages"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              
                setActive("messages");
                setSidebar(false);
              
              
            }}>
          <Message className="dashboard-option-icon"/>Messages
          </a>
          <a
            href="#activeusers@attendance"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("attendance");
              setSidebar(false);
            }}>
          <Attendance className="dashboard-option-icon"/>Attendance
          </a>
          <a
            href="#activeusers@assignments"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("assignment");
              setSidebar(false);
            }}>
              <Assignment className="dashboard-option-icon"/>Assignment
              </a>
              <a
            href="#activeusers@seminar"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("seminar");
              setSidebar(false);
            }}>
              <Seminar className="dashboard-option-icon"/>Seminar
              </a>
              <a
            href="#activeusers@homeworks"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("homeworks");
              setSidebar(false);
            }}>
              <Homeworks className="dashboard-option-icon"/>Homeworks
              </a>
              <a
            href="#activeusers@exam"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("exam");
              setSidebar(false);
            }}>
              <Exam className="dashboard-option-icon"/>Exam
              </a>
              <a
            href="#activeusers@examtimetable"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("examtimetable");
              setSidebar(false);
            }}>
              <Examtimetable className="dashboard-option-icon"/>Examtimetable
              </a>
              <a
            href="#activeusers@markcard"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("markcard");
              setSidebar(false);
            }}>
              <Markscard className="dashboard-option-icon"/>Markcard
              </a>
              <a
            href="#activeusers@notice"
            className={`dashboar
            d-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("notice");
              setSidebar(false);
            }}>
              <Notice className="dashboard-option-icon"/>Notice
              </a>
              <a
            href="#activeusers@fee"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("fee");
              setSidebar(false);
            }}>
              <Fee className="dashboard-option-icon"/>Fee
              </a>
              <a
            href="#activeusers@leavereport"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("leavereport");
              setSidebar(false);
            }}>
              <Leavereport className="dashboard-option-icon"/>Leave report
              </a>
              <a
            href="#activeusers@dailyreport"
            className={`dashboard-option ${
              active === "active" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("dailyreport");
              setSidebar(false);
            }}>
              <Dailyreport className="dashboard-option-icon"/>Dailyreport
              </a>
          <a
            href="#reservedbook@member"
            className={`dashboard-option ${
              active === "reserved" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("reserved");
              setSidebar(false);
            }}
          >
            <BookIcon className="dashboard-option-icon" /> Reserved
          </a>
          <a
            href="#reservedbook@member"
            className={`dashboard-option ${
              active === "reserved" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("reserved");
              setSidebar(false);
            }}
          >
          <Assignment className="dashboard-option-icon"/>Assignments
          </a>
          <a
            href="#history@member"
            className={`dashboard-option ${
              active === "history" ? "clicked" : ""
            }`}
            onClick={() => {
              setActive("history");
              setSidebar(false);
            }}
          >
            <HistoryIcon className="dashboard-option-icon" /> History
          </a>
          <a
            href="#profile@member"
            className={`dashboard-option ${
              active === "logout" ? "clicked" : ""
            }`}
            onClick={() => {
              logout();
              setSidebar(false);
            }}
          >
            <PowerSettingsNewIcon className="dashboard-option-icon" /> Log out{" "}
          </a>
        </div>

        <div className="dashboard-option-content">
          <div className="member-profile-content" id="profile@member" style={active !== "profile" ? { display: 'none' } : {}} >
            <div className="user-details-topbar">
              <img
                className="user-profileimage"
                src="./assets/images/Profile.png"
                alt=""
              ></img>
              <div className="user-info">
                <p className="user-name">{memberDetails?.userFullName}</p>
                <p className="user-id">
                  {memberDetails?.userType === "Student"
                    ? memberDetails?.admissionId
                    : memberDetails?.employeeId}
                </p>
                <p className="user-email">{memberDetails?.email}</p>
                <p className="user-phone">{memberDetails?.mobileNumber}</p>
              </div>
            </div>
            <div className="user-details-specific">
              <div className="specific-left">
                <div className="specific-left-top">
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>Age</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.age}
                    </span>
                  </p>
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>Gender</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.gender}
                    </span>
                  </p>
                </div>
                <div className="specific-left-bottom">
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>DOB</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.dob}
                    </span>
                  </p>
                  <p className="specific-left-topic">
                    <span style={{ fontSize: "18px" }}>
                      <b>Address</b>
                    </span>
                    <span style={{ fontSize: "16px" }}>
                      {memberDetails?.address}
                    </span>
                  </p>
                </div>
              </div>
              <div className="specific-right">
                <div className="specific-right-top">
                  <p className="specific-right-topic">
                    <b>Points</b>
                  </p>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    540
                  </p>
                </div>
                <div className="dashboard-title-line"></div>
                <div className="specific-right-bottom">
                  <p className="specific-right-topic">
                    <b>Rank</b>
                  </p>
                  <p
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    {memberDetails?.points}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="member-activebooks-content" id="activebooks@member" style={active !== "active" ? { display: 'none' } : {}} >
            <p className="member-dashboard-heading">Issued</p>
            <table className="activebooks-table">
              <tr>
                <th>S.No</th>
                <th>Book-Name</th>
                <th>From Date</th>
                <th>To Date</th>
                <th>Fine</th>
              </tr>
              {memberDetails?.activeTransactions
                ?.filter((data) => {
                  return data.transactionType === "Issued";
                })
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.bookName}</td>
                      <td>{data.fromDate}</td>
                      <td>{data.toDate}</td>
                      <td>
                        {Math.floor(
                          (Date.parse(moment(new Date()).format("MM/DD/YYYY")) -
                            Date.parse(data.toDate)) /
                            86400000
                        ) <= 0
                          ? 0
                          : Math.floor(
                              (Date.parse(
                                moment(new Date()).format("MM/DD/YYYY")
                              ) -
                                Date.parse(data.toDate)) /
                                86400000
                            ) * 10}
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>

          <div className="member-reservedbooks-content"  id="reservedbooks@member" style={active !== "active" ? { display: 'none' } : {}}    >
            <p className="member-dashboard-heading">Reserved</p>
            <table className="activebooks-table">
              <tr>
                <th>S.No</th>
                <th>Book-Name</th>
                <th>From</th>
                <th>To</th>
              </tr>
              {memberDetails?.activeTransactions
                ?.filter((data) => {
                  return data.transactionType === "Reserved";
                })
                .map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.bookName}</td>
                      <td>{data.fromDate}</td>
                      <td>{data.toDate}</td>
                    </tr>
                  );
                })}
            </table>
          </div>
          <div className="member-history-content" id="history@member" style={active !== "active" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">History</p>
            <table className="activebooks-table">
              <tr>
                <th>S.No</th>
                <th>Book-Name</th>
                <th>From</th>
                <th>To</th>
                <th>Return Date</th>
              </tr>
              {memberDetails?.prevTransactions?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.bookName}</td>
                    <td>{data.fromDate}</td>
                    <td>{data.toDate}</td>
                    <td>{data.returnDate}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="member-calendar-content" id="#activeschedules@member" style={active !== "calendar" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading subTitledisplay">Calendar</p>
            <div style={{ width:500 }}>
            <Mycalendar></Mycalendar>
           </div>
           </div>
           <div className="member-calendar-content" id="#activeusers@staff" style={active !== "students" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">UsersList</p>
              <Userslist></Userslist>
           </div>
           <div className="member-calendar-content" id="#activeusers@messages" style={active !== "messages" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Messages</p>
            <Chatmessage></Chatmessage>
           </div>
           <div className="member-calendar-content" id="#activeusers@attendance" style={active !== "attendance" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Attendance</p>
              <Attendancecom></Attendancecom>
           </div>
           <div className="member-calendar-content" id="#activeusers@assignment" style={active !== "assignment" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Assignment</p>
              <Assignmentcom></Assignmentcom>
           </div>
           <div className="member-calendar-content" id="#activeusers@seminar" style={active !== "seminar" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Seminar</p>
              <Seminarcom></Seminarcom>
           </div>
           <div className="member-calendar-content" id="#activeusers@homeworks" style={active !== "homeworks" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Homeworks</p>
              <Homeworkcom></Homeworkcom>
           </div>
           <div className="member-calendar-content" id="#activeusers@exam" style={active !== "exam" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Exam</p>
              <Examcom></Examcom>
           </div>
           <div className="member-calendar-content" id="#activeusers@examtimetable" style={active !== "examtimetable" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">ExamTimetable</p>
            <Examtimetablecom></Examtimetablecom>
           </div>
           <div className="member-calendar-content" id="#activeusers@markcard" style={active !== "markcard" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Markcard</p>
            <Markcard></Markcard>
           </div>
           <div className="member-calendar-content" id="#activeusers@notice" style={active !== "notice" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Notice</p>
            <Noticecom></Noticecom>
           </div>
           <div className="member-calendar-content" id="#activeusers@fee" style={active !== "fee" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Fee</p>
            <Feecom></Feecom>
           </div>
           <div className="member-calendar-content" id="#activeusers@leavereport" style={active !== "leavereport" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">LeaveReport</p>
            <Leavereportcom></Leavereportcom>
           </div>
           <div className="member-calendar-content" id="#activeusers@dailyreport" style={active !== "dailyreport" ? { display: 'none' } : {}}>
            <p className="member-dashboard-heading">Daily Report</p>
            <Dailyreportcom></Dailyreportcom>
           </div>
           

        </div>
      </div>
    </div>
  );
}

export default MemberDashboard;
