import { Button } from "react-bootstrap"
import MyButton from "./components/ui/Button"
import StateCounter from "./components/ui/StateCounter"


function BasicComponent(){ {/*Parent Component */}
    return <> 
        <MyButton>
            Simpan
        </MyButton>

        <MyButton>
            Hapus
        </MyButton>

        <MyButton>
            Ini buttonku, mana buttonmu
        </MyButton>

        <Button variant="warning">Test Component Lagi</Button>

        <StateCounter/>

    </>
}

export default BasicComponent