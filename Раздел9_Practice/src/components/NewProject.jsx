import Input from "./Input.jsx"
export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><btton>Save</btton></li>
            </menu>
            <div>
                <Input label="Title"/>
                <Input label="Description" textarea/>
                <Input label="Due Date"/>
            </div>
        </div>
    )
}