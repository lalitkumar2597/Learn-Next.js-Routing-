import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();
     
    const handleClick = () => {
        console.log("placing order")
        router.push("/product") // push and replace both can be used here for oing to the product list page 
}

    return (
      <div>
        <h1> Home Page</h1>
        <Link href="/blog">
          <h2>Blog</h2>
        </Link>
        <Link href="/product">
          <h2>Products </h2>
            </Link>
            <button onClick={handleClick}>
                Place Order 
            </button>
      </div>
    );
}

export default Home;