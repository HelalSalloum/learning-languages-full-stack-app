import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getUserFriends } from "../lib/api";
import NoFriendsFound from "../components/NoFriendsFound";
import FriendCard from "../components/FriendCard";
import { UsersIcon } from "lucide-react";
import { Link } from "react-router";

const FriendsPage = () => {
  const queryClient = useQueryClient();

  const { data: userFriends, isLoading } = useQuery({
    queryKey: ["userFriends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-6 items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Your Friends
          </h2>
          <Link to="/notifications" className="btn btn-outline btn-sm">
            <UsersIcon className="mr-2 size-4" />
            Friend Requests
          </Link>
        </div>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : userFriends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {userFriends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
