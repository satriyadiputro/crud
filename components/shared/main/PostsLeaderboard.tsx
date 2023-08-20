import MiniCardLeaderBoard from "@/components/cards/MiniCardLeaderBoard";
import MiniCardLeaderBoardHead from "@/components/cards/MiniCardLeaderBoardHead";
import Image from "next/image";
import React from "react";
import PostsCardHorizontal from "./PostsCardHorizontal";

const PostsLeaderboard = () => {
  return (
    <>
      <div className="mt-5">
        <PostsCardHorizontal />
        <div className="md:flex gap-4">
          <MiniCardLeaderBoard />
          <MiniCardLeaderBoard />
          <MiniCardLeaderBoard />
        </div>
      </div>
    </>
  );
};

export default PostsLeaderboard;
