"use client";
import Comment from "@/components/Comment";
import { CommentProps } from "@/libs/types";
import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner */}
        <PostOwnner username="Saran Maihom 660610796" userImagePath="/profileImages/My pic.jpg" 
        statusText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" likeNum={100}/>
    
        {/* Comment */}
        <Comment username="Lisa" userImagePath="/profileImages/lisa.jpg" commentText="จริงค่า" likeNum={999} />

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              หมาน้อย
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>2 คน</span>
            </div>
          </div>
        </div>

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
