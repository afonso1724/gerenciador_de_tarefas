import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
    const navigate = useNavigate();
      const [searchParams] = useSearchParams();
      const title = searchParams.get("title")
      const description = searchParams.get("description")
    return (
        <div class="w-screen h-screen flex justify-center p-6 bg-[radial-gradient(ellipse_at_center,_#dbeafe_0%,_#f8fafc_60%)]">
            <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative mb-6 text-blue-500">
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0">
                    <ChevronLeftIcon></ChevronLeftIcon>
                </button>
                <h1 className="text-blue-500 text-3xl text-center font-bold">Detalhes da Tarefa
                  </h1> 
            </div>

                  <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-blue-500 font-bold"> {title}</h2>
                    <p className="text-blue-500">{description}</p>
                  </div>
                
              </div>
            </div>
    );
}
 
export default TaskPage;