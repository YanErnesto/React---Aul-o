import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    return <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div
        onClick={() => navigate(-1)} 
        className="flex justify-center relative mb-6"
        >
            <button className = 'absolute bottom-0 left-0 top-0 text-slate-100'>
                <ChevronLeftIcon /> 
            </button>
            
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h1 className= "text-xl text-slate-600 font-bold">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
}

export default TaskPage;