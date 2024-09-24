import { createContext, ReactNode, RefObject, useRef, useState } from "react";

type HomeContextData = {
    upperText: string;
    lowerText: string;
    canvasRef: RefObject<HTMLCanvasElement>
    setUpperText: (value:string) => void;
    setLowerText: (value:string) => void;

}

export const HomeContext = createContext({} as HomeContextData)

type HomeContextProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({children}: HomeContextProviderProps) => {
    const [upperText, setUpperText] = useState("");
    const [lowerText, setLowerText] = useState("");
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return(
        <HomeContext.Provider value ={{
            upperText,
            lowerText,
            setUpperText,
            setLowerText,
            canvasRef
        }}/>
    )
}