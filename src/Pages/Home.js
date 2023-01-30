import Products from "../Component/Products";

const Home = () => {
    return (
        <>
            <div className="pizza py-16">
                <div className="container mx-auto flex items-centre justify-between py-50 mr-400">
                    <div className="w-1/2">
                        <h6 className="text-lg ml-2"><em>Are you hungry ?</em></h6>
                        <h1 className="text-3xl md:text-6xl font-bold">Dont Wait !</h1>
                        <button className="px-3 py-2 rounded-full text-white-font-bold mt-4 bg-yellow-400 hover:bg-yellow-600 ">Order now</button>
                    </div>
                    <div className="w-1/2">
                        <img className="w-4/5" src="/images/pizzapic.png" alt="pizza" />
                    </div>
                </div>
            </div>
            <div className="pb-6">
                <Products />

            </div>
        </>

    )
}
export default Home;