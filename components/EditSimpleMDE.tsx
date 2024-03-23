
import React from 'react'

const EditSimpleMDE = () => {
  return (
    <div>EditSimpleMDE</div>
  )
}

export default EditSimpleMDE
// "use client";

// import { createClient } from "@/utils/supabase/client";
// import "easymde/dist/easymde.min.css";
// import dynamic from "next/dynamic";
// import { useCallback, useState } from "react";
// import { toast } from "sonner";
// import { Button } from "./ui/button";
// import {useRouter} from 'next/navigation'

// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });

// const EditSimpleMDE = ({ id, item }: any) => {
//   const supabase = createClient();
//   const router = useRouter()

//   const [content, setContent] = useState<string | undefined>(item);
//   const [loading, setLoading] = useState(false);

//   const onChange = useCallback((content: string) => {
//     setContent(content);
//   }, []);

//   const update = async () => {
//     try {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from("aboutus")
//         .update({ content })
//         .eq("id", id)
//         .select();

//       if (data) {
//         toast.success("Updated successfully!", {
//           position: "top-center",
//         });
//           router.refresh()
//       }

//       if (error) {
//         toast.error("Something went wrong. Please try again.", {
//           position: "top-center",
//         });
//       }
//     } catch (error) {
//       console.log("Error Msg: ", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SimpleMDE
//         value={content}
//         onChange={onChange}
//         placeholder='Enter blog content here'
//       />
//       <Button onClick={update} className='w-full' disabled={loading}>{loading ? "Updating ..." : "Update"}</Button>
//     </div>
//   );
// };

// export default EditSimpleMDE;
