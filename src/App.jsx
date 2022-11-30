import { PrimaryButton } from "./components/Button/Default";
import { Input } from "./components/Input/Default";
import { Select } from "./components/Input/Select";

export function App() {

    return (
    <div>
        <PrimaryButton>Oi</PrimaryButton>
        <Input placeholder="Teste" type="text" />
        <label htmlFor="123">Teste</label>
        <Select id="123">
            <option value="">Teste</option>
            <option value="">Teste</option>
        </Select>
    </div>
    )
}