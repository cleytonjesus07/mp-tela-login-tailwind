import { FormEvent } from "react";

export default function Form({setData}:{setData:React.Dispatch<React.SetStateAction<{
  isVerified: boolean;
}>>}){
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
      const redirectToHome = () => {
        alert("Formulário enviado com sucesso! :D")
        setData(old=>({...old,isVerified:true}));
      }
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const {email,password,name} = Object.fromEntries(form) as {email:string,password:string,name:string};
        (!email && !password && !name) ? alert("Você deve preencher todos os campos!") : 
        (!email && !password) ? alert("Você deve preencher os campos de Email e Senha!") : 
        (!email && !name) ? alert("Você deve preencher os campos de Email e Nome!") : 
        (!password && !name) ? alert("Você deve preencher os campos de Senha e Nome!") : 
        (!name) ? alert("Você deve preencher o campo de Nome!") : 
        (!password) ? alert("Você deve preencher o campo de Senha!") : 
        (!email) ? alert("Você deve preencher o campo de Email!") : redirectToHome()
      }
    return (
        <main className='flex  bg-black [&>div]:flex-1 overflow-hidden rounded-md'>
      {/* Esquerda */}
      <div className='px-8 py-4 flex flex-col items-center justify-center'>
        <div className='py-2 flex justify-center items-end gap-2'>
          {/* Título */}
          <h1 className='font-bold title '>GalaxyForm</h1>
          <span className='block w-2 h-2 border rounded-full animate-bounce'></span>
        </div>
        <form onSubmit={handleSubmit} className='space-y-5 [&>div>input]:text-xs [&>div>label]:text-xs [&>div>label]:mb-1 [&>div>input]:py-1 [&>div>input]:px-1 form'>
        <div className='flex flex-col'>
            <label htmlFor='name' className='text-gray-400'>Nome</label>
            <input className='bg-transparent border-b outline-none' name='name' id='name' type="text" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-gray-400'>Email</label>
            <input className='bg-transparent border-b outline-none' name='email' id='email' type="email" />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-gray-400'>Senha</label>
            <input className='bg-transparent border-b outline-none' name='password' id='password' type="password" />
          </div>
            <div className='flex justify-end items-center w-full  gap-1'>
          <span className='text-[.6em] text-gray-400 directionAnimate '>{"->"}</span>
        <a href='#' className='text-[.6em] underline text-gray-400'>Esqueci minha senha</a>
        </div>
        <div className='w-full'>
          <input type='submit' value="Entrar" className='bg-gradient-to-tr from-red-600 to-blue-600 w-full rounded-md cursor-pointer relative active:top-1'/>
        </div>
        </form>
       <div className='flex justify-center items-center w-full py-2 gap-1'>
       <a href='#' className='text-[.6em] underline text-gray-400'>Ainda não tenho uma conta</a>
       </div>
      </div>
      {/* Direita */}
      <div className='max-md:hidden bg-image min-w-96 image relative bg-cover bg-no-repeat bg-center '>
      </div>
    </main>
    )
}