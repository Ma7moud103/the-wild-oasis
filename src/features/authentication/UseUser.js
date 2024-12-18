import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

function UseUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser
  });

  return {
    user,
    isLoading,
    isAuthenticated: user?.role === "authenticated"
  };
}

export default UseUser;
