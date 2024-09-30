import { createContext, ReactNode, RefObject, useRef, useState } from "react";

type imageData = {
    src: string;
}

type HomeContextData = {
    images: imageData[];
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
    const [images, setImage] = useState<imageData[]>([]);

    const onDrop = (selectedFiles: File[]) =>{
        selectedFiles.map(file =>{
            const reader = new FileReader();
            reader.onload = (e) => {
                const updateImages: imageData[] = [...images, {src: `${e.target?.result}`}];
                setImage(updateImages);
            }
        });
    }

    return(
        <HomeContext.Provider value ={{
            upperText,
            lowerText,
            setUpperText,
            setLowerText,
            canvasRef,
            images
        }}/>
    )
}