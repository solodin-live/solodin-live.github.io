export default function StarfieldBackground() {
  return (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-40 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-60 right-1/3 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-40 left-20 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-20 right-40 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-900"></div>
      <div className="absolute top-1/3 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-200"></div>
      <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-purple-200 rounded-full animate-pulse delay-600"></div>
    </div>
  )
}
