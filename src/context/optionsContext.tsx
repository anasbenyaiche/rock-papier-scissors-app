/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { HandOption, IOptionContext, IOptions, OptionsContextProps } from "./optionContextTypes";
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from "react-icons/fa";
import { initialState } from "./initialValues";
import { scoreReducer } from "../reducers/scoreReducer";

export const options: IOptions[] = [
    { name: HandOption.rock, icon: <FaRegHandRock size={60} /> },
    { name: HandOption.papier, icon: <FaRegHandPaper size={60} /> },
    { name: HandOption.scissors, icon: <FaRegHandScissors size={60} /> }
]

export const OptionsContext = createContext<IOptionContext>({
    options: [],
    state: initialState,
    dispatch: () => { }
})
export const OptionProvider = (props: OptionsContextProps) => {
    const [state, dispatch] = useReducer(scoreReducer, initialState)

    const contextValue = {
        options,
        state: state,
        dispatch: dispatch

    }

    return <OptionsContext.Provider value={contextValue}>{props.children}</OptionsContext.Provider>
}

export const useOptions = () => {
    const context = useContext(OptionsContext)
    return context

}