import useAuth from "../../hook/useAuth";

const Overview = () => {
     const { user } = useAuth();
     return (
          <div className="flex item-center justify-center w-full h-full">
               <h1 className="text-4xl font-bold text-center">{user.email}</h1>
          </div>
     );
};

export default Overview;