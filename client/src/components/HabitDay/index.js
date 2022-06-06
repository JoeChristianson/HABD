function HabitDay({habitDay,handleComplete}){
    return(
        <div className={habitDay.isDone?"done":""}>
            <span>{habitDay.habit.name}</span>
            <button data-habit-day-id={habitDay.habit._id} onClick={handleComplete}>x</button>
        </div>
    )
}

export default HabitDay