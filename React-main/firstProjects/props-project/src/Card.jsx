
//you can use his method need  {props.PersonalData.Fistname}
// function Card(props) {
//     console.log("props",props)
//     return (
//         <div className="relative h-[400px] w-[300px] rounded-md">
//   <img
//     src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
//     alt="AirMax Pro"
//     className="z-0 h-full w-full rounded-md object-cover"
//   />
//   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//   <div className="absolute bottom-4 left-4 text-left">
//     <h1 className="text-lg font-semibold text-white">{props.PersonalData.Fistname}+ {props.PersonalData.lastName}</h1>
//     <p className="mt-2 text-sm text-gray-300">
//     {props.PersonalData.Intro}
//     </p>
//     <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold ">
//       View Profile →
//     </button>
//   </div>
// </div>
//     )
// }
//you can use his method need  this to {props.PersonalData.Fistname} instead of {PersonalData}
function Card({PersonalData}) {
    console.log("PersonalData",PersonalData)
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{PersonalData.Fistname ||"Rohit"} {PersonalData.lastName|| "Gupta"}</h1>
    <p className="mt-2 text-sm text-gray-300">
    {PersonalData.Intro}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold ">
      View Profile →
    </button>
  </div>
</div>
    )
}

export default Card;