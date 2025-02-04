
function GenderCheckbox() {
    return (
        <div className="flex">
            <div className="form-control">
                <label htmlFor="male" className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" id="male" name="male" className="checkbox border-slate-900 bg-transparent" />
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="female" className={`label gap-2 cursor-pointer`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" id="female" name="female" className="checkbox border-slate-900 bg-transparent" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox


// STARTER CODE FOR THIS FILE
// function GenderCheckbox() {
//     return (
//         <div className="flex">
//             <div className="form-control">
//                 <label htmlFor="male" className={`label gap-2 cursor-pointer`}>
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" id="male" name="male" className="checkbox border-slate-900 bg-transparent" />
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label htmlFor="female" className={`label gap-2 cursor-pointer`}>
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" id="female" name="female" className="checkbox border-slate-900 bg-transparent" />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckbox