import { BoxArea } from "./BoxArea"
import { useUI } from "../Hooks/useUI"
import { HeadBar } from "./HeadBar";

export const Chat = () => {
  
  const {showLetters}=useUI();

  return (
    <section className='w-[80%] flex-1 flex flex-col relative justify-center items-center overflow-hidden'>
        <div className='flex flex-col flex-1 w-[100%] bg-[#D8E2FF] overflow-x-hidden'>
          {
            showLetters ? <HeadBar/> : <div className="flex-1"></div>
          }
          <div className='h-20 bg-[#D8E2FF] w-[100%] flex-shrink-0'></div>
        </div>
        <BoxArea/>
    </section>
  )
}
