
const Skeleton = () => {
    return (
        <div className="flex flex-col gap-3 w-full bg-base-300 shadow-md basis-1/3 mt-4 rounded-2xl p-5 animate-pulse">
            <div className="h-4 w-28 mt-4 mx-auto bg-slate-400 rounded-lg mb-4"></div>
            <div className="h-3 w-3/4 mx-auto bg-slate-300 rounded-lg"></div>
            <div className="h-3 w-3/4 mx-auto bg-slate-300 rounded-lg"></div>
            <div className="h-3 w-3/4 mx-auto bg-slate-300 rounded-lg"></div>
            <div className="h-3 w-3/4 mx-auto bg-slate-300 rounded-lg"></div>
            <div className="h-3 w-3/4 mx-auto bg-slate-300 rounded-lg"></div>
            <div className="w-10 h-10 mx-auto rounded-full bg-slate-300 mt-4"></div>
            <div className="h-10 w-1/3 mx-auto mt-4 mb-4 bg-slate-400 rounded-lg"></div>
        </div>
    )
}

export default Skeleton
