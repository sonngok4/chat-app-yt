import PropTypes from 'prop-types'

function GenderCheckbox({ onCheckboxChange, selectedGender }) {
    return (
        <div className="flex">
            <div className="form-control">
                <label htmlFor="male" className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text text-white">Male</span>
                    <input
                        type="checkbox"
                        id="male" name="male"
                        className="checkbox border-slate-950 bg-transparent"
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")} />
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="female" className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text text-white">Female</span>
                    <input
                        type="checkbox"
                        id="female"
                        name="female"
                        className="checkbox border-slate-950 bg-transparent"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")} />
                </label>
            </div>
        </div>
    )
}

GenderCheckbox.propTypes = {
    onCheckboxChange: PropTypes.func.isRequired,
    selectedGender: PropTypes.string.isRequired,
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