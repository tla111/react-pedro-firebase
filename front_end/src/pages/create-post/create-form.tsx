import { useForm } from "react-hook-form";
import * as yup from "yup";

export const CreateForm = () => {
    return (
        <form>
            <input placeholder="Title..." />
            <input placeholder="Description..." />
            <input type="submit" />
        </form>
    )
}