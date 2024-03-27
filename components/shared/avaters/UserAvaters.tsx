import { useCurrentUser } from "@/lib/auth";

const UserAvaters = () => {
    const currentUser = await useCurrentUser()
  return <div>UserAvaters</div>;
};

export default UserAvaters;
