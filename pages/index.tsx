import type { NextPage } from "next";
import { useState, useEffect } from "react";
import SignUp from "../components/Signup";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
   homeWrapper: `flex`,
  center: `flex-1`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    signUpContainer: `flex items-center justify-center w-screen h-[70vh]`,
}


const Home: NextPage = () => {
  const [registered, setRegistered] = useState(true);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [users, setUsers] = useState([]);
  return (
    <div className={style.wrapper}>
      {/* <Header/> */}
    
      {registered ? (
        // <div className={style.homeWrapper}>
         <div className={style.content}>
         
              <SideBar />
            <Feed />
            <Widgets />
          </div>
        // </div>
      ) : (
        <div className={style.signUpContainer}>
          <SignUp
            setRegistered={setRegistered}
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
