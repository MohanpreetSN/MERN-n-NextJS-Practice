import { useState } from "react"

export default function UsernameForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "" })

    const handleForm = (evt) => {
        const fieldName = evt.target.name;
        const val = evt.target.value;
        setFormData(currData => {
            // currData[fieldName] = val;
            // return {...currData}
            return {
                ...currData,
                [fieldName]: val,
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData.firstName, formData.lastName);
    }
    return (
        <div>
            <label htmlFor="firstname">First name: </label>
            <input type="text" placeholder="first name" id="firstname"
                value={formData.firstName} onChange={handleForm} name="firstName" />

            <label htmlFor="lastname">Last name: </label>
            <input type="text" placeholder="last name" id="lastname"
                value={formData.lastName} onChange={handleForm} name="lastName" />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


// export default function UsernameForm() {
//     const [firstName, setFirstName] = useState("");

//     const updateFirstName = (evt) => {
//         setFirstName(evt.target.value);
//     }
//     const handleSubmit = () => {
//         console.log(firstName, lastName);
//     }
//     return (
//         <div>
//             <label htmlFor="firstname">First name: </label>
//             <input type="text" placeholder="first name" id="firstname"
//                 value={firstName} onChange={updateFirstName} />

//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
// }