import Image from "next/image";

export default function Home() {
  return (
   <main className="w-[60vw] m-auto">
    <h1 className="w-full text-center bg-[#dddddd]">Criador de Memes</h1>

    <canvas className="vh-[60vh] w-full bg-[#dddddd] mt-[10px]">

    </canvas>
    <label htmlFor="superior">Informe o texto superior</label>
    <textarea className="border-[1px] border-black w-full"
    name="superior" 
    id="superior"
    />   
    <label htmlFor="inferior">Informe o texto inferior</label>
    <textarea className="border-[1px] border-black w-full"
    name="inferior" 
    id="inferior"
    />   
   </main>
  );
}
