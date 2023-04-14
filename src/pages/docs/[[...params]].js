// its for catching all the routes write anything after docs
import { useRouter } from "next/router";

const Docs = () => {
  const router = useRouter();
  const { params =[]} = router.query;
  console.log(params);
    if (params.length === 2) {
        return (
            <h1>viewing docs for feature {params[0]} and concept { params[1]}</h1>
    )
    } else if(params.length === 1) {
        return (
            <h1>
                viewing docs for features {params[0]}
        </h1>
    )
    } else {
        return (
          <div>
            <h1>Docs Home Page </h1>
          </div>
        );
}
  
};

export default Docs;
