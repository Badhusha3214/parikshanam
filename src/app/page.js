
import Link from "next/link";


const page =  () => {
 
  return (
    <div className="h-screen bg-yellow-500">
     <Link href='members' className="p-5 border">Members</Link>
    </div>
  );
};

export default page;
