import { useEffect } from "react";
import supabase from "@/pages/api/client";

//* this should be deleted ...

// const useUser = () => {
//   useEffect(() => {
//     const getUser = async () => {
//       try {
//         const { data: { user } } = await supabase.auth.getUser();
//         console.log('user', user)
//         return user;
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getUser();
//   }, []);
// };

const useUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  try {
    return user;
  } catch (error) {
    console.log(error);
  }
};

export default useUser;
