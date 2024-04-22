const { useState } = require("react");
const Accordian = require("./Accordian");

const AccordianPanel = (props) => {

    const [Show, setShow] = useState(false);
    const [ShowIndex, setShowIndex] = useState(null);

    const handle = (variable) => {
        setShowIndex(variable);
    }

    const [Multiple, setMultiple] = useState(false);

    const handleMultiple = () => {
        if(!Multiple){
            setShowIndex(null);
        }
        setMultiple(!Multiple);
    }

    return (
        <>
            <div className="heading flex justify-center">
                <h1 className="text-2xl">Accordian Panel</h1>
            </div>
            <div className="btn flex justify-center my-5">
                <button className="py-3 px-4 bg-gray-500 border rounded-md text-white" onClick={handleMultiple}>{Multiple ? <span>Disable Multiple</span>: <span>Enable Multiple</span>}</button>
            </div>
            <div className="conatiner flex flex-col items-center p-2 gap-3 mt-10">
                {
                    props.data.map((obj) => {
                        return <Accordian data={obj} show={obj.index == ShowIndex ? true : false} change = {(variable) => handle(variable)} multipleButton={Multiple}/>
                    })
                }
            </div>
        </>
    )
}

module.exports = AccordianPanel;