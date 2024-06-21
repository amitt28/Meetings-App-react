function Card(props) {
    return(
        <>
       <div class="max-w-sm bg-white border rounded-lg shadow-sm p-7 border-neutral-200/60">
    <a href="#_" class="block mb-3">
        <h5 class="text-xl font-bold leading-none tracking-tight text-neutral-900">{props.title}</h5>
    </a>
    <p>{props.date}</p>
    <p class="mb-4 text-neutral-500">{props.desc}</p>
    <button class="inline-flex items-center justify-between w-auto h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90">
        <span>Join Meeting</span>
        <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
        </>
    )
}

export default Card