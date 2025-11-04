import Loader from "./loader"
import Spinner from "./spinner"
export default function Home() {
  return (
    <div className="bg-[url('/images/AKCASAD.png')] bg-bottom bg-cover min-h-screen flex flex-col items-center justify-end  ">
      <div className="text-center h-[50vh] flex flex-col pt-10   text-primary leading-[30px] justify-center  ">
        <h1 className="text-[25px]   capitalise">Site en cours de <br></br> construction</h1>
        <p className="mt-2">Merci de votre patience!</p>
        {/* <Loader /> */}
        <div className="relative mt-[5vh]">
        <Spinner />
        </div>
      </div>
    </div>
  );
}
