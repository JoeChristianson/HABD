

export const ToDo = ({toDo,handleComplete})=>{
    console.log("toDo",toDo)
    return(

        <div className="list-item">
                <span>{toDo.toDoForm.name}</span><button data-id={toDo._id} onClick={handleComplete}>X</button>
            </div>
        )
}